<template>
  <div class="flex m-10">
    <draggable class="dragArea list-group w-full" :list="list" @change="log">
      <div
        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
        v-for="element in list"
        :key="element.name"
      >
        {{ element.name }}
      </div>
    </draggable>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from "@vue/composition-api";
import { VueDraggableNext } from "vue-draggable-next";

const setup = (props: any) => {
  onUnmounted(() => {
    
  });

  return;
};

export default defineComponent({
  name: "DragAndDrop",
  components: {
    draggable: VueDraggableNext
  },
  props: {
    value: String
  },
  data() {
    return {
      enabled: true,
      list: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 }
      ],
      dragging: false
    };
  },
  methods: {
    log(event) {
      console.log(event);
    }
  },
  setup
});
</script>
<style scoped>
</style>
