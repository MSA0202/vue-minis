<template>
  <div>
    <div class="item"
        v-for="(item, index) in items"
         :key="item"
         draggable="true"
         @dragstart="draggedItemIndex = index"
         @dragover.prevent
         @drop="handleDropping(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref(["A", "B", "C", "D"]);
const draggedItemIndex = ref<number | null>(null);

function handleDropping(dropIndex: number)
{
  if (draggedItemIndex.value == null) return;

  console.log("Item index chose ", draggedItemIndex.value, items.value[draggedItemIndex.value]);
  console.log("Item at drop index: ", dropIndex, items.value[dropIndex]);

  // Replacing
  const tmp = items.value[draggedItemIndex.value];
  items.value[draggedItemIndex.value] = items.value[dropIndex];
  items.value[dropIndex] = tmp;
}
</script>

<style scoped>
.item
{
  padding: 10px; border: 1px solid #ccc; margin-bottom: 5px; cursor: grab;
}
</style>