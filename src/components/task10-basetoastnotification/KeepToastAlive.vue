<template>
  <div class="wrapper">
    <SSCInput v-model="userInput" placeholder="Type to keep the toast alive!" style="width: 200px"/>
    <BaseToast :open="open"/>
  </div>
</template>

<script setup lang="ts">
import SSCInput from "@/components/super-sub-components/SSCInput.vue";
import {ref, watch} from "vue";
import BaseToast from "@/components/task10-basetoastnotification/BaseToast.vue";

const open = ref(false);
const userInput = ref("");

let timeoutId: ReturnType<typeof setTimeout> | null = null;

watch(userInput, (newValue) =>
{
  // If user keeps typing, timer is reset until they aren't typing anymore
  if (newValue)
  {
    open.value = true;

    // clear previous timer
    if (timeoutId) clearTimeout(timeoutId);

    // start new timer
    timeoutId = setTimeout(() =>
    {
      open.value = false;
    }, 200);
  }
});
</script>

<style scoped>

</style>