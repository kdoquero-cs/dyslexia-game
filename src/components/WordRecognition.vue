<template>
  <div class="game1">
    <button
      class="pill next-button"
      :disabled="words.origin.length != 0"
      @click="goToGameList"
    >
      J'ai fini !
    </button>
    <div class="instruction">
      <div class="panel">
        <div class="instructionsPanel">
          <h1 class="h2"> Reconnaissance des mots</h1>
          <h2 class="h2"> Waouh, regarde!</h2>
          <p> Il y a des puits !</p>
          <p>Consignes :</p>
          <button type="button" @click="playInstruction()">
            <div class="button_text">
              <img
                src="@/assets/icons/Sound_icon.svg"
                alt=""
                width="50"
                height="50"
              />
              <span class="listen"
                ><span class="sr-only">Écoutes les</span>Consignes</span
              >
            </div>
          </button>
          <p>Exemples :</p>
          <button type="button" @click="playInstruction1()">
            <div class="button_text">
              <img src="@/assets/icons/Sound_icon.svg" alt="" width="50" height="50"/>
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
          <img class="well-image" src="@/assets/icons/well.svg" alt="well" />
          <!-- <div class="draggable" v-for="t of words.target1" :key="t">
            {{ t }}
          </div> -->
          <button class="pill well-labels">Mots Réguliers</button>
        </div>
      </div>
      <div id="target2" class="basket_column">
        <div @dragover.prevent @drop="drop2">
          <img class="well-image" src="@/assets/icons/well.svg" alt="well" />
          <!-- <div class="draggable" v-for="t of words.target2" :key="t">
            {{ t }}
          </div> -->
          <button class="pill well-labels">Mots Irréguliers</button>
        </div>
      </div>
      <div id="target3" class="basket_column">
        <div @dragover.prevent @drop="drop3">
          <img class="well-image" src="@/assets/icons/well.svg" alt="well" />
          <!-- <div class="draggable" v-for="t of words.target3" :key="t">
            {{ t }}
          </div> -->
          <button class="pill well-labels">Mots qui n'existent pas</button>
        </div>
      </div>
    </div>
    <!-- <div>{{ this.result }} / 9</div> -->
  </div>
</template>

<script>
import { computed, defineComponent, ref, watch } from "@vue/composition-api";
import router from "@/router";
import well from "@/assets/voices/Well.mp3";
import wellExamples from "@/assets/voices/Well_examples.mp3";
import store from "../store";
import { useCompanion } from "../composables/useCompanion";
import { usePlayAudio } from "../composables/usePlayAudio";
import { useGameState } from "../composables/useGameState";

const setup = (props) => {
  const result = ref(null);
  const companion = ref(useCompanion.getInstance().companion);
  const setNumber = ref(0);
  const sets = ref([
    ["prairie", "monsieur", "mouton", "lirette", "vitre", "badou"],
    [ "tarteau", "papier", "oignon", "poële", "août", "frague"],
    [], // FIXMEprairie	monsieur	badou
      // "laugh",
      // "lare",
      // "way",
      // "cough",
      // "miro",
      // "day",
      // "doubt",
      // "himmer",
  ]);
  const game1Solution = ref([
    {
      name: "Mots Réguliers",
      answer: [
        ["prairie", "mouton"],
        ["papier", "vitre"],
      ],
    },
    {
      name: "Mots Irréguliers",
      answer: [
        ["monsieur", "août"],
        ["oignon", "poële"],
      ],
    },
    {
      name: "Mots qui n'existent pas",
      answer: [
        ["badou", "tarteau"],
        ["lirette", "frague"]
      ],
    },
  ]);

  const words = ref({
    origin: [...sets.value[setNumber.value]],
    target1: [],
    target2: [],
    target3: [],
    game1Solution,
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
        words.value.game1Solution[0].answer[setNumber.value],
        words.value.target1
      );
      const count2 = checkResult(
        words.value.game1Solution[1].answer[setNumber.value],
        words.value.target2
      );
      const count3 = checkResult(
        words.value.game1Solution[2].answer[setNumber.value],
        words.value.target3
      );
      const total = count1 + count2 + count3;
      console.log("result", count1, count2, count3);
      store.setGameResult("WORD_RECOGNITION", [
        { GeneralWords: count1 },
        { IrregularWords: count2 },
        { WordsWithNoMeaning: count3 },
      ]);

      return total > 0 ? total + 1 : total;
    }
  };

  const drag = (ev, text) => {
    ev.dataTransfer.setData("text", text);
  };
  const checkSet = () => {
    console.log(words.value, "words");
    if (words.value.origin.length === 0) {
      setNumber.value = ++setNumber.value;
      words.value.origin = sets.value[setNumber.value];
    }
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
  const drop3 = (ev) => {
    const text = ev.dataTransfer.getData("text");
    spliceArray(text);
    words.value.target3.push(text);
    checkSet();
  };
  const { play } = usePlayAudio();
  const playInstruction = () => {
    play(well);
  };
  const playInstruction1 = () => {
    play(wellExamples);
  };

  // const isEndSet = computed(() => words.value.origin.length === 0);
  // const isEndGame = computed(
  //   () => isEndSet.value && sets.value.length === setNumber.value
  // );
  
  const gameState = useGameState.getInstance();
  const goToGameList = () => {
    gameState.updateGame(1);
    router.push({ path: "/gamelist" });
  };

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
    game1Solution,
    playInstruction,
    playInstruction1,
    companion,
    // isEndGame,
  };
};
export default defineComponent({
  name: "WordRecognition",
  props: {},
  setup,
});
</script>

<style scoped>
.game1 {
  background: url("https://img.freepik.com/vrije-vector/nachtbos-met-kampvuurrivier-en-bergen_107791-6993.jpg?w=1200") no-repeat center
    center fixed;
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
  top: 100px;
  width: 400px;
  height: 480px;
  background: #f9eded;
  border-radius: 8px;
  padding: 0px 0px 0px 25px;
}

.instructionsPanel {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
}

/*.game1 > img {*/
/*  position: absolute;*/
/*  left: -300px;*/
/*  bottom: -380px;*/
/*  z-index: 1;*/
/*  width: 620px;*/
/*}*/

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

.panel {
  display: flex;
  justify-content: center;
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
  border-radius: 4px;
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
  width: 300px;
}

.basket_container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  bottom: 170px;
  /* left: 30%; */
  /* flex-wrap: wrap; */
  /* width: 50%; */
  top: 32%;
  left: 35%;
  /* flex-wrap: wrap; */
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
.well-labels {
  padding: 10px 10px 10px 10px;
  font-size: 24px;
  margin-top: -15px;
  font-style: normal;
  border-radius: 24px;
  font-weight: 800;
  pointer-events: none;
}
.next-button {
  position: absolute;
  bottom: 80px;
  right: 26px;
  cursor: pointer;
  padding: 24px 34px;
  background-color: #fafafa;
  border-radius: 30px;
  font-weight: 900;
  font-size: 24px;
  margin-bottom: -1.5em;
}
.next-button:disabled {
  background: #bdbcbc;
  color: #000000;
  cursor: auto;
}
.next-button:enabled:hover {
  background: #dce8fa;
}
.well-image {
  margin-top: 3em;
  width: 15vw;
  height: 35vh;
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

.companion {
  position: absolute;
  bottom: -8em;
  left: 0;
  width: 200px;
  user-select: none;
  pointer-events: none;
}
</style>
