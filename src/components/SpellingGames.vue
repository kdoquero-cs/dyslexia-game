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

          <div class="spelling">
            <img
              @click="playInstruction"
              src="@/assets/icons/Hear instructions.png"
              alt=""
              srcset=""
            />
          </div>
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
              <h2>Listen</h2>
              <img src="@/assets/icons/Sound icon.svg" alt="Sound" srcset="" />
            </div>
            <div
              @click="record"
              v-bind:class="[isRecording ? 'recording' : '']"
              class="speak"
            >
              <h2>Speak</h2>
              <img
                src="@/assets/icons/noun_micro_3396391 1.png"
                alt="micro"
                srcset=""
              />
            </div>
          </div>
          <button :disabled="!recordingState" class="next" @click="nextWord">
            Next
          </button>
        </div>
      </div>
    </div>

    <done-button :disabled="!completed" :id="6"></done-button>
  </section>
</template>

<script>
import { computed, defineComponent, ref, watch } from "@vue/composition-api";
import { useSpeechSynthesis } from "../composables/useSpeechSynthesis";
import { useSpeechRecognition } from "../composables/useSpeechRecon";
import router from "@/router";
import { useCompanion } from "../composables/useCompanion";
import OpenChest from "@/assets/voices/OpenChest.mp3";
import MemorySpanBG from "@/assets/backgrounds/memory-span.jpg";
import OralSpellingBG from "@/assets/backgrounds/oral-spelling.png";
import { usePlayAudio } from "../composables/usePlayAudio";
import { useGameState } from "../composables/useGameState";
import DoneButton from "./DoneButton.vue";
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
            "Word",
            "Cow",
            "Dog",
            "paper",
            "have",
            "like",
            "home",
            "dad",
            "little",
            "goat",
            "this",
          ];
          return {
            title: "Oral spelling",
            background: OralSpellingBG,
            textOne: "Here, I'll say a few words.",
            textTwo: "Can you help me spell them?",
          };
        case "MemorySpan":
          values.value = ["1", "1 3", "4 3 5", "3 2 1 5", "3 4 1 6 2"];
          return {
            title: "Memory span",
            background: MemorySpanBG,
            textOne: "We need to open this chest.",
            textTwo: "I'll tell you the code, remember it and repeat after me.",
          };
      }
    });
    const companionHook = useCompanion.getInstance();
    let companionFromHook =
      companionHook.companion.value || companionHook.companionList[0];
    const companion = ref(companionFromHook);

    const count = ref(0);
    const result = ref([]);
    const score = ref(0);
    const completed = computed(() => count.value === values.value.length);
    const gameState = useGameState.getInstance();
    const goToGameList = () => {
      gameState.updateGame(6);
      router.push({ path: "/gamelist" });
    };

    const currentWord = computed(() => values.value[count.value]);

    const { playOnWord, isSpeaking: synthesisIsSpeaking } =
      useSpeechSynthesis();
    const { isRecording, transcript, confidence } =
      useSpeechRecognition(startRecon);
    const play = () => {
      playOnWord(currentWord.value);
    };
    const compare = () => {
      console.log("compare", "ok");
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
        result.value.push({
          word: currentWord.value,
          speech: transcript.value,
        });
        ++score.value;
      }
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
  top: 80%;
}
.spelling-box {
  height: 328px;
  width: 350px;
  margin: 30px;
  border-radius: 15px;
  background-color: #f9edee;
  position: relative;
  padding: 40px;
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
.next-button {
  position: absolute;
  bottom: 80px;
  right: 26px;
  cursor: pointer;
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
