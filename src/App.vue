<template>
  <div id="app">
    <canvas ref="canvas" class="animated-background"></canvas>
    <router-view class="main" />
  </div>
</template>

<script>
import Vue from 'vue';
import CompositionApi from '@vue/composition-api';
import { onMounted, onBeforeUnmount } from '@vue/composition-api';
import { AnimatedBackground } from '@/composables/animated-background';
import "./style.css"
Vue.use(CompositionApi);

export default {
  name: 'App',
  setup: () => {
    const animatedBackground = AnimatedBackground.getInstance();

    onMounted(() => {
      animatedBackground.init(document.querySelector('.animated-background'));
    });

    onBeforeUnmount(() => {
      animatedBackground.destroy();
    });
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
  width: 100%;
}

#app {
  font-family: Luciole, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--colors-text-gray-base);
  overflow: hidden;

  background-color: var(--colors-dataviz-purple-darker-30);
  background-image: radial-gradient(ellipse at bottom, rgba(255, 253, 166, .2), var(--colors-dataviz-purple-darker-30), var(--colors-dataviz-purple-darker-30));
  background-size: 200%;
  background-position: 50% 100%;
}

.animated-background {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  pointer-events: none;
}

button.pill {
  border-radius: 16px;
}

.main {
  z-index: 1;
}
</style>
