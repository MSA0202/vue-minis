<template>
  <div>
    <SSCInput v-model="sscInput" placeholder=""/>
    <div style="background-color: mediumpurple; width: 180px">
      Will display in {{seconds}} seconds:
    </div>
    <div v-if="show" :style="showStuff">
       {{sscInput}}
    </div>
  </div>
</template>

<script setup lang="ts">

import SSCInput from "@/components/super-sub-components/SSCInput.vue";
import {computed, ref, type Ref, watch} from "vue";

const sscInput = ref("");

const seconds: Ref<number> = ref(4);

let show = ref(false);
const showStuff = computed(() =>(
{
  display: "block",
  backgroundColor: "purple",
  width: "fit-content"
}))
let countdown: number | null = null;

watch(sscInput, () =>
{
  // reset state
  show.value = false;
  seconds.value = 4;

  // clear previous interval (important)
  if (countdown) clearInterval(countdown);

  countdown = setInterval(() =>
  {
    if (seconds.value > 0)
    {
      seconds.value--;
    }
    else
    {
      show.value = true;
      clearInterval(countdown!);
    }
  }, 1000);
});
</script>

<style scoped>

</style>