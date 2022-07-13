<template>
  <section class="main-container">
    <aside class="sidebar">
      <article :class="{content: true, hide: stepIndex === 2}">
        <p>{{ activeStep.text }}</p>
        <h4>{{ activeStep.bold }}</h4>
        <button class="action" primary @click="incrementStep()">{{ activeStep.action }}</button>
      </article>
      <img :class="companionClass" :src="companion.path" />
    </aside>

    <div class="jewels-container">
      <div :class="getJewelClass(index)" v-for="(jewel, index) in new Array(4).fill(undefined)" :key="index">
        <img :class="{ jewel: true, hidden: stepIndex < 1, yeet: stepIndex === 2 }" src="@/assets/jewel.png" alt="A jewel that looks like a shiny diamond!"/>
      </div>
    </div>

    <audio src="@/assets/music/Credits.mp4" autoplay="true"></audio>
  </section>
</template>

<script>
import { defineComponent, onMounted, ref, computed } from '@vue/composition-api';
import router from "@/router";
import { useCompanion } from "../composables/useCompanion";

function setup() {
  const companion = ref(useCompanion.getInstance().companion);
  const steps = ref([
    { text: "Tu as les 4 diamants ! Excellent travail !", bold: "Maintenant, allons au portail !", action: "Allons - y" },
    { text: "",  bold: "Nous avons réussi ! C’était une sacrée aventure !", action: "Place les diamants" },
    { text: "", bold: "", action: "" },
  ]);
  const activeStep = ref(steps.value[0]);
  const stepIndex = ref(0);
  const companionClass = computed(() => {
    let clazz = "companion";
    if (stepIndex.value === 1) {
      clazz += " step-1";
    }
    if (stepIndex.value === 2) {
      clazz += " step-2";
    }
    return clazz;
  });
  const jewelClass = computed(getJewelClass);

  function getJewelClass(index) {
    return index % 7 === 0
      ? { 'jewel-full-columns': true }
      : index % 7 < 3
        ? { 'jewel-half-columns': true }
        : { 'jewel-single-column': true };
  }

  return {
    activeStep,
    companion,
    steps,
    stepIndex,
    incrementStep: () => {
      stepIndex.value = stepIndex.value + 1;
      activeStep.value = steps.value[stepIndex.value];

      if (stepIndex.value === 2) {
        setTimeout(() => {
          router.push({ path: "/end-game" });
        }, 5000)
      }
    },
    getJewelClass: (index) => {
      return index % 7 === 0
        ? { 'jewel-full-columns': true }
        : index % 7 < 3
          ? { 'jewel-half-columns': true }
          : { 'jewel-single-column': true };
    },
    companionClass,
  }
}

export default defineComponent({
  props: {},
  setup,
});
</script>

<style scoped>
.main-container {
  display: flex;
  padding: 4em 2em 4em 6em;
  background-image: url('https://img.freepik.com/darmowe-wektory/magiczny-portal-na-gorskim-klifie-z-latajacymi-skalami-dookola_107791-4674.jpg?w=1200');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.sidebar {
  position: relative;
  width: 25%;
  text-align: left;
}

.content {
  width: 100%;
  height: 50%;
  padding: var(--nazka-rect-padding);
  background-color: var(--nazka-rect-color);
  border-radius: var(--nazka-rect-radius);
  transition: opacity .2s ease-in-out;
}

.content.hide {
  opacity: 0;
}

.content.hide > * {
  display: none;
}

.companion {
  position: absolute;
  bottom: 10em;
  left: -2em;
  width: 75%;
  user-select: none;
  transition: transform .33s ease-in-out, opacity 1s ease-in-out;
  pointer-events: none;
}

.companion.step-1 {
  transform: translateX(45vw);
}

.companion.step-2 {
  transform: translate(55vw, -10vh);
  opacity: 0;
  transition-duration: 1.5s, 3s;
  transition-delay: 1s, 2s;
}

.jewels-container {
  position: absolute;
  bottom: 10%;
  left: 33%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 25%);
  gap: 0 .66em;
}

.jewel {
  width: 52px;
  height: 52px;
  transition: opacity .66s ease-in-out, transform .66s ease-in-out;
}

.jewel.hidden {
  opacity: 0;
  transform: scale(1.2);
}

.jewel.yeet {
  position: relative;
  opacity: 0;
  transform: translate(25vw, -20vw) rotate(60deg);
  transition-delay: .2s, 0s;
}

.jewel-full-columns {
  position: relative;
  grid-column: span 4;
}

.jewel-half-columns {
  position: relative;
  grid-column: span 2 ;
}

.jewel-single-column {
  position: relative;
  grid-column: span 4;
}
</style>
