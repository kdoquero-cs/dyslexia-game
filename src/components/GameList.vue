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
      <li class="game-item" style="grid-row: row-1 / span 1; grid-column: col-1 / span 2">
        <span class="play-btn">
          <csm-icon name="play" size-xl class="play-btn-icon"></csm-icon>
        </span>
      </li>
      <li class="game-item" style="grid-row: row-1 / span 1; grid-column: col-3 / span 2">
        <span class="play-btn">
          <csm-icon name="play" size-xl class="play-btn-icon"></csm-icon>
        </span>
      </li>
      <li class="game-item" style="grid-row: row-1 / span 1; grid-column: col-5 / span 2">
        <span class="play-btn">
          <csm-icon name="play" size-xl class="play-btn-icon"></csm-icon>
        </span>
      </li>
      <li class="game-item" style="grid-row: row-2 / span 1; grid-column: col-2 / span 2">
        <span class="play-btn">
          <csm-icon name="play" size-xl class="play-btn-icon"></csm-icon>
        </span>
      </li>
      <li class="game-item" style="grid-row: row-2 / span 1; grid-column: col-4 / span 2">
        <span class="play-btn">
          <csm-icon name="play" size-xl class="play-btn-icon"></csm-icon>
        </span>
      </li>
      <li class="game-item" style="grid-row: row-3 / span 1; grid-column: col-1 / span 2">
        <span class="play-btn">
          <csm-icon name="play" size-xl class="play-btn-icon"></csm-icon>
        </span>
      </li>
      <li class="game-item" style="grid-row: row-3 / span 1; grid-column: col-3 / span 2">
        <span class="play-btn">
          <csm-icon name="play" size-xl class="play-btn-icon"></csm-icon>
        </span>
      </li>
      <li class="game-item game-item--locked" style="grid-row: row-3 / span 1; grid-column: col-5 / span 2">
        <span class="lock-btn">
          <csm-icon name="lock" size-xl class="lock-btn-icon"></csm-icon>
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";
import { useCompanion } from "../composables/useCompanion";

function setup(props) {
  const companion = ref(useCompanion.getInstance().companion);
  const games = ref([
    { id: 1, name: "Words recognition" },
    { id: 2, name: "game2" },
    { id: 3, name: "game3" },
    { id: 4, name: "game4" },
    { id: 5, name: "game5" },
    { id: 6, name: "game6" },
    { id: 7, name: "game7" },
    { id: 8, name: "game8" }
  ]);

  return {
    games,
    companion,
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
  background-image: url('/static/backgrounds/game-selection.jpg');
  background-size: cover;
  background-repeat: no-repeat;
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
  border: 3px solid var(--colors-gray-lighter-40);
  cursor: pointer;
  transition: transform .2s ease-in-out;
}

.play-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background-color: var(--nazca-rect-color);
  border-radius: 50%;
  transition: box-shadow .2s ease-in-out;
}

.game-item--locked {
  box-shadow: inset 666px 666px rgba(0, 0, 0, 0.33);
  pointer-events: none;
}

.game-item:hover {
  transform: scale(1.1);
}

.game-item:hover .play-btn {
  box-shadow: var(--shadows-sh-30);
}

.lock-btn-icon {
  color: var(--colors-text-white-base);
  transform: scale(1.33);
}
</style>
