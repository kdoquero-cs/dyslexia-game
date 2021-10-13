<template>
<div class="background">
  <div class="TxtBox">
    <div class="Txtbox">
      <h1 class="h1">Information for parents and professionals</h1> 
      <p>First of all, we believe it is important for you to congratulate your child on finishing this game! It is not always an easy thing for them, eventhough we made sure to make it as playful as possible.
      </p>
      <p>This game allowed us to distinguish key difficulties your child may have when reading. <br>
      We gathered a <a href="" class="link">detailed report</a> of the information we could gather from this game.</p>
    </div>
    <div class="ProfilePanel">
      <h2 class="h2">The best profile for your child</h2>
      <p>We have developed a tool that allows to adapt the text of a web page to alleviate the difficulties your child may encounter when reading.<br>
      We identified the 4 profiles appearing below that may suit your child's needs.<br>
      Review each of these profiles with him/her to identify which best suits his/her needs</p>
      <div>
        <div>
          <div>
            <h3 class="h3">Profile 1</h3>
            <p>This profile uses the following functionalities:
            <ul>
              <li class="listitem">separated syllables</li>
              <li class="listitem">increased space between lines</li>
              <li class="listitem">increased space between words</li>
            </ul>
            </p>
            <img src="" alt="Profile 1" class="ProfileImg">
          </div>
        </div>
          <div>
            <h3 class="h3">Profile 2</h3>
            <p>This profile uses the following functionalities:
            <ul>
              <li class="listitem">separated syllables</li>
              <li class="listitem">increased space between lines</li>
              <li class="listitem">increased space between words</li>
            </ul>
            </p>
            <img src="" alt="Profile 2" class="ProfileImg">
          </div>
        </div>
        <div>
          <div>
            <h3 class="h3">Profile 3</h3>
            <p>This profile uses the following functionalities:
            <ul>
              <li class="listitem">separated syllables</li>
              <li class="listitem">increased space between lines</li>
              <li class="listitem">increased space between words</li>
            </ul>
            </p>
            <img src="" alt="Profile 3" class="ProfileImg">
          </div>
          <div>
            <h3 class="h3">Profile 4</h3>
            <p>This profile uses the following functionalities:
            <ul>
              <li class="listitem">separated syllables</li>
              <li class="listitem">increased space between lines</li>
              <li class="listitem">increased space between words</li>
            </ul>
            </p>
            <img src="" alt="Profile 4" class="ProfileImg">
          </div>
        </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: "ParentsInfo",
};
</script>

<style>
.background {
  background-color: #b3df8d;
}
.TxtBox {
  border-color: #ececec;
  border-width: 2px;
  border-radius: 30px;
  padding: 30px;
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
  color: #3c3d40;
}
.h2 {
  font-size: 18px;
  font-weight: bold;
  color: #9d078d;
}
.h3 {
  font-size: 16px;
  font-weight: bold;
  color: #2e3ae1;
}
.listitem {
}
</style>
