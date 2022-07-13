<template>
  <div class="background">
    <h1>Le meilleur profil pour votre enfant</h1>
    <div class="reading-profile">
      <div class="reading-profile__item">
        <label>Profile de lecture 1</label>
        <img
          src="./../../static/reading-profile/profile1.png"
          alt="Reading profile 1"
        />
      </div>
      <div class="reading-profile__item">
        <label>Profile de lecture 2</label>
        <img
          src="./../../static/reading-profile/profile2.png"
          alt="Reading profile 2"
        />
      </div>
      <div class="reading-profile__item">
        <label>Profile de lecture 3</label>
        <img
          src="./../../static/reading-profile/profile3.png"
          alt="Profile de lecture 3"
        />
      </div>
      <div class="reading-profile__item">
        <label>Profile de lecture 4</label>
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

export default defineComponent({
  name: "ReadingProfile"
});
</script>

<style scoped>
.background {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  height: inherit;
  padding: 40px;
}

.reading-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 70%;
}

.reading-profile__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding-bottom: 10px;
}
.reading-profile__item img {
  border: 4px solid #d38e6b;
  border-radius: 12px;
  max-height: 300px;
}
</style>
