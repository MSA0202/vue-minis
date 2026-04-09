<template>
<div class="wrapper">
<!-- todo allow user input that can control the timeout to increase speed -->
  <label style="width: fit-content">Click the Progress Bar!</label>
  <div class="outer-bar" @click="startCountUp">
    <div class="progress" :style="{width: width + '%'}">

    </div>
  </div>
  <BCButton style="width: fit-content" @click="reset">Reset Timer</BCButton>
</div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import BCButton from "@/components/task1-basecounter/BCButton.vue";

const width = ref(0)
let timer: number | null = null


function startCountUp() {
  stopCountUp()

  timer = setInterval(() =>
  {
    if(width.value < 100)
    {
      width.value+=0.1
    }
    else
    {
      stopCountUp()
    }
  }, 100)
}

function stopCountUp() {
  if (timer !== null) {
    clearInterval(timer)
    timer = null
  }
}

function reset()
{
  width.value = 0;
  stopCountUp();
}
</script>

<style scoped>
.wrapper
{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.outer-bar
{
  border: 1px solid white;
  height: 1rem;
}

.progress
{
  height: inherit; /*Inherit same as parent*/
  background-color: cadetblue;
  width: 0;
}
</style>