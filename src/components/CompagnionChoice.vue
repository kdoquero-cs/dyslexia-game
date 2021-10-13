<template>
  <div>
    <fieldset class="fieldset">
      <legend>
        <h1 class="h1">Before anything, choose your companion</h1>
      </legend>
      <!-- Focus should be visible on the image, not the radio button -->
      
      <label for="PhoenixInput">
        <input id="PhoenixInput" name="avatar" type="radio" class="sr-only" />
        <img src="@/assets/avatars/Animal1.svg" alt="Phoenix" class="RadioImg" />
      </label>
     
      <label for="UnicornInput">
         <input id="UnicornInput" name="avatar" type="radio" class="sr-only" />
        <img src="@/assets/avatars/Animal2.svg" alt="Unicorn" class="RadioImg" />
      </label>
     
      <label for="FoxInput">
         <input id="FoxInput" name="avatar" type="radio" class="sr-only" />
        <img src="@/assets/avatars/Animal3.svg" alt="Fox" class="" />
      </label>
     
      <label for="DragonInput">
         <input id="DragonInput" name="avatar" type="radio" class="sr-only" />
        <img src="@/assets/avatars/Animal4.svg" alt="Dragon" class="RadioImg" />
      </label>
    </fieldset>
     <csm-button @csmClick="goToForm">Next</csm-button>
  </div>
</template>

<script>
import router from "@/router";
import { ref } from "@vue/composition-api";
export default {
  name: "CompagnionChoice",
  setup() {
    const selected = ref("");
    const goToForm = () => {
      router.push({ path: "/form" })
    }

    return {
      goToForm
    }
  }
};
</script>

<style>
.fieldset {
  border-color: #ECECEC;
  border-width: 2px;
  border-radius: 30px;
  padding: 30px;
  background-color: #FFFFFF;
}
.h1 {
  font-size: 24px;
  font-weight: bold;
  color: #3C3D40;
}
.button {
  border-color: #ECECEC;
  border-width: 2 px;
  padding: 12 px;
  background-color: #BCCF00;
  font-size: 15px;
  font-weight: semi-bold;
  color: #3C3D40;
}
.RadioImg {
  border-width: 0px;
  min-height:0;
  min-width:0 ;
}
img {
  width: 100px;
  margin: 0 15px;
  cursor: pointer;
}
img:focus {
    outline: 2px solid blue;
}
/* IMAGE STYLES */
[type=radio] + img {
  cursor: pointer;
}

/* CHECKED STYLES */
[type=radio]:checked + img {
  outline: 2px solid #f00;
}

</style>
