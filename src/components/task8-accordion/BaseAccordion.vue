<template>
  <div class="wrapper" @click="toggleOpenClose">
    <div class="accordion-clicker">
      An Accordion
      <span>{{isOpen ? '▲' : '▼' }}</span>
    </div>
    <div class="accordion-visor">
      <BaseSelect :class="isOpen ? 'base-select-open' : 'base-select-closed'"/>
    </div>
  </div>

</template>

<script setup lang="ts">
import BaseSelect from "@/components/task6-baseselectoption/BaseSelect.vue";
import {ref} from "vue";

const isOpen = ref(false);

function toggleOpenClose()
{
  return isOpen.value = !isOpen.value;
}

</script>

<style scoped>
.base-select-closed
{
  display: none;
}
.base-select-open
{
  border: solid 2px white;
  /*TODO transition ;*/
}

.accordion-clicker
{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.accordion-clicker:hover
{
  background-color: cornflowerblue;
  color: black;
}
</style>