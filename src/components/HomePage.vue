<template>
  <section>
    <div>
        Image
    </div>
    <div>
      <h1>Hello I'm Niska</h1>
      <form action="">
        <div class="form">
            <h3>What's your {{ title }}</h3>
          <div class="input-container" v-if="!showAge">
            <label for="name">Name</label>
            <csm-input type="text" @csmInput="inputName"></csm-input>
          </div>
          <div class="inputs-container" v-if="showAge">
            <div class="input-container" >
              <label for="years">Years</label>
              <csm-input type="number" name="years" @csmInput="inputYears" ></csm-input>
            </div>
            <div class="input-container">
              <label for="months">Months</label>
              <csm-input type="number" name="months" @csmInput="inputMonths" ></csm-input>
            </div>
          </div>
        </div>
      </form>
      <div class="next-container">
          <csm-button @csmClick="toogleShowAge">Next</csm-button>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, defineComponent, ref } from "@vue/composition-api";
import router from "@/router";
import store from "../store"
export default defineComponent({
  props: {},
  setup() {
    const showAge = ref(false);
    const title = computed(() => (showAge.value ? "birthday" : "name"));

    const inputName = (event) => {
      store.setName(event.detail.value);
    };

    const inputYears = (event) => {
      store.setYears(event.detail.value)
    };
    const inputMonths = (event) => {
        store.setMonths(event.detail.value)
    };
    const toogleShowAge = () => {
      if (showAge.value && store.user.value.name && store.user.value.years && store.user.value.months) {
        router.push({ path: "/start" });
      }
      showAge.value = !showAge.value;
    };

    return {
      showAge,
      toogleShowAge,
      title,
      inputName,
      inputYears,
      inputMonths,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    width: 100%;
    display: flex;
    justify-content: center;
}
csm-input {
  margin: 5px;
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
