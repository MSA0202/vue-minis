<template>
  <div class="wrapper">
    <BCButton style=" padding: 1rem;" @click="showAlert">Click Me For Alert</BCButton>
    <BaseAlert v-if="show"/>
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

watch(show, (newVal, oldVal) =>
{
  console.log("Show is now: "+show.value);
})
</script>

<style scoped>

</style>