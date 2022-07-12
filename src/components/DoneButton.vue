<template>
  <button class="pill next-button" :disabled="disabled" @click="goToGameList">I'm done!</button>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import router from "@/router";
import { useGameState } from "../composables/useGameState";
export default defineComponent({
  props: {
    disabled: {
      default: null,
    },
    id: {},
  },
  setup(props) {
    const gameState = useGameState.getInstance();
    function goToGameList() {
      gameState.updateGame(props.id);
      router.push({ path: "/gamelist" });
    }
    return {
      goToGameList,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.next:disabled {
  cursor: not-allowed;
  background-color: #BDBCBC;
  color: #666363;
}
</style>
