<template>
  <section>
    <div class="container">
    </div>
    <button :icon='!isRecording ? "play" : "square-filled"' @click="toogleVoice">
      {{ !isRecording ? "Start" : "stop" }}</button
    >
  </section>
</template>

<script>
import { defineComponent, ref, watch } from "@vue/composition-api";
import { useSpeechRecognition } from "../composables/useSpeechRecon";
export default defineComponent({
  props: {
  },
  setup() {
    const start = ref(false);
    const { transcript, isRecording } = useSpeechRecognition(start);
    const toogleVoice = () => {
      if (!isRecording.value) {
          start.value = !start.value;
      }
    };
    watch(isRecording,currentRecording => {
      start.value = currentRecording
    })
    
    return {
      toogleVoice,
      start,
      isRecording,
      transcript
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  width: 100%;
}
.container > div {
  width: 50%;
}
</style>
