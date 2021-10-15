<template>
  <section class="container">
    <div class="display">
      <div class="display">
        <div class="spelling-box">
          <h1>Spelling</h1>
          <p>Here, I'll say a few words.</p>
          <p class="words2">Can you help me spell them?</p>

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
            <div @click="play" class="listen">
              <h2>Listen</h2>
              <img src="@/assets/icons/Sound icon.svg" alt="Sound" srcset="" />
            </div>
            <div @click="record" class="speak">
              <h2>Speak</h2>
              <img
                src="@/assets/icons/noun_micro_3396391 1.png"
                alt="micro"
                srcset=""
              />
            </div>
          </div>
          <button class="next" @click="nextWord">Next Word</button>
        </div>
      </div>
    </div>

    <csm-pill @csmClick="goToGameList" class="next-button">I'm done!</csm-pill>
  </section>
</template>

<script>
import { computed, defineComponent, ref, watch } from "@vue/composition-api";
import { useSpeechSynthesis } from "../composables/useSpeechSynthesis";
import { useSpeechRecognition } from "../composables/useSpeechRecon";
import router from "@/router";
import { useCompanion } from "../composables/useCompanion";
import SpellingExercise from "@/assets/voices/SpellingExercise.mp3";
import { usePlayAudio } from "../composables/usePlayAudio";
export default defineComponent({
  props: {},
  setup() {
    const {  play : playAudio } = usePlayAudio();
    const startRecon = ref(false);
    const goToGameList = () => router.push({ path: "/gamelist" });
    const companionHook = useCompanion.getInstance();
    let companionFromHook =
      companionHook.companion.value || companionHook.companionList[0];
    const companion = ref(companionFromHook);
    const values = ref([
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
    ]);
    const count = ref(0);
    const result = ref([]);
    const score = ref(0);

    const currentWord = computed(() => values.value[count.value]);

    const { playOnWord } = useSpeechSynthesis();
    const { isRecording, transcript, confidence } =
      useSpeechRecognition(startRecon);
    const play = () => {
      playOnWord(currentWord.value);
    };
    const compare = () => {
      console.log("compare", "ok");
    };
    const record = () => {
      startRecon.value = true;
      compare();
    };
    const nextWord = () => {
      count.value = ++count.value;
    };
    const playInstruction = () => {
      playAudio(SpellingExercise);
    };

    watch(isRecording, (currentRecording) => {
      console.log(currentRecording);
      startRecon.value = currentRecording;
    });
    watch(transcript, (currentTranscript) => {
      if (
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
      transcript,
      nextWord,
      confidence,
      goToGameList,
      playInstruction,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background: url("~@/assets/backgrounds/oral-spelling.png") no-repeat;
  background-size: cover;
  background-position: center;
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
</style>