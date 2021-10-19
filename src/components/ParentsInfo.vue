<template>
  <div class="main-container">
    <div class="TxtBox">
      <div class="Txtbox">
        <h1 class="h1">Information for parents and professionals</h1>
        <div class="main-info">
          <p>
            First of all, we believe it is important for you to congratulate
            your child on finishing this game! It is not always an easy thing
            for them, eventhough we made sure to make it as playful as possible.
          </p>
          <p>
            This game allowed us to distinguish key difficulties your child may
            have when reading.
          </p>
          <br />
          <p>
            We gathered a
            <router-link to="/game-assessment" class="link">detailed report</router-link>
            of the information we could gather from this game.
          </p>
          <csm-button class="next" @csmClick="goToReport" primary
            >Detailed report (mockup)</csm-button
          >
        </div>
      </div>
      <div class="ProfilePanel">
        <h2 class="h2">The best profile for your child</h2>
      </div>
    </div>
    <div class="reading-profile" v-on:click="goToReadingProfile()">
      <div class="reading-profile__item">
        <label>Reading profile 1</label>
        <img
          src="./../../static/reading-profile/profile1.png"
          alt="Reading profile 1"
        />
      </div>
      <div class="reading-profile__item">
        <label>Reading profile 2</label>
        <img
          src="./../../static/reading-profile/profile2.png"
          alt="Reading profile 2"
        />
      </div>
      <div class="reading-profile__item">
        <label>Reading profile 3</label>
        <img
          src="./../../static/reading-profile/profile3.png"
          alt="Reading profile 3"
        />
      </div>
      <div class="reading-profile__item">
        <label>Reading profile 4</label>
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
