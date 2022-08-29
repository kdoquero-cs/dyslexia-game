<template>
  <div class="game2">
    <button class="pill next-button" :disabled="words.origin.length != 0" @click="goToGameList" >J'ai fini !</button>

    <div class="instruction">
      <div class="panel">
        <div class="instructionsPanel">
          <h1 class="h2">Classification des syllabes</h1>
          <h2 class="h2">Waouh, quel désordre !</h2>
          <p>Il y a des paniers !</p>
          <button type="button" @click="playInstruction()">
            <div class="button_text">
              <img src="@/assets/icons/Sound_icon.svg" alt="" width="50" height="50" />
              <span class="listen"
                ><span class="sr-only">Écoutez les</span>Consignes</span
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
          <button class="pill well-labels">Mots</button>
        </div>
      </div>
      <div id="target3" class="basket_column">
        <div @dragover.prevent @drop="drop2">
          <img src="@/assets/icons/basket.svg" alt="basket" />
          <!-- <div class="draggable" v-for="t of words.target3" :key="t">
            {{ t }}
          </div> -->
          <button class="pill well-labels">Syllabes</button>
        </div>
      </div>
    </div>
    <!-- <div>{{ this.result }} / 9</div> -->
  </div>
</template>
<script>
import { computed, defineComponent, ref } from "@vue/composition-api";
import router from "@/router";
import well from "./../../static/voices/WhatAMess.mp3";
import { useCompanion } from "../composables/useCompanion";
import { usePlayAudio } from "../composables/usePlayAudio";
import { useGameState } from "../composables/useGameState";
import store from "../store";

const setup = (props) => {
  const result = ref(null);
  const companion = ref(useCompanion.getInstance().companion);
  const { play } = usePlayAudio();
  const setNumber = ref(0);
  const sets = ref([
    ["tôt", "fra", "gue", "faim", "fleur", "tis"],
    ["gue", "rat", "com", "teur", "oignon", "spé"],
    [],
      // "laugh",
      // "lare",
      // "way",
      // "cough",
      // "miro",
      // "day",
      // "doubt",
      // "himmer",
  ]);
  const game2Solution = ref([
    {
      name: "words",
      answer: [
      [ "tôt", "temps", "fleur" ], 
      [ "air", "faim", "rat" ] ,
      ]
        //   "theme",
        //   "few",
        //   "mad",
        //   "cab",
        //   "cup",
        //   "leave",
        //   "bat"
    },
    {
      name: "Syllables",
      answer: [
      [ "tis", "fra", "gue" ],
      [ "com", "teur", "spé" ],
      ]
        //   "pret",
        //   "fect",
        //   "glit",
        //   "ther",
        //   "ses",
        //   "sil",
        //   "gui"
    }
  ]);

  const words = ref({
    origin: [...sets.value[setNumber.value]],
    target1: [],
    target2: [],
    game2Solution,
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
  const spliceArray = (text) => {
    const index = words.value.origin.findIndex((o) => o === text);
    words.value.origin.splice(index, 1);
    if (words.value.origin.length === 0) {
      const count1 = checkResult(
        words.value.game2Solution[0].answer[setNumber.value],
        words.value.target1
      );
      const count2 = checkResult(
        words.value.game2Solution[1].answer[setNumber.value],
        words.value.target2
      );
      // const count3 = checkResult(
      //   words.value.game2Solution[2].answer,
      //   words.value.target3
      // );
      const total = count1 + count2;
      store.setGameResult("SYLLABLE_CLASSIFICATION", [
        { words: count1 },
        { syllables: count2 },
      ]);
      return total > 0 ? total + 1 : total;
    }
  };

  const checkSet = () => {
    if (words.value.origin.length === 0) {
      setNumber.value = ++setNumber.value;
      words.value.origin = sets.value[setNumber.value];
    }
  };
  const drag = (ev, text) => {
    ev.dataTransfer.setData("text", text);
  };
  const drop = (ev) => {
    const text = ev.dataTransfer.getData("text");
    spliceArray(text);
    words.value.target1.push(text);
    checkSet();
  };
  const drop2 = (ev) => {
    const text = ev.dataTransfer.getData("text");
    spliceArray(text);
    words.value.target2.push(text);
    checkSet();
  };
  // const drop3 = ev => {
  //   const text = ev.dataTransfer.getData("text");
  //   spliceArray(text);
  //   words.value.target3.push(text);
  // };
  const playInstruction = () => {
    play(well);
  };

  const gameState = useGameState.getInstance();
  const goToGameList = () => {
    gameState.updateGame(2);
    router.push({ path: "/gamelist" });
  };

  return {
    words,
    checkResult,
    spliceArray,
    drag,
    drop,
    drop2,
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
  setup,
});
</script>
<style scoped>
.game2 {
  background: url("~@/assets/backgrounds/OK_MontagneForet.png")
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
.draggable:hover {
  background: #dce8fa;
}
.draggable:active {
  background: #b7d0f5;
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
  margin: 0 50px 80px 50px;
}
#target3 {
  margin: 0 40px 80px 50px;
}


.basket_container img {
  width: 250px;
}

.basket_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  bottom: 170px;
  left: 30%;
}

.well-labels {
  padding: 10px 10px 10px 10px;
  font-size: 24px;
  margin-top: -15px;
  font-style: normal;
  border-radius: 24px;
  font-weight: 800;
  pointer-events: none;
}
.basket_column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  padding:24px 34px; 
  background-color: #fafafa; 
  border-radius: 30px;
  font-weight: 900;
  font-size: 24px;
}
.next-button:disabled{
  background: #BDBCBC;
  color: #000000;
  cursor: auto;
  
}

.next-button:enabled:hover{
    background: #DCE8FA;
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
