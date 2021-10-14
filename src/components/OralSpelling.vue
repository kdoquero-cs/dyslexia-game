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
              @click="play"
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
        </div>
        <div @click="record" class="speak">
          <h2>Speak</h2>
        </div>
      </div>
      <button class="next" @click="nextWord">NEXT WORD</button>
    </div>
  </section>
</template>

<script>
import { computed, defineComponent, ref, watch } from "@vue/composition-api";
import { useSpeechSynthesis } from "../composables/useSpeechSynthesis";
import { useSpeechRecognition } from "../composables/useSpeechRecon";

import { useCompanion } from "../composables/useCompanion";
export default defineComponent({
  props: {},
  setup() {
    const startRecon = ref(false);
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
      console.log("compare","ok");
      
    }
    const record = () => {
      startRecon.value = true;
      compare();

    };
    const nextWord = () => {
      count.value = ++count.value;
      play();
    };
    watch(isRecording, (currentRecording) => {
      console.log(currentRecording);
      startRecon.value = currentRecording;
    });
     watch(transcript, (currentTranscript) => {
       console.log("trans",currentTranscript);
      if (currentTranscript && currentTranscript.includes(currentWord.value)) {
          result.value.push({word:currentWord.value,speech:transcript.value});
          ++score.value;
          console.log("score",score.value);
      }
    });
    return {
      play,
      companion,
      record,
      transcript,
      nextWord,
      confidence,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background: url("/static/backgrounds/visual-attention.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  width: 100%;
  min-height: 700px;
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
  margin-top: 40px;
}
.next {
  width: 200px;
  height: 90px;
  border-radius: 45px;
  border-color: none;
  background-color: #f9edee;
  font-weight: 800;
  font-size: 20px;
  border-style:unset;
}
</style>
