<template>
  <section class="container">
    <div>
      <div>
        <csm-button icon="replays" @csmClick="play">
         play</csm-button
        >
      </div>
      <img src="@/assets/avatars/Animal4.svg" alt="" srcset="" />
    </div>
  </section>
</template>

<script>
import { computed, defineComponent, ref, watch } from "@vue/composition-api";
import { useSpeechSynthesis } from "../composables/useSpeechSynthesis";
export default defineComponent({
  props: {
  },
  setup() {
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
    const count = ref(null);
    const currentWord = computed(()=>values.value[count.value] );
    const {} = useSpeechSynthesis(currentWord);
    const play = () => {
      let utterance = new SpeechSynthesisUtterance(values.value[count.value]);
      speechSynthesis.speak(utterance);
      if (!count.value) {
          count.value = 0;
      }

    };
    return {
      play
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
img {
  width: 400px;
}
</style>
