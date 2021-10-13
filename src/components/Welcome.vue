<template>
  <fragment>
    <canvas ref="canvas" class="animated-background"></canvas>
    <section class="content">
      <h1>Welcome to Nazka's adventure</h1>
      <csm-button>
        <router-link to="/home">Press start</router-link>
      </csm-button>
    </section>
  </fragment>
</template>

<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { AnimatedBackground } from "../composables/animated-background";

function setup() {
  const canvas = ref(null);
  let animatedBackground = new AnimatedBackground();

  onMounted(() => {
    // animatedBackground.init(canvas);
  });
}

export default defineComponent({
  props: {},
  setup,
});
</script>

<style scoped>
html, body, #app, .animated-background, .content  {
  height: 100%;
  width: 100%;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  z-index: 1;
}
</style>
