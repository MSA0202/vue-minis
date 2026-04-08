<template>
  <div class="wrapper">
    <div class="accordion-clicker" @click="toggleOpenClose">
      An Accordion
      <span style="color: white">{{isOpen ? '▲' : '▼' }}</span>
    </div>
    <div class="accordion-visor" :class="isOpen ? 'base-select-open' : 'base-select-closed'">
      <BaseSelect style="padding: 1rem;"/>
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
.accordion-clicker
{
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: red;
  color: yellow;
  padding: 1rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.accordion-clicker:hover
{
  background-color: cornflowerblue;
  color: black;
}

/* Options transitioning */
.accordion-visor
{
  overflow: hidden;
  /* This will apply to close and open*/
  transition: max-height 1s ease, opacity 2s ease;

  /*
  Using it this way will allow you to specify different times
  for opening and closing appearances
  */
  transition-property: max-height, opacity;
  transition-timing-function: ease;
}
.base-select-closed
{
  max-height: 0;
  opacity: 0;
  /*
  Using it this way will allow you to specify different times
  for opening and closing appearances
  */
  transition-duration: 0.2s; /* closing speed */
}
.base-select-open
{
  max-height: 200px; /* pick something bigger than content */
  opacity: 1;

  border: 2px solid grey;
  /*
  Using it this way will allow you to specify different times
  for opening and closing appearances
  */
  transition-duration: 0.5s; /* opening speed */
}
</style>