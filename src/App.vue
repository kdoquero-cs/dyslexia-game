<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import CompositionApi from '@vue/composition-api';
import "./style.css"
Vue.use(CompositionApi);

export default {
  name: 'App'
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
  background-image: radial-gradient(ellipse at bottom, var(--colors-dataviz-purple-darker-20), var(--colors-dataviz-purple-darker-30));
}
</style>
