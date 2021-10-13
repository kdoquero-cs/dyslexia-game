<template>
  <section class="page4">
    <div>
      <h1>Page 4</h1>
      <div>Text</div>
      <div class="page4__container">
        <div class="page4__item" v-for="(game, index) in games" :key="index">
          {{ game.name }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";

function setup(props) {
  const games = ref([
    { id: 1, name: "game1" },
    { id: 2, name: "game2" },
    { id: 3, name: "game3" },
    { id: 4, name: "game4" },
    { id: 5, name: "game5" },
    { id: 6, name: "game6" },
    { id: 7, name: "game7" },
    { id: 8, name: "game8" }
  ]);
  return { games };
}

export default defineComponent({
  props: {},
  setup
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page4__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.page4__item {
  min-width: 30%;
  height: 100px;
  border: 1px solid black;
  margin: 1%;
}
</style>
