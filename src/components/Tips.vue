<template>
  <section>
   <div class="container">
     <div>IMAGE</div>
     <div>
       <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique adipisci dignissimos fugit, nobis magnam quae illo ducimus iste numquam voluptatem. Tenetur neque eos facilis cupiditate, ex iste blanditiis deleniti doloribus.</div>
        <csm-button @csmClick="goToGameList">Let's Play</csm-button>
     </div>
   </div>
   
  </section>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import router from "@/router";
export default defineComponent({
  props: {},
  setup() {
    const goToGameList = () => 
      router.push({ path: "/" });
    return {
      goToGameList
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  width: 100%;
  
}
.container > div {
  width: 50%;
}
</style>
