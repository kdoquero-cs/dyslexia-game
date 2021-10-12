<template>
  <section>
   <div class="container">
     <div>IMAGE</div>
     <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique adipisci dignissimos fugit, nobis magnam quae illo ducimus iste numquam voluptatem. Tenetur neque eos facilis cupiditate, ex iste blanditiis deleniti doloribus.</div>
   </div>
   <button>Let's play</button>
  </section>
</template>

<script>
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {},
  setup() {
    
    return {
      
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
