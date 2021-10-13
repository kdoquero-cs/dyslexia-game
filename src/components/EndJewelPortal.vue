<template>
<div class="background">
  <div class="TxtBox">
    <div>
      <h1 class="h1">We made it!</h1> 
      <p>
      That was quite a hike!
      </p>
      <p>Let's place the jewels around the mysterious portal
      </p>
      <button type="button">Place the jewels</button>
    </div>
    <!-- the following appears in place of the previous text once the Jewels animation is over -->
    <div>
      <h1 class="h1">NAME, thank you so much for helping!</h1>
      <p>I can now go home to my family and friends. <br>
      I really enjoyed our adventure. I hope to see you again someday. Please take care and be good!</p>
      <p>Note: There are some <a href="parent_info.html" class=".link">information for your parents</a>, let them know about it!</p>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'EndJewelPortal'
}
</script>

<style>

.background {
 background-image: url("") ;
}
.TxtBox {
  border-color: #ECECEC;
  border-width: 2px;
  border-radius: 30px;
  padding: 30px;
  background-color: #FFFFFF;
}
.link {
    color: #143250;
    cursor: pointer;
    text-decoration: underline;
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
  border-width: 0 px;
  min-height:0;
  min-width:0;
}

</style>
