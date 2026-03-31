<template>
  <div class="wrapper">
    <BCButton style=" padding: 1rem;" @click="showAlert">Click Me For Alert</BCButton>
    <BaseAlert v-if="show" @showValue="handle"/>
  </div>
</template>

<script setup lang="ts">
import BCButton from "@/components/task1-basecounter/BCButton.vue";
import BaseAlert from "@/components/task4-basealert/BaseAlert.vue";
import {ref, type Ref, watch} from "vue";

const show: Ref<Boolean> = ref(false);
function showAlert()
{
  show.value = !show.value;
}

// See BaseAlert and AlertBox
// Forwarded emission value to close the AlertPopup
function handle(value: boolean)
{
  show.value = value;
}

watch(show, (newVal, oldVal) =>
{
  console.log("Show is now: "+show.value);
})
</script>

<style scoped>

</style>