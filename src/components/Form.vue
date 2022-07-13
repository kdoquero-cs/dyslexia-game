<template>
  <section class="main-container">
    <div>
      <img v-if="companion" :src="companion.path" :alt="companion.name" />
    </div>
    <div class="form-container" >
      <h1> Bonjour ! Je suis Nazka !</h1>
      <form action="">
        <div class="form">
            <h2>Quel est votre {{ title }}?</h2>
          <div class="input-container" v-if="!showAge">
            <label for="name">Prenom</label>
            <input type="text" @input="inputName"/>
          </div>
          <div class="inputs-container" v-if="showAge">
            <div class="input-container" >

              <label for="years" class="form-label">Ans</label>
              <input class="number-input" type="number" min="0" max="110" name="years" @input="inputYears" />
            </div>
            <div class="input-container">
              <label for="months" class="form-label">Mois</label>
              <input class="number-input" type="number" min="0" max="12" name="months" @input="inputMonths" />

            </div>

            <audio src="@/assets/voices/2B - niceToMeetYou.mp3" autoplay="true"></audio>
          </div>
        </div>
      </form>
      <div class="next-container">
          <button :disabled="showAge && !isValid" @click="toggleShowAge" primary>Suivant</button>
      </div>
    </div>

    <audio src="@/assets/music/MainMenu.mp4" autoplay="true"></audio>
    <audio src="@/assets/voices/2A - whatsYourName.mp3" autoplay="true"></audio>
  </section>
</template>

<script>
import { computed, defineComponent, ref } from "@vue/composition-api";
import router from "@/router";
import store from "../store";
import { useCompanion } from "../composables/useCompanion";
import { AnimatedBackground } from "../composables/animated-background";

export default defineComponent({
  props: {},
  setup() {
    const companionHook = useCompanion.getInstance();
    let companionFromHook = companionHook.companion.value || companionHook.companionList[0];
    const companion = ref(companionFromHook);
    const animatedBackground = AnimatedBackground.getInstance();
    animatedBackground.play();
   const isValid = computed(()=> store.user.value.name !== "" && store.user.value.years !== 0 && store.user.value.months !== 0);
    const showAge = ref(false);
    const title = computed(() => (showAge.value ? "age" : "Prenom"));
    const inputName = (event) => {
      store.setName(event.target.value);
    };

    const inputYears = (event) => {
      store.setYears(event.target.value);
    };
    const inputMonths = (event) => {
        store.setMonths(event.target.value);
    };
    const toggleShowAge = () => {
      if (isValid.value) {
        router.push({ path: "/gamelist" });
      }
      showAge.value = !showAge.value;
    };

    return {
      showAge,
      toggleShowAge,
      title,
      inputName,
      inputYears,
      inputMonths,
      companion,
      companionHook,
      isValid,
    };
  },
});
</script>

<style scoped>
.number-input {
  width: 150px;
}
.main-container {
  display: flex;
  align-items: center;
}

.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--nazka-rect-padding);
  background-color: var(--nazka-rect-color);
  border-radius: var(--nazka-rect-radius);
  margin-right: 3em;
}

img {
    max-width: 350px;
}
section {
    display: flex;
    width: 100%;
}
section > div {
    width: 50%;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.inputs-container {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
}
.form-label {
  width: 10em;
}
.input-container {
    display: flex;
    align-items: center;
}
.next-container {
    display: flex;
    justify-content: flex-end;
}
</style>
