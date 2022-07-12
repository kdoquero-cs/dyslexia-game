<template>
  <section class="main-container">
    <aside class="sidebar">
      <article class="content">
        <p>
          There is a door that can take me home but it needs 7 jewels to open.
          To get these jewels, we need to solve a few puzzles.
        </p>
        <h2>Do you want to play with me?</h2>
      </article>
      <img class="companion" :src="companion.path" />
    </aside>
    <ul class="game-list" v-if="gameList && gameList.length">
      <li
        v-for="(game, index) in games"
        :class="{ 'game-item': true, 'game-item--completed': gameList[index].completed }"
        :key="index"
        :style="game.style"
        @click="goToGame(game)"
      >
        <span class="play-btn">
        </span>

        <div class="game-item__success-wrapper">
          <div class="game-item__success">Well done!</div>
        </div>
        <img src="@/assets/jewel.png" class="game-item__success-jewel" />
      </li>

      <router-link
        to="/portal"
        class="link"
        style="grid-row: row-3 / span 1; grid-column: col-5 / span 2"
      >
        <li
          :class="{ 'game-item': true, 'game-item--locked': !allCompleted }"
          :style="`background-image: url(${require('@/assets/backgrounds/end-portal.jpg')})`"
        >
          <span class="play-btn" v-if="allCompleted">
          </span>

          <span class="lock-btn" v-if="!allCompleted">
          </span>
        </li>
      </router-link>
    </ul>
    <audio src="@/assets/music/Page1a4.mp4" autoplay="true"></audio>
  </section>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
} from "@vue/composition-api";
import { useCompanion } from "../composables/useCompanion";
import { useGameState } from "../composables/useGameState";
import { usePlayAudio } from "../composables/usePlayAudio";
import Audio1 from "@/assets/voices/3_.mp3";
import Audio2 from "@/assets/voices/4_.mp3";

import router from "@/router";
import { AnimatedBackground } from "../composables/animated-background";
function setup(props) {
  const modal2 = ref(null);
  const modal7 = ref(null);
  const companion = ref(useCompanion.getInstance().companion);
  const gameState = useGameState.getInstance();
  const animatedBackground = AnimatedBackground.getInstance();
  const games = ref([
    {
      id: 1,
      name: "Words recognition",
      style: `grid-row: row-1 / span 1; grid-column: col-1 / span 2; background-image: url(${require("@/assets/backgrounds/word-recognition.jpg")});`,
      path: "word-recognition",
    },
    {
      id: 2,
      name: "Visual attention",
      style: `grid-row: row-1 / span 1; grid-column: col-3 / span 2; background-image: url(${require("@/assets/backgrounds/syllable-classification.jpg")});`,
      path: "",
    },
    {
      id: 3,
      name: "Syllable recognition",
      style: `grid-row: row-1 / span 1; grid-column: col-5 / span 2; background-image: url(${require("@/assets/backgrounds/visual-attention.jpg")});`,
      path: "/syllable-classification",
    },
    {
      id: 4,
      name: "Auditory comprehension",
      style: `grid-row: row-2 / span 1; grid-column: col-2 / span 2; background-image: url(${require("@/assets/backgrounds/auditory-comprehension.jpg")});`,
      path: "/auditive-comprehension",
    },
    {
      id: 5,
      name: "Oral spelling",
      style: `grid-row: row-2 / span 1; grid-column: col-4 / span 2; background-image: url(${require("@/assets/backgrounds/oral-spelling.png")});`,
      path: "/oral-spelling",
    },
    {
      id: 6,
      name: "Memory span",
      style: `grid-row: row-3 / span 1; grid-column: col-1 / span 2; background-image: url(${require("@/assets/backgrounds/memory-span.jpg")});`,
      path: "/memory-span",
    },
    {
      id: 7,
      name: "Writing",
      style: `grid-row: row-3 / span 1; grid-column: col-3 / span 2; background-image: url(${require("@/assets/backgrounds/test-7.jpg")});`,
      path: "",
    },
  ]);
  const gameList = ref([]);
  const allCompleted = gameState.allCompleted();
  const { play } = usePlayAudio();
  const triggerNextVoice = ref(false);
  animatedBackground.destroy();
  onMounted(() => {
    if (!gameState.mainMenuState) {
      play([Audio1,Audio2]);
      gameState.setVisitedMainMenu(true);
    }

    gameList.value = gameState.games;
  });

  function goToGame(game) {
    switch(game.id) {
      case 2:
        modal2.value.open();
        break;
      case 7:
        modal7.value.open();
        break;
      default:
        router.push({ path: game.path });
        break;
    }
  }

  return {
    games,
    companion,
    goToGame,
    openVisualAttention: () => {
      window.open("https://zfhhju.axshare.com/#id=vv7tfc&p=page_1&pwd=hackathon&c=1", '_blank');
      gameState.updateGame(2);
      modal2.value.close();
    },
    openWriting: () => {
      window.open("https://zfhhju.axshare.com/#id=2nr89r&p=writing1&pwd=hackathon&c=1", '_blank');
      gameState.updateGame(7);
      modal7.value.close();
    },
    triggerNextVoice,
    modal2,
    modal7,
    allCompleted,
    gameList,
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
  background-image: url("~@/assets/backgrounds/game-selection.jpg");
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
  padding: var(--nazka-rect-padding);
  background-color: var(--nazka-rect-color);
  border-radius: var(--nazka-rect-radius);
}

.companion {
  position: absolute;
  bottom: 10em;
  left: -2em;
  width: 75%;
  user-select: none;
  pointer-events: none;
}

.game-list {
  display: grid;
  grid-template-columns: [col-1] 12.5% [col-2] 12.5% [col-3] 12.5% [col-4] 12.5% [col-5] 12.5% [col-6] 12.5%;
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
  border-radius: var(--nazka-rect-radius);
  border: 3px solid var(--nazka-rect-color);
  cursor: pointer;
  transition: transform 0.2s ease-in-out, border-color 0.1s, ease-in-out;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  will-change: transform, border-color;
}

.play-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background-color: var(--nazka-rect-color);
  border-radius: 50%;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out,
    background-color 0.1s ease-in-out;
}

.link {
  color: var(--colors-text-gray-base);
  text-decoration: none;
}

.game-item--locked {
  box-shadow: inset 666px 666px rgba(0, 0, 0, 0.33);
  pointer-events: none;
  cursor: default;
}

.game-item--completed {
  box-shadow: inset 666px 666px rgba(255, 255, 255, 0.33);
  pointer-events: none;
  cursor: default;
}

.game-item__success-wrapper {
  display: none;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: var(--nazka-rect-radius);
  overflow: hidden;
}

.game-item__success {
  position: absolute;
  bottom: -45px;
  right: -45px;
  border-radius: var(--nazka-rect-radius);
  background-color: #A8FF63;
  width: 100px;
  height: 100px;
  z-index: 1;
  transform: rotate(-45deg);
  font-size: .66em;
  padding: 6px 0;
  font-weight: bold;
  box-shadow: var(--shadows-sh-30), inset 0px 6px 12px rgba(0, 0, 0, .33);
}

.game-item__success-jewel {
  display: none;
  position: absolute;
  bottom: -26px;
  right: -26px;
  margin: auto;
  width: 52px;
  height: 52px;
  z-index: 2;
}

.game-item--completed .game-item__success-wrapper,
.game-item--completed .game-item__success-jewel {
  display: block;
}

.game-item--completed .play-btn {
  display: none;
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
