<template>
  <section class="content">
    <h1 class="title">Bienvenue dans l'aventure de Nazka</h1>

    <router-link to="/companion" class="link">
      <button >Appuyer sur start</button>
    </router-link>

    <!-- <audio src="@/assets/music/MainMenu.mp3" autoplay="true"></audio> -->
  </section>
</template>

<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { AnimatedBackground } from "../composables/animated-background";

export default defineComponent({});
</script>

<style scoped>
.content {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 100%;
  width: 100%;
  z-index: 1;
}

.title {
  font-size: 3.33em;
  text-transform: capitalize;
  letter-spacing: .15em;
  color: var(--colors-text-white-base);
}

.link {
  text-decoration: none;
}

.mute-music {
  position: absolute;
  top: 2em;
  right: 2em;
  color: var(--colors-text-white-base);
  cursor: pointer;
}
.start-button {
 padding:20px 30px;
 border-radius: 30px; 
 background-color: #B7D0F5 ; 
}
</style>
