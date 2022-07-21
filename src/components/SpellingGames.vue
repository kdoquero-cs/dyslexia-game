<template>
  <section
    v-bind:style="{
      backgroundImage: `url(${componentSettings.background})`,
    }"
    class="container"
  >
    <div class="display">
      <div class="display">
        <div class="spelling-box">
          <h1>{{ componentSettings.title }}</h1>
          <p>{{ componentSettings.textOne }}</p>
          <p class="words2">
            {{ componentSettings.textTwo }}
          </p>
          <button type="button" class="button-play" @click="playInstruction">
            <div class="button_text">
              <img
                src="@/assets/icons/Sound_icon.svg"
                alt=""
                srcset=""
                width="30"
                height="30"
              />
              <div>
              <span class="listen">
                <!-- <span class="sr-only">Listen to the</span> -->
                Instructions
              </span>
              </div>
            </div>
          </button>
          <img
            class="avatar"
            v-if="companion"
            :src="companion.path"
            :alt="companion.name"
          />
        </div>
        <div class="inputs-container">
          <div class="inputs">
            <div
              @click="play"
              v-bind:class="[synthesisIsSpeaking ? 'playing' : '']"
              class="listen"
            >
              <h2>Ecoutes</h2>
              <img
                src="@/assets/icons/Sound_icon.svg"
                alt="Sound"
                srcset=""
                width="100"
                height="100  "
              />
            </div>
            <div
              @click="record"
              v-bind:class="[isRecording ? 'recording' : '']"
              class="speak"
            >
              <h2>Parles</h2>
              <img
                src="@/assets/icons/noun_micro_3396391 1.svg"
                alt="micro"
                srcset=""
                width="100"
                height="100"
              />
            </div>
          </div>
          <button :disabled="!recordingState" v-if="!completed" class="next" @click="nextWord">
           Suivant
          </button>
        </div>
      </div>
    </div>

    <done-button :disabled="!completed" :id="4"></done-button>
  </section>
</template>

<script>
import { computed, defineComponent, ref, watch } from "@vue/composition-api";
import { useSpeechSynthesis } from "../composables/useSpeechSynthesis";
import { useSpeechRecognition } from "../composables/useSpeechRecon";
import router from "@/router";
import { useCompanion } from "../composables/useCompanion";
import OpenChest from "@/assets/voices/OpenChest.mp3";
import Boite from "@/assets/spelling-game/boite.mp3";
import Crayon from "@/assets/spelling-game/crayon.mp3";
import Femme from "@/assets/spelling-game/femme.mp3";
import Maison from "@/assets/spelling-game/maison.mp3";
import Porte from "@/assets/spelling-game/porte.mp3";
import Table from "@/assets/spelling-game/table.mp3";

import { usePlayAudio } from "../composables/usePlayAudio";
import { useGameState } from "../composables/useGameState";
import DoneButton from "./DoneButton.vue";
import store from "../store";

export default defineComponent({
  components: { DoneButton },
  props: {
    values2: {
      default: null,
      background: null,
    },
    components: {
      DoneButton,
    },
  },
  setup(props, { root }) {
    const { play: playAudio } = usePlayAudio();
    const startRecon = ref(false);
    const recordingState = ref(false);
    const values = ref([]);
    // to do Props Values & settings  instead
    const componentSettings = computed(() => {
      switch (root.$route.name) {
        case "OralSpelling":
          values.value = [
            { text: "boîte", voice: Boite },
            { text: "crayon", voice: Crayon },
            { text: "femme", voice: Femme },
            { text: "maison", voice: Maison },
            { text: "porte", voice: Porte },
          ];
          return {
            title: "Expression orale",
            background:
              "https://img.freepik.com/free-vector/golf-course-with-green-grass-pond-sunset_107791-6976.jpg?w=1200",
            textOne: "Ici, je vais dire quelques mots.",
            textTwo: "Peux-tu m'aider à les épeler ?",
          };
        case "Mémoire":
          values.value = ["1", "1 3", "4 3 5", "3 2 1 5", "3 4 1 6 2"];
          return {
            title: "Memory span",
            background:
              "https://img.freepik.com/premium-vector/forest-pond-nature-landscape-calm-lake-river-flow-green-trees-rocks-early-pink-morning-wild-beautiful-scenery-view-summer-wood-sunrise-cartoon-background-vector-illustration_107791-7555.jpg?w=1200",
            textOne: "Il faut qu'on ouvre ce coffre.",
            textTwo: "Je vais te dire le code, mémorises-le et répètes après moi.",
          };
      }
    });
    const companionHook = useCompanion.getInstance();
    let companionFromHook =
      companionHook.companion.value || companionHook.companionList[0];
    const companion = ref(companionFromHook);

    const count = ref(0);
    const correctCount = ref(0);
    const result = ref([]);
    const score = ref(0);
    const completed = computed(() => count.value === values.value.length);
    const gameState = useGameState.getInstance();
    const goToGameList = () => {
      gameState.updateGame(4);
      router.push({ path: "/gamelist" });
    };

    const currentWord = computed(() => values.value[count.value].text);
    const currentSpelling = computed(() => values.value[count.value].voice);


    const { playOnWord, isSpeaking: synthesisIsSpeaking } =
      useSpeechSynthesis();
    const { isRecording, transcript, confidence } =
      useSpeechRecognition(startRecon);

    const play = () => {
      playAudio(currentSpelling.value);
    };

    const compare = () => {
    };
    const record = () => {
      recordingState.value = true;
      startRecon.value = true;
      compare();
    };
    const nextWord = () => {
      recordingState.value = false;
      if (!completed.value) {
        count.value = ++count.value;
      }
    };
    const playInstruction = () => {
      playAudio(OpenChest);
    };

    watch(isRecording, (currentRecording) => {
      startRecon.value = currentRecording;
    });
    watch(transcript, (currentTranscript) => {
      if (
        currentTranscript &&
        currentWord.value &&
        currentTranscript.toLowerCase() &&
        currentTranscript.includes(currentWord.value.toLowerCase())
      ) {
        ++correctCount.value;
        result.value.push({
          word: currentWord.value,
          speech: transcript.value,
        });
      }
      score.value = (correctCount.value * 100) / values.value.length;
      
      store.setGameResult("ORAL_SPELLING", score.value);
    });
    return {
      play,
      companion,
      record,
      nextWord,
      goToGameList,
      playInstruction,
      recordingState,
      componentSettings,
      synthesisIsSpeaking,
      isRecording,
      completed,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  width: 100%;
  height: 100%;
}

.avatar {
  width: 200px;
  position: absolute;
  left: -1em;
  top: 280px;
  
}
.spelling-box {
  height: 428px;
  width: 450px;
  margin: 30px;
  border-radius: 15px;
  background-color: #f9edee;
  position: relative;
  padding: 10px;
}
.spelling-box .words2 {
  margin-top: 50px;
}
.spelling {
  margin-top: 35px;
  margin-left: 143px;
  cursor: pointer;
}
.inputs-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.inputs {
  display: flex;
}
.listen,
.speak {
  width: 200px;
  border-radius: 100px;
  background-color: white;
  height: 200px;
  margin: 20px;
  cursor: pointer;
  z-index: 10;
}
.listen h2,
.speak h2 {
  margin-top: 25px;
}
.next {
  width: 200px;
  height: 90px;
  border-radius: 45px;
  border-color: none;
  background-color: #f9edee;
  font-weight: 800;
  font-size: 20px;
  border-style: unset;
  z-index: 10;
  cursor: pointer;
}
.next:disabled {
  cursor: not-allowed;
  background-color: #c1c1c1;
  color: black;
}
.button-play {
   border: 2px solid #f9edee;
}
.next-button {
  position: absolute;
  bottom: 80px;
  right: 26px;
  cursor: pointer;
}

.button_text {
   width: 150px;
   display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: space-between;
  background-color: #f9edee;
  border: #f9edee;
}
.display {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
}
.playing,
.recording {
  background-color: #cef5d9;
  border: 3px solid black;
}
</style>
