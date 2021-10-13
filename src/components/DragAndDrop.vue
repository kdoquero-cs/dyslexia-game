<template>
  <div>
    <h2>Draggable Elements</h2>
    <div
      class="draggable"
      :draggable="true"
      @dragstart="drag($event, o)"
      v-for="o of origin"
      :key="o"
      @click.stop
    >
      {{ o }}
    </div>
    <div class="basket_container">
    <div class="basket_column">
      <h2>Target1</h2>
      <div id="target" @dragover.prevent @drop="drop">
        <div class="draggable" v-for="t of target" :key="t">
          {{ t }}
        </div>
      </div>
    </div>
    <div class="basket_column">
      <h2>Target2</h2>
      <div id="target2" @dragover.prevent @drop="drop2">
        <div class="draggable" v-for="t of target2" :key="t">
          {{ t }}
        </div>
      </div>
    </div>
    </div>

  </div>
</template>
<script>
export default {
  name: "DragAndDrop",
  data() {
    return {
      origin: ["apple", "orange", "grape"],
      target: [],
      target2: []
    };
  },
  methods: {
    drag(ev, text) {
      ev.dataTransfer.setData("text", text);
    },
    drop(ev) {
      const text = ev.dataTransfer.getData("text");
      const index = this.origin.findIndex(o => o === text);
      this.origin.splice(index, 1);
      this.target.push(text);
    },
    drop2(ev) {
      const text = ev.dataTransfer.getData("text");
      const index = this.origin.findIndex(o => o === text);
      this.origin.splice(index, 1);
      this.target2.push(text);
    }
  }
};
</script>
<style scoped>
.draggable {
  margin-right: 5px;
}
#target {
  border: 1px solid black;
  width: 45vw;
  height: 100px;
  padding: 5px;
}
#target2 {
  border: 1px solid black;
  width: 45vw;
  height: 100px;
  padding: 5px;
}
.basket_container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.basket_column {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
