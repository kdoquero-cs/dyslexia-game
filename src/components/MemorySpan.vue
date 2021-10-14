<template>
  <section class="container">
    <div>
      <div>
        <div class="spelling-box">
          <h1>Spelling</h1>
          <p>Here, I'll say a few words.</p>
          <p>Can you help me spell them?</p>

          <div class="spelling">
            <img
              @click="playInstruction"
              src="/static/icons/Hear instructions.png"
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
      </div>
    </div>
    <div class="inputs-container">
      <div class="inputs">
        <div @click="play" class="listen">
          <h2>Listen</h2>
          <img src="/static/icons/Sound icon.svg" alt="Sound" srcset="" />
        </div>
        <div @click="record" class="speak">
          <h2>Speak</h2>
          <img
            src="/static/icons/noun_micro_3396391 1.png"
            alt="micro"
            srcset=""
          />
        </div>
      </div>
      <button class="next" @click="nextWord">NEXT</button>
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
import SpellingExercise from "../../static/voices/SpellingExercise.mp3";
export default defineComponent({
  props: {},
  setup() {
    const startRecon = ref(false);
    const goToGameList = () => router.push({ path: "/gamelist" });
    const companionHook = useCompanion.getInstance();
    let companionFromHook =
      companionHook.companion.value || companionHook.companionList[0];
    const companion = ref(companionFromHook);
    const values = ref([
      "1",
      "1 2",
      "1 2 3",
      "1 2 3 4",
      "1 2 3 4",
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
      play();
    };
    const playInstruction = () => {
      const audio = new Audio(SpellingExercise);
      audio.play();
    };

    watch(isRecording, (currentRecording) => {
      console.log(currentRecording);
      startRecon.value = currentRecording;
    });
    watch(transcript, (currentTranscript) => {
      if (currentTranscript.toLowerCase() && currentTranscript.includes(currentWord.value.toLowerCase())) {
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
      playInstruction
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background: url("/static/backgrounds/memory-span.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  width: 100%;
  height: 100%;
}
.container > div {
  width: 50%;
}
.avatar {
  width: 250px;
  position: absolute;
  left: -47px;
  top: 81%;
}
.spelling-box {
  height: 500px;
  width: 350px;
  margin: 30px;
  border-radius: 15px;
  background-color: #f9edee;
  position: relative;
  padding: 40px;
}
.spelling {
  margin-top: 60px;
}
.inputs-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
</style>
