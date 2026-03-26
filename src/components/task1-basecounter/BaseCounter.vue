<template>
  <div class="wrapper">
    <h1 style="background-color: darkgray; color: black; padding: 0.5rem">Count: {{count}} </h1>
    <div class="step-input" style="background-color: #2c3e50; color: white; padding: 0.5rem">
      <label>
        Step
      </label>
      <input placeholder="Default is 1" v-model.number="step"/>
    </div>
    <div class="increment-and-decrement-buttons"
         style="display: flex; gap: 1rem; background-color: white; padding: 0.5rem">
      <BCButton @click="increment">
        Increment
      </BCButton>
      <BCButton v-if="count > 0" @click="decrement">
        Decrement
      </BCButton>
      <BCButton v-if="count != 0" @click="clear">
        Clear
      </BCButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import {type Ref, ref} from "vue";
import BCButton from "@/components/task1-basecounter/BCButton.vue";

let count: Ref<number> = ref(0);
let step: Ref<number> = ref(1);

function increment()
{
  if (step.value == 0) count.value++;
  else
  {
    count.value = count.value + step.value;
  }
}

function decrement()
{
  if (step.value == 0) count.value--;
  count.value = count.value - step.value;
  // Prevent from reducing further than 0
  if(count.value < 0) count.value = 0;
}

function clear()
{
  count.value = 0;
}

</script>

<style scoped>

</style>