<template>
  <section>
    <div>
      <h1>Hello I'm Niska</h1>
      <form action="">
        <div class="form">
          <label for="name">What's your {{ title }}</label>
          <input
            v-if="!showAge"
            v-model="name"
            :ref="name"
            title="name"
            type="text"
          />
          <div v-if="showAge">
            <label for="age"></label>
            <input title="years" type="text" /><input
              title="months"
              type="text"
            />
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
import { computed, defineComponent, ref} from "@vue/composition-api";
export default defineComponent({
  props: {},
  setup() {
    const name = ref("");
    const showAge = ref(false);
    const title = computed(() => (showAge.value ? "birthday" : "name"));
    const  goToPlay = () => {
      router.push({
        name: 'Play',
        query: {
          ...route.query,
        },
      })
    }
    const toogleShowAge = () => {
      showAge.value = !showAge.value;
      if (showAge.value) {
          goToPlay();
      }
    };
    
    return {
      showAge,
      name,
      toogleShowAge,
      title,
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
