

<template>
  <div class="alert-box">
    This is an alert
    <div class="buttons">
      <BCButton>Does Nothing 1</BCButton>
      <BCButton>Does Nothing 2</BCButton>
    </div>
  </div>
</template>

<script setup lang="ts">

import BCButton from "@/components/task1-basecounter/BCButton.vue";
</script>

<style scoped>
.alert-box
{
  width: 30%;
  height: 20%;
  /*
  We need to put the alert box in the middle
  of the page underlay
  */
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;

  background-color: grey;
}
.buttons
{
  display: flex;
  flex-direction: row;
  gap: 3px;
}
</style>