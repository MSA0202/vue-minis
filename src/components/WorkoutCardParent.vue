<template>
  <div class="my-component">
    <h1>Hi</h1>
    <WorkoutCard
      v-for="set in dummyWorkoutSets"
      :key="set.id"
      :workoutSet="set"
      @update="parentHandlesUpdate"
    />
  </div>
  <div v-for="item in dws" :key="item.id">
    Updated values: Reps: {{ item.reps }} x Weight {{ item.weight }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import WorkoutCard from "./WorkoutCard.vue";
import { dummyWorkoutSets } from "@/stores/storedummydata";
import type { WorkoutSet } from "@/stores/interfaces";

const dws = ref<WorkoutSet[]>([...dummyWorkoutSets]);
console.log("dws" + dws.value);

function parentHandlesUpdate(updated: WorkoutSet) {
  console.log("updated", updated);
  const index = dws.value.findIndex((ws) => ws.id === updated.id);
  if (index !== -1) {
    dws.value[index] = { ...updated };
  }
}
</script>

<style scoped>
.my-component {
  padding: 1rem;
  color: #333;
}
</style>
