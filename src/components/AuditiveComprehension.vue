<template>
  <section class="container">
    <div class="display">
      <div class="display">
        <div class="spelling-box">
          <h1>Auditive comprehension</h1>
          <h2>Step 1</h2>
          <p>Listen to my story:</p>
          <audio controls src="@/assets/voices/YoudLikeToKnowMoreAboutMe.mp3">
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <h2>Step 2</h2>
          <p>Next, answer five questions:</p>
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
                <h4>Question {{ count +1 }} /5</h4>
                <p>{{ currentValue.question }}</p>
              </div>
              <div class="answers-container">
                <div
                  class="answer"
                  v-for="(choice, index) in currentValue.choices"
                  :key="index"
                >
                  <input @click="setChoice(choice)" 
                    :checked="currentValue.answer === choice"
                    type="radio"
                    name="anwser"
                    :id="choice + '-' + index"
                    :value="choice + '-' + index"
                  />
                  <label :for="choice + '-' + index">{{ choice }}</label>
                </div>
              </div>
              <csm-pill :disabled="currentValue.answer.length === 0 || count == 4" class="next-question" @csmClick="next">Next question</csm-pill>
            </div>
          </div>
        </div>
      </div>
    </div>

    <csm-pill @csmClick="goToGameList" class="next-button">I'm done!</csm-pill>
  </section>
</template>

<script>
import { computed, defineComponent, ref, watch } from "@vue/composition-api";
import router from "@/router";
import { useCompanion } from "../composables/useCompanion";
import SpellingExercise from "@/assets/voices/SpellingExercise.mp3";
export default defineComponent({
  props: {},
  setup() {
    const count = ref(0);
    const values = ref([
      {
        id: 0,
        question: "What is Nazka's favourite food?",
        answer: "",
        choices: ["Carrot cake", "Lasagna", "Fruit"],
      },
      {
        id: 1,
        question: "Does every animal talk in Nazka's world ?",
        answer: "",
        choices: ["Yes", "No"],
      },
      {
        id: 2,
        question:
          "Is it true that the more trees we have, the cleaner the air is?",
        answer: "",
        choices: ["Yes", "No"],
      },
      {
        id: 3,
        question: "Who is samantha ?",
        answer: "",
        choices: ["My best friend", "My cousin", "My enemy"],
      },
      {
        id: 4,
        question: "How many siblings does Naska have ?",
        answer: "",
        choices: ["2", "3", "4"],
      },
    ]);
    const currentValue = computed(() => values.value[count.value]);

    const goToGameList = () => router.push({ path: "/gamelist" });
    const companionHook = useCompanion.getInstance();
    let companionFromHook =
      companionHook.companion.value || companionHook.companionList[0];
    const companion = ref(companionFromHook);

    const playInstruction = () => {
      const audio = new Audio(SpellingExercise);
      audio.play();
    };
    const setChoice =(choice) => {
      currentValue.value.answer = choice;
    }
    const next =() => {
      ++count.value;
    }
    return {
      companion,
      goToGameList,
      playInstruction,
      count,
      currentValue,
      next,
      setChoice
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  background: url("~@/assets/backgrounds/auditory-comprehension.jpg") no-repeat;
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
  height: 400px;
  width: 400px;
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
label {
  margin: 0 10px;
}
.next-question {
  position: absolute;
  top: 90%;
  left: 75%;
}
h4 {
  text-align: start;
}
</style>