<template>
  <div class="main-container">
    <fieldset class="main-form">
      <legend>
        <h1 class="main-title">Avant toute chose, choisissez votre compagnon</h1>
      </legend>

      <div class="companion-wrapper">
        <label for="PhoenixInput" class="companion-btn">
          <input id="PhoenixInput" name="avatar" type="radio" class="radio sr-only" :checked="selected === 0" v-on:input="selected = 0" />
          <img src="@/assets/avatars/Animal1.svg" alt="Phoenix" class="companion-img" />
        </label>

        <label for="UnicornInput" class="companion-btn">
          <input id="UnicornInput" name="avatar" type="radio" class="radio sr-only" :checked="selected === 1" v-on:input="selected = 1" />
          <img src="@/assets/avatars/Animal2.svg" alt="Unicorn" class="companion-img" />
        </label>

        <label for="FoxInput" class="companion-btn">
          <input id="FoxInput" name="avatar" type="radio" class="radio sr-only" :checked="selected === 2" v-on:input="selected = 2" />
          <img src="@/assets/avatars/Animal3.svg" alt="Fox" class="companion-img" />
        </label>

        <label for="DragonInput" class="companion-btn">
          <input id="DragonInput" name="avatar" type="radio" class="radio sr-only" :checked="selected === 3" v-on:input="selected = 3" />
          <img src="@/assets/avatars/Animal4.svg" alt="Dragon" class="companion-img" />
        </label>
      </div>

      <button class="next" @click="goToForm">Suivant</button>
    </fieldset>

    <!-- <audio src="@/assets/music/MainMenu.mp3" autoplay="true"></audio> -->
  </div>
</template>

<script>
import router from "@/router";
import { ref } from "@vue/composition-api";
import { useCompanion } from "../composables/useCompanion";

export default {
  name: "CompagnionChoice",
  setup() {
    const companionHook = useCompanion.getInstance();
    const selected = ref(0);
    const goToForm = () => {
      companionHook.setCompanion(selected.value);
      router.push({ path: "/form" })
    }

    return {
      selected,
      goToForm,
    }
  }
};
</script>

<style scoped>
.main-container {
  padding: var(--nazka-app-padding);
}

.main-form {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-self: center;
  height: 100%;
  border: none;
  padding: 0;
  margin: 0;
}

.main-title {
  margin: 0;
  margin-bottom: 1em;
  padding: var(--spacing-sp-3);
  font-size: 2em;
  border-radius: var(--nazka-rect-radius);
  background-color: var(--colors-gray-lighter-40);
}

.button {
  border-color: #ECECEC;
  border-width: 2px;
  padding: 12px;
  background-color: #BCCF00;
  font-size: 15px;
  font-weight: 600;
  color: #3C3D40;
}

.companion-wrapper {
  flex: 1;
  display: flex;
  flex-flow: row nowrap;
}

.companion-btn {
  display: flex;
  flex: 1;
  width: 25%;
  align-items: center;
}

.companion-img {
  margin: 0;
  height: 50%;
  min-height: 0;
  min-width: 0;
  cursor: pointer;
  padding: 2em;
  border: 2px solid transparent;
  border-radius: var(--border-radius-br-16);
  transition: transform .2s ease-in-out, border-color .2s ease-in-out;
}

.companion-img:hover {
  transform: scale(1.1);
}

.radio:focus + .companion-img,
.radio:checked + .companion-img {
  transform: scale(1.1);
  border-color:#FD605D;
}

.next {
  margin-top: 2em;
/* padding: 15px 32px; */
 /* margin: auto; */
  width: 30%;
    margin-left: auto;
  margin-right: auto;
font-size: 36px;

background: #B7D0F5;
border-radius: 30px;

}
</style>
