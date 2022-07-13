<template>
  <div class="game2">
    <button class="pill next-button" :disabled="words.origin.length != 0" v-if="words.origin.length === 0" @click="goToGameList" >I'm done!</button>

    <div class="instruction">
      <div class="panel">
        <div class="instructionsPanel">
          <h1 class="h2">Syllable classification</h1>
          <h2 class="h2">Waouh, what a mess!</h2>
          <p>There are baskets!</p>
          <button type="button" @click="playInstruction()">
              <div class="button_text">
                <img src="@/assets/icons/Sound icon.png" alt="" />
                <span class="listen"
                  ><span class="sr-only">Listen to the</span>Instructions</span
                >
              </div>
            </button>

          <img
              class="companion"
              v-if="companion"
              :src="companion.path"
              :alt="companion.name"
          />
        </div>
        <div class="game"></div>
      </div>
    </div>
    <div class="draggable-container">
      <div
        class="draggable"
        :draggable="true"
        @dragstart="drag($event, o)"
        v-for="o of words.origin"
        :key="o"
        @click.stop
      >
        {{ o }}
      </div>
    </div>

    <div class="basket_container">
      <div id="target" class="basket_column">
        <div @dragover.prevent @drop="drop">
          <img src="@/assets/icons/basket.svg" alt="basket" />
          <!-- <div class="draggable" v-for="t of words.target1" :key="t">
            {{ t }}
          </div> -->
          <button class="pill">Words</button>
        </div>
      </div>
      <div id="target3" class="basket_column">
        <div @dragover.prevent @drop="drop2">
          <img src="@/assets/icons/basket.svg" alt="basket" />
          <!-- <div class="draggable" v-for="t of words.target3" :key="t">
            {{ t }}
          </div> -->
          <button class="pill">Syllables</button>
        </div>
      </div>
    </div>
    <!-- <div>{{ this.result }} / 9</div> -->
  </div>
</template>
<script>
import { defineComponent, ref } from "@vue/composition-api";
import router from "@/router";
import well from "./../../static/voices/WhatAMess.mp3";
import { useCompanion } from "../composables/useCompanion";
import { usePlayAudio } from "../composables/usePlayAudio";
import { useGameState } from "../composables/useGameState";
import store from "../store";

const setup = props => {
  const result = ref(null);
  const companion = ref(useCompanion.getInstance().companion);
  const { play } = usePlayAudio();
  const game2Solution = ref([
    {
      name: "Game2",
      answer: [
        "lace",
        "mice",
        "lore"
        //   "theme",
        //   "few",
        //   "mad",
        //   "cab",
        //   "cup",
        //   "leave",
        //   "bat"
      ]
    },
    {
      name: "Syllables",
      answer: [
        "glas",
        "dai",
        "mon"
        //   "pret",
        //   "fect",
        //   "glit",
        //   "ther",
        //   "ses",
        //   "sil",
        //   "gui"
      ]
    }
  ]);

  const words = ref({
    origin: [
      "lace",
      "mice",
      "lore",
      // "theme",
      // "few",
      // "mad",
      // "cab",
      // "cup",
      // "leave",
      // "bat",
      "glas",
      "dai",
      "mon"
      // "pret",
      // "fect",
      // "glit",
      // "ther",
      // "ses",
      // "sil",
      // "gui"
    ],
    target1: [],
    target2: [],
    game2Solution
  });

  const checkResult = (first, second) => {
    const count = first.reduce((acc, val) => {
      if (second.includes(val)) {
        return ++acc;
      }
      return acc;
    }, 0);

    return count;
  };
  const spliceArray = text => {
    const index = words.value.origin.findIndex(o => o === text);
    words.value.origin.splice(index, 1);
    if (words.value.origin.length === 0) {
      const count1 = checkResult(
        words.value.game2Solution[0].answer,
        words.value.target1
      );
      const count2 = checkResult(
        words.value.game2Solution[1].answer,
        words.value.target2
      );
      // const count3 = checkResult(
      //   words.value.game2Solution[2].answer,
      //   words.value.target3
      // );
      const total = count1 + count2;
      store.setGameResult("SYLLABLE_CLASSIFICATION", [
        { Words: count1 },
        { Syllables: count2 },

      ]);
      return total;
    }
  };

  const drag = (ev, text) => {
    ev.dataTransfer.setData("text", text);
  };
  const drop = ev => {
    const text = ev.dataTransfer.getData("text");
    spliceArray(text);
    words.value.target1.push(text);
  };
  const drop2 = ev => {
    const text = ev.dataTransfer.getData("text");
    spliceArray(text);
    words.value.target2.push(text);
  };
  const drop3 = ev => {
    const text = ev.dataTransfer.getData("text");
    spliceArray(text);
    words.value.target3.push(text);
  };
  const playInstruction = () => {
    play(well);
  };

  const gameState = useGameState.getInstance();
  const goToGameList = () => {
    gameState.updateGame(2);
    router.push({ path: "/gamelist" });
  }

  return {
    words,
    checkResult,
    spliceArray,
    drag,
    drop,
    drop2,
    drop3,
    result,
    goToGameList,
    game2Solution,
    playInstruction,
    companion,
  };
};

export default defineComponent({
  name: "SyllableClassification",
  props: {},
  setup
});
</script>
<style scoped>
.game2 {
  background: url("~@/assets/backgrounds/visual-attention.jpg")
    no-repeat center center fixed;
  background-color: antiquewhite;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  width: 100%;
}

.instruction {
  left: 40px;
  position: absolute;
  top: 200px;
  width: 361px;
  height: 382px;
  background: #f9eded;
  border-radius: 8px;
}

.instructionsPanel {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
}

/*.game2 > img {*/
/*  position: absolute;*/
/*  left: -275px;*/
/*  bottom: -380px;*/
/*  z-index: 1;*/
/*  width: 580px;*/
/*}*/

/* .instruction button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
} */

.panel {
  display: flex;
  justify-content: center;
  padding: 0 40px;
}

.draggable-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 50%;
  top: 15%;
  left: 35%;
  flex-wrap: wrap;
  height: 160px;
}
.draggable {
  margin-right: 30px;
  width: 161px;
  height: 51px;
  border-radius: 8px;
  background: #f9eded;
  display: flex;
  align-items: center;
  justify-content: center;
}
#target,
#target2,
#target3 {
  width: 100%;
  height: 100px;
  padding: 5px;
  width: 240px;
  height: 240px;
}

#target {
  margin-right: 40px;
}
#target2 {
  margin: 0 40px 50px 0;
}
#target3 {
  margin: 0 40px 80px 0;
}

.basket_container img {
  width: 250px;
}

.basket_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  bottom: 90px;
  left: 30%;
  width: 850px;
}

.basket_column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back-button {
  position: absolute;
  top: 80px;
  left: 26px;
  cursor: pointer;
}

.next-button {
  position: absolute;
  bottom: 80px;
  right: 26px;
  cursor: pointer;
}

.draggable span {
  margin: 20px;
}

.button_text {
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.instructionsPanel button {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 50px;
}

.companion {
  position: absolute;
  bottom: -8em;
  left: 0;
  width: 200px;
  user-select: none;
  pointer-events: none;
}
</style>
