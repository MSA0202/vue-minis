<template>
  <div class="sets">
    <label>
      Reps
      <input v-model="localSet.reps" placeholder="enter num reps" />
    </label>
    <label>x</label>
    <label>
      Weight
      <input v-model="localSet.weight" placeholder="enter weight in kg" />
    </label>
    <button @click="updateWorkout">Update</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import type { WorkoutSet } from "@/stores/interfaces";

// Props
const props = defineProps<{
  workoutSet: WorkoutSet;
}>();

// Local copy of set to avoid mutating prop directly
const localSet = ref({ ...props.workoutSet });

// Keep prop and local copy in sync (if needed later)
// Parent sends:    { id: 1, reps: 10, weight: 25 }
// Child localSet:  { id: 1, reps: 10, weight: 25 }

// User edits localSet → localSet is now:
//                   { id: 1, reps: 12, weight: 30 }

// Parent sends a **new** object:
//                 { id: 2, reps: 8, weight: 20 }

// watch() detects the change → localSet updated:
//                 { id: 2, reps: 8, weight: 20 }
watch(
  () => props.workoutSet,
  (newVal) => {
    localSet.value = { ...newVal };
  }
);

// Emit
const emit = defineEmits<{
  (e: "update", updatedWorkout: WorkoutSet): void;
}>();

function updateWorkout() {
  emit("update", { ...localSet.value });
}
</script>

<style scoped>
.sets {
  display: flex;
  align-items: center;
  gap: 1vw;
  padding: 4px;
}
</style>
