<template>
  <div class="container">
    <fieldset class="main-form">
      <legend>
        <h1 class="main-title">Before anything, choose your companion</h1>
      </legend>

      <div class="companion-wrapper">
        <label for="PhoenixInput" class="companion-btn">
          <input id="PhoenixInput" name="avatar" type="radio" class="radio sr-only" />
          <img src="@/assets/avatars/Animal1.svg" alt="Phoenix" class="companion-img" />
        </label>

        <label for="UnicornInput" class="companion-btn">
          <input id="UnicornInput" name="avatar" type="radio" class="radio sr-only" />
          <img src="@/assets/avatars/Animal2.svg" alt="Unicorn" class="companion-img" />
        </label>

        <label for="FoxInput" class="companion-btn">
          <input id="FoxInput" name="avatar" type="radio" class="radio sr-only" />
          <img src="@/assets/avatars/Animal3.svg" alt="Fox" class="companion-img" />
        </label>

        <label for="DragonInput" class="companion-btn">
          <input id="DragonInput" name="avatar" type="radio" class="radio sr-only" />
          <img src="@/assets/avatars/Animal4.svg" alt="Dragon" class="companion-img" />
        </label>
      </div>

      <csm-button class="next" @csmClick="goToForm">Next</csm-button>
    </fieldset>
  </div>
</template>

<script>
import router from "@/router";
import { ref } from "@vue/composition-api";
export default {
  name: "CompagnionChoice",
  setup() {
    const selected = ref("");
    const goToForm = () => {
      router.push({ path: "/form" })
    }

    return {
      goToForm
    }
  }
};
</script>

<style scoped>
.container {
  height: 100%;
  padding: 5% 10%;
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
  border-radius: 16px;
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
  border-color: var(--colors-gray-lighter-40);
}

.next {
  margin-top: 2em;
}
</style>
