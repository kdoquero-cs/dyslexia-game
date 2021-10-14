<template>
  <section class="main-container">
    <aside class="sidebar">
      <article class="content">
        <p>
          There is a door that can take me home but it needs 7 jewels to open.
          To get these jewels, we need to solve a few puzzles.
        </p>
        <h4>Do you want to play with me?</h4>
      </article>
      <img class="companion" :src="companion.path" />
    </aside>
    <ul class="game-list">
      <li class="game-item" v-for="(game, index) in games" :key="index" :style="game.style" @click="goToGame(game)">
        <span class="play-btn">
          <csm-icon name="play" size-xl class="play-btn-icon" />
        </span>
      </li>

      <router-link to="/portal" class="link" style="grid-row: row-3 / span 1; grid-column: col-5 / span 2;">
        <li class="game-item game-item--locked" :style="`background-image: url(${require('@/assets/backgrounds/end-portal.jpg')})`">
          <span class="lock-btn">
            <csm-icon name="lock" size-xl class="lock-btn-icon"></csm-icon>
          </span>
        </li>
      </router-link>
    </ul>

    <audio src="@/assets/music/Page1a4.mp4" autoplay="true"></audio>
  </section>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import { useCompanion } from "../composables/useCompanion";
import router from "@/router";

function setup(props) {
  const companion = ref(useCompanion.getInstance().companion);
  const games = ref([
    { id: 1, name: "Words recognition", style: `grid-row: row-1 / span 1; grid-column: col-1 / span 2; background-image: url(${require('@/assets/backgrounds/word-recognition.jpg')});`, path:"word-recognition" },
    { id: 2, name: "Syllable recognition", style: `grid-row: row-1 / span 1; grid-column: col-3 / span 2; background-image: url(${require('@/assets/backgrounds/syllable-classification.jpg')});`, path:"" },
    { id: 3, name: "Visual attention", style: `grid-row: row-1 / span 1; grid-column: col-5 / span 2; background-image: url(${require('@/assets/backgrounds/visual-attention.jpg')});`, path:"" },
    { id: 4, name: "Auditory comprehension", style: `grid-row: row-2 / span 1; grid-column: col-2 / span 2; background-image: url(${require('@/assets/backgrounds/auditory-comprehension.jpg')});`, path:"" },
    { id: 5, name: "Oral spelling", style: `grid-row: row-2 / span 1; grid-column: col-4 / span 2; background-image: url(${require('@/assets/backgrounds/oral-spelling.png')});`, path:"/oralSpelling" },
    { id: 6, name: "Memory span", style: `grid-row: row-3 / span 1; grid-column: col-1 / span 2; background-image: url(${require('@/assets/backgrounds/memory-span.jpg')});`, path:"" },
    { id: 7, name: "game7", style: `grid-row: row-3 / span 1; grid-column: col-3 / span 2; background-image: url(${require('@/assets/backgrounds/test-7.jpg')});`, path:"" },
  ]);
  const goToGame = (game) => {
    router.push({ path: game.path });
  }

  return {
    games,
    companion,
    goToGame
  };
}

export default defineComponent({
  props: {},
  setup
});
</script>

<style scoped>
.main-container {
  display: flex;
  padding: 4em 2em 4em 6em;
  background-image: url('~@/assets/backgrounds/game-selection.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: inset 6666px 6666px rgba(255, 255, 255, 0.2);
}

.sidebar {
  position: relative;
  width: 25%;
  text-align: left;
}

.content {
  width: 100%;
  height: 50%;
  padding: var(--nazca-rect-padding);
  background-color: var(--nazca-rect-color);
  border-radius: var(--nazca-rect-radius);
}

.companion {
  position: absolute;
  bottom: 10em;
  left: -2em;
  width: 75%;
  user-select: none;
}

.game-list {
  display: grid;
  grid-template-columns: [col-1] 12.5%  [col-2] 12.5%  [col-3] 12.5%  [col-4] 12.5%  [col-5] 12.5%  [col-6] 12.5%;
  grid-template-rows: [row-1] 1fr [row-2] 1fr [row-3] 1fr;
  gap: 2em;
  width: 75%;
  margin: 0;
  padding-left: 3em;
  list-style: none;
}

.game-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
  border-radius: var(--nazca-rect-radius);
  border: 3px solid var(--nazca-rect-color);
  cursor: pointer;
  transition: transform .2s ease-in-out, border-color .1s, ease-in-out;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.play-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background-color: var(--nazca-rect-color);
  border-radius: 50%;
  transition: box-shadow .2s ease-in-out, transform .2s ease-in-out, background-color .1s ease-in-out;
}

.game-item--locked {
  box-shadow: inset 666px 666px rgba(0, 0, 0, 0.33);
  pointer-events: none;
}

.game-item:hover {
  transform: scale(1.1);
}

.game-item:active {
  border-color: var(--colors-gray-base);
}

.game-item:hover .play-btn {
  transform: scale(1.1);
  box-shadow: var(--shadows-sh-30);
}

.game-item:active .play-btn {
  box-shadow: var(--shadows-sh-30);
  background-color: var(--colors-gray-base);
}

.lock-btn-icon {
  color: var(--colors-text-white-base);
  transform: scale(1.5, 1.33);
}
</style>
