<template>
<div class="wrapper">

  <label style="width: fit-content">Control the Speed and Colour then Click the Progress Bar!</label>

  <SSCInput v-model="speed" placeholder="Enter Speed (2,3,4)" style="width: fit-content"/>

  <BaseSelect style="width: fit-content; padding: 0.5rem" @selectedValue="changeProgressBarColour"/>

  <div class="outer-bar" @click="startCountUp">
    <div class="progress" :style="{width: width + '%', backgroundColor: baseSelectedColour}">
    </div>
  </div>

  <BCButton style="width: fit-content" @click="reset">Reset Progress Bar</BCButton>

</div>
</template>

<script setup lang="ts">

import {ref} from "vue";
import BCButton from "@/components/task1-basecounter/BCButton.vue";
import SSCInput from "@/components/super-sub-components/SSCInput.vue";
import BaseSelect from "@/components/task6-baseselectoption/BaseSelect.vue";

const speed = ref(1);

const width = ref(0)
let timer: number | null = null

/*
* The interval 'timeout' is what is used to determine the speed at
* which the progress bar fills. A shorter timeout means the width increases after a shorter
* period, hence the shorter the period, the more increases overall per the period
* which makes it faster
* */
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
  }, 100/(speed.value * 10))
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

const baseSelectedColour = ref("");
function changeProgressBarColour(val: string)
{
  baseSelectedColour.value = val;
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

<!--
                        At its core, setInterval is just:

                        “Run this function repeatedly every X milliseconds.”

                        🧠 Simple mental model
                        setInterval(() => {
                          // code here
                        }, 1000)

                        👉 Means:

                        Wait 1000ms (1 second)
                        Run the function
                        Wait another 1000ms
                        Run it again
                        Repeat forever…
                        ⏱️ Example (your case)
                        timer = setInterval(() => {
                          width.value += 10
                        }, 1000)

                        👉 What happens:

                        After 1 second → width = 10
                        After 2 seconds → width = 20
                        After 3 seconds → width = 30
                        …keeps going
                        ❗ Important: it NEVER stops on its own

                        That’s the key thing beginners miss.

                        You must stop it manually:

                        clearInterval(timer)
                        🔁 Lifecycle view

                        Think of it like a loop you don’t control directly:

                        start → repeat → repeat → repeat → ... until you clear it
                        ⚠️ Common mistake (you almost hit this)

                        If you call setInterval multiple times:

                        startCountUp()
                        startCountUp()
                        startCountUp()

                        You now have 3 intervals running at the same time 😬

                        👉 That’s why we always do:

                        stopCountUp()

                        before starting a new one.

                        🆚 setInterval vs setTimeout (quick clarity)
                        setInterval → repeats forever
                        setTimeout → runs once
                        setTimeout(() => {
                          console.log("runs once after 1 second")
                        }, 1000)
                        🧩 Clean analogy
                        setInterval = ticking clock ⏰
                        clearInterval = removing the batteries 🔋
-->