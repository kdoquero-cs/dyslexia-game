<template>
  <div class="main-container">
    <div class="TxtBox">
      <div class="Txtbox">
        <h1 class="h1">Informations pour les parents et les professionnels </h1>
        <div class="main-info">
          <p>
          Tout d'abord, nous pensons qu'il est important pour vous de féliciter
          votre enfant pour avoir terminé ce jeu ! Ce n'est pas toujours une chose facile
          pour eux, même si nous avons fait en sorte de le rendre aussi ludique que possible.
          </p>
          <p>
            Ce jeu nous a permis de distinguer les principales difficultés que votre enfant peut rencontrer
            en lecture.
          </p>
          <br />
          <p>
            Nous avons créé un 
          <router-link to="/game-assessment" class="link">rapport détaillé</router-link>
            reprenant les resultats du jeu.
          </p>
          <button class="next" @click="goToReport" primary
            >Rapport détaillé (mockup)</button
          >
        </div>
      </div>
      <div class="ProfilePanel">
        <h2 class="h2">Le meilleur profil pour votre enfant</h2>
      </div>
    </div>
    <div class="reading-profile" v-on:click="goToReadingProfile()">
      <div class="reading-profile__item">
        <label>Profil de lecture 1</label>
        <img
          src="./../../static/reading-profile/profile1.png"
          alt="Reading profile 1"
        />
      </div>
      <div class="reading-profile__item">
        <label>Profil de lecture 2</label>
        <img
          src="./../../static/reading-profile/profile2.png"
          alt="Reading profile 2"
        />
      </div>
      <div class="reading-profile__item">
        <label>Profil de lecture 3</label>
        <img
          src="./../../static/reading-profile/profile3.png"
          alt="Reading profile 3"
        />
      </div>
      <div class="reading-profile__item">
        <label>Profil de lecture 4</label>
        <img
          src="./../../static/reading-profile/profile4.png"
          alt="Reading profile 4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import router from "@/router";
import store from "../store";
export default defineComponent({
  name: "ParentsInfo",
  setup() {
    const goToReadingProfile = () => {
      router.push({ path: "/reading-profile" });
    };
    const goToReport = () => {
      router.push({ path: "/game-assessment" });
    };
    return {
      goToReadingProfile,
      goToReport
    };
  }
});
</script>

<style scoped>
.background {
  background-color: #ffffff;
  height: inherit;
  padding: 5%;
}
.TxtBox {
  background-color: #ffffff;
}
.ProfilePanel {
  background-color: #ffffff;
  opacity: 70%;
}
.link {
  color: #143250;
  cursor: pointer;
  text-decoration: underline;
}
.h1 {
  font-size: 24px;
  font-weight: bold;
}
.h2 {
  font-size: 18px;
  font-weight: bold;
  color: black;
}
.h3 {
  font-size: 16px;
  font-weight: bold;
  color: #2e3ae1;
}
.listitem {
}

.main-info {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f8fb;
  text-align: justify;
  flex-direction: column;
  padding: 40px;
}

.main-info p {
  width: -webkit-fill-available;
}

.reading-profile {
  display: flex;
  justify-content: center;
  align-items: center;
}
.reading-profile__item img {
  width: 80%;
  border: 4px solid #d38e6b;
  border-radius: 12px;
  max-height: 300px;
}
.reading-profile__item img:hover {
  width: 82%;
  cursor: pointer;
}

.main-container {
  padding: 5% 10%;
  background-color: var(--colors-gray-white);
  overflow: auto;
}
</style>
