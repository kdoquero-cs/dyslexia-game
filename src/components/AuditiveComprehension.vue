<template>
  <section class="container">
    <div class="display">
      <div class="display">
        <div class="spelling-box">
          <h1>Compréhension auditive</h1>
          <h2>Etape 1</h2>
          <p>Écoute la consigne :</p>
          <audio controls src="@/assets/voices/auditive-comprehension-instructions.mp3">
            Votre navigateur ne prend pas en charge le
            <code>audio</code> element.
          </audio>
          <h2>Etape 2</h2>
          <p>Écoute mon histoire :</p>
          <button type="button" v-on:click="playInstruction()">
              <div class="button_text">
                <img src="@/assets/icons/Sound icon.png" alt="" />
                <span class="listen"
                  ><span class="sr-only">Listen to the</span>Instructions</span
                >
              </div>
            </button>
          <h2>Etape 3</h2>
          <p>Ensuite, réponde aux cinq questions :</p>
          <img
            class="avatar"
            v-if="companion"
            :src="companion.path"
            :alt="companion.name"
          />
        </div>
        <div class="inputs-container">
          <div class="modal">
            <div class="modal-content">
              <div>
                <h4>Question {{ count + 1 }} /{{ questionsCount }}</h4>
                <p>{{ currentValue.question }}</p>
              </div>
              <div class="answers-container">
                <div
                  class="answer"
                  v-for="(choice, index) in currentValue.choices"
                  :key="index"
                >
                  <input
                  class="answer-checkbox"
                    @click="setChoice(choice)"
                    :checked="currentValue.answer === choice"
                    type="radio"
                    name="anwser"
                    :id="choice + '-' + index"
                    :value="choice + '-' + index"
                  />
                  <label :for="choice + '-' + index">{{ choice }}</label>
                </div>
              </div>
              <button
                class="pill next-question"
                :disabled="currentValue.answer.length === 0"
                v-if="count !== questionsCount - 1"
                @click="next"
              >
<<<<<<< HEAD
                Question suiante
=======
                Next
>>>>>>> 285b109 (Changed the assets and UI)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button class="pill next-button" :disabled="!(count === questionsCount -1 && currentValue.answer.length > 0)" @click="goToGameList">J'ai fini !</button>
  </section>
</template>

<script>
import { computed, defineComponent, ref, watch } from "@vue/composition-api";
import router from "@/router";
import { useCompanion } from "../composables/useCompanion";
import Instructions from "@/assets/voices/YoudLikeToKnowMoreAboutMe.mp3"
import { usePlayAudio } from "../composables/usePlayAudio";
import { useGameState } from "../composables/useGameState";
import store from "../store";

export default defineComponent({
  props: {},
  setup() {
    const count = ref(0);
    const { play } = usePlayAudio();
    const gameState = useGameState.getInstance();
    const values = ref([
      {
        id: 0,
        question: "Quel est l'aliment préféré de Nazka ?",
        answer: "",
        choices: ["Gâteau aux carottes", "Lasagnes", "Fruits"],
        response: "Gâteau aux carottes",
        isCorrect: false,
      },
      {
        id: 1,
        question: "Est-ce que tous les animaux parlent dans le monde de Nazka ?",
        answer: "",
        choices: ["Oui", "Non"],
        response: "Oui",
        isCorrect: false,
      },
      {
        id: 2,
        question:
          "Est-il vrai que plus il y a d'arbres, plus l'air est pur ?",
        answer: "",
        choices: ["Oui", "Non"],
        response: "Oui",
        isCorrect: false,
      },
      {
        id: 3,
        question: "Qui est samantha ?",
        answer: "",
        choices: [" Ma meilleure amie ", " Ma cousinne ", " Mon ennemie"],
        response: " Ma meilleure amie ",
        isCorrect: false,
      },
      {
        id: 4,
        question: "Combien de frères et sœurs a Naska ?",
        answer: "",
        choices: ["2", "3", "4"],
        response: "3",
        isCorrect: false,
      },
    ]);
    const questionsCount = computed(() => values.value.length);
    const currentValue = computed(() => values.value[count.value]);

    const goToGameList = () => {
  
      gameState.updateGame(3);
      const total = (values.value.map(val => val.isCorrect).filter(Boolean).length / values.value.length) *100;
      store.setGameResult("AUDITIVE_COMPREHENSION",total);
      router.push({ path: "/gamelist" });
    };
    const companionHook = useCompanion.getInstance();
    let companionFromHook =
      companionHook.companion.value || companionHook.companionList[0];
    const companion = ref(companionFromHook);

    const playInstruction = () => {
      play(Instructions);
    };
    const setChoice = (choice) => {
      currentValue.value.answer = choice;
      currentValue.value.isCorrect = currentValue.value.answer === currentValue.value.response;
    };
    const next = () => {
      ++count.value;
    };

    return {
      companion,
      goToGameList,
      playInstruction,
      count,
      currentValue,
      next,
      setChoice,
      questionsCount,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background: url("https://img.freepik.com/free-vector/landscape-with-cascade-waterfall-in-forest_107791-7143.jpg?w=1200") no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  width: 100%;
  height: 100%;
}

.avatar {
  width: 250px;
  position: absolute;
  left: -47px;
  top: 81%;
}
.spelling-box {
  height: 600px;
  width: 500px;
  margin: 30px;
  border-radius: 15px;
  background-color: #f9edee;
  position: relative;
  padding: 40px;
}
.spelling-box .words2 {
  margin-top: 50px;
}
.spelling {
  margin-top: 35px;
  margin-left: 143px;
}
.inputs-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.inputs {
  display: flex;
}
.listen,
.speak {
  width: 200px;
  border-radius: 100px;
  background-color: white;
  height: 200px;
  margin: 20px;
}
.listen h2,
.speak h2 {
  margin-top: 25px;
}
.next {
  width: 200px;
  height: 90px;
  border-radius: 45px;
  border-color: none;
  background-color: #f9edee;
  font-weight: 800;
  font-size: 20px;
  border-style: unset;
}
.next-button {
  position: absolute;
  bottom: 80px;
  right: 26px;
  cursor: pointer;
}
.display {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: start;
}
.modal {
  display: flex;
  height: 488px;
  width: 600px;
  background-color: white;
  border-radius: 15px;
  padding: 40px;
  position: relative;
}
.answers-container {
  display: flex;
  justify-content: start;
  flex-direction: column;
}
.answer {
  display: flex;
  justify-content: start;
  margin: 25px;
}
input[type="radio"] {
  transform: scale(2.2);
  margin: 0 10px;
 
}
input[type="radio"] {
	accent-color: #FF7B35;
}

label {
  margin: 0 10px;
}
.next-question {
  position: absolute;
  bottom: 40px;
  right: 26px;
  cursor: pointer;
  padding:9px 40px; 
  background-color: #B7D0F5; 
  border-radius: 30px;
  font-weight: 900;
  font-size: 24px;
}
.next-question:disabled{
  background: #BDBCBC;
  color: #666363;
  cursor: auto;
}
.next-question:enabled:hover{
    background: #DCE8FA;
}
h4 {
  text-align: start;
}
</style>
