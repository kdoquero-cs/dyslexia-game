<template>
  <section>
    <div>
      <h1>Page 4</h1>
      <div class="column" v-for="(game, index) in games" :key="index">
        {{ game.name }}
      </div>
    </div>
  </section>
</template>

<script>
import {
  defineComponent,
  ref,
} from "@vue/composition-api";

function setup(props) {
  const games = ref([
    { id: 1, name: "game1" },
    { id: 2, name: "game2" },
    { id: 3, name: "game3" },
    { id: 4, name: "game4" },
    { id: 5, name: "game5" },
    { id: 6, name: "game6" },
    { id: 7, name: "game7" },
    { id: 8, name: "game8" },
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
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
