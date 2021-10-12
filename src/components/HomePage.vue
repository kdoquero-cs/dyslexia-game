<template>
  <section>
    <div>
      <h1>Hello I'm Niska</h1>
      <form action="">
        <div class="form">
          <label for="name">What's your {{ title }}</label>
          <csm-input type="text" @csmInput="setName"></csm-input>
          <div v-if="showAge">
            <label for="years">Years</label>
            <csm-input name="years" @csmInput="setInput"></csm-input>
            <input v-model="name" title="years" type="text" />
            <label for="months">Months</label>
            <input title="months" type="text" />
          </div>
          <p>{{ name }}</p>
        </div>
      </form>
      <div>
        <button @click="toogleShowAge">Next</button>
      </div>
    </div>
  </section>
</template>

<script>
import { computed, defineComponent, ref } from "@vue/composition-api";
import router from "@/router";
export default defineComponent({
  props: {},
  setup() {
    const name = ref("");
    const years = ref("");
    const months = ref("");

    const showAge = ref(false);
    const title = computed(() => (showAge.value ? "birthday" : "name"));
    const setName = (event) => {
      name.value = event.detail.value;
    };
    const setInput = (event) => {};
    const toogleShowAge = () => {
      if (showAge.value) {
        router.push({ path: "/start" });
      }
      showAge.value = !showAge.value;
    };

    return {
      showAge,
      name,
      toogleShowAge,
      title,
      years,
      months,
      setInput,
      setName,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  margin: 5px;
}
</style>
