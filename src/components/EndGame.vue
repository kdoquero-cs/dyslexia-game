<template>
  <section class="main-container">
    <aside class="sidebar">
      <article class="content">
<<<<<<< HEAD
        <h1 class="title">Merci beaucoup de m'avoir aidé à rentrer chez moi auprès de ma famille et de mes amis.</h1>
        <p>J'ai vraiment apprécié notre aventure. Prenez soin de vous et soyez sages !</p>
        <p>Note : Il y a quelques informations pour vos parents, faites-leur savoir !</p>

        <button class="action" primary @click="seeReport()">Informations pour les parents</button>
=======
        <h1 class="title">
          Thank you so much for helping me get home to my family and friends.
        </h1>
        <p>I really enjoyed our adventure. Please take care and be good!</p>
        <p>
          Note: There are some information for your parents, let them know about
          it!
        </p>

        <button class="action" primary @click="seeReport()">
          Parents information
        </button>
>>>>>>> 285b109 (Changed the assets and UI)
      </article>
      <img class="companion" :src="companion.path" />
    </aside>

    <section class="not-companions-container">
      <img
        v-for="(companion, index) in notCompanions"
        :src="companion.path"
        :alt="companion.name"
        :key="index"
        :class="`not-companion offset-${index}`"
      />

      <div class="jewels-container">
        <div
          :class="getJewelClass(index)"
          v-for="(jewel, index) in new Array(4).fill(undefined)"
          :key="index"
        >
          <img
            class="jewel"
            src="@/assets/jewel.svg"
            alt="A jewel that looks like a shiny diamond!"
          />
        </div>
      </div>
    </section>

    <audio src="@/assets/music/Credits.mp4" autoplay="true"></audio>
    <audio src="@/assets/voices/WeMadeIt.mp3" autoplay="true"></audio>
  </section>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import router from "@/router";
import { useCompanion } from "../composables/useCompanion";

function setup() {
  const companion = ref(useCompanion.getInstance().companion);
  const notCompanions = ref(
    useCompanion
      .getInstance()
      .companionList.filter((c) => c.name !== companion.value.name)
  );

  function seeReport() {
    router.push({ path: "/parents-information" });
  }
  function getJewelClass(index) {
    return index % 7 === 0
      ? { "jewel-full-columns": true }
      : index % 7 < 3
      ? { "jewel-half-columns": true }
      : { "jewel-single-column": true };
  }

  return {
    companion,
    notCompanions,
    seeReport,
    getJewelClass,
  };
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
<<<<<<< HEAD
  background-image: url('~https://img.freepik.com/free-vector/golf-course-with-green-grass-pond-sunset_107791-6976.jpg?w=1200');
=======
  background-image: url("~@/assets/backgrounds/oral-spelling.png");
>>>>>>> 285b109 (Changed the assets and UI)
  background-size: 150%;
  background-repeat: no-repeat;
  background-position: 50% 100%;
}

.sidebar {
  position: relative;
  width: 25%;
  text-align: left;
}

.content {
  width: 100%;
  min-height: 50%;
  padding: var(--nazka-rect-padding);
  background-color: var(--nazka-rect-color);
  border-radius: var(--nazka-rect-radius);
  transition: opacity 0.2s ease-in-out;
}

.companion {
  position: absolute;
  bottom: 5vh;
  left: -2em;
  width: 75%;
  user-select: none;
  transition: transform 0.33s ease-in-out, opacity 1s ease-in-out;
  pointer-events: none;
}

.not-companions-container {
  position: relative;
  width: 75%;
}

.not-companion {
  position: absolute;
  width: 15vw;
  left: 0;
  bottom: 7.5vh;
}

.not-companion.offset-1 {
  left: 15vw;
  bottom: 20vh;
}

.not-companion.offset-2 {
  left: 33vw;
  bottom: 25vh;
}

.jewels-container {
  position: absolute;
  bottom: -2.5vh;
  right: 25vw;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(4, 25%);
  gap: 0 0.66em;
  width: 200px;
}

.jewel {
  width: 52px;
  height: 52px;
}

.jewel-full-columns {
  position: relative;
  grid-column: span 4;
}
.action {
  justify-content: flex-end;
  flex-wrap: wrap;
  border: 2px solid #000000;
  height: 80%;
  width: 80%;
  left: 0px;
  top: 0px;
  border-radius: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #b7d0f5;
  font-style: normal;
  font-weight: 900;
  font-size: 16px;
}

.jewel-half-columns {
  position: relative;
  grid-column: span 2;
}

.jewel-single-column {
  position: relative;
  grid-column: span 4;
}
</style>
