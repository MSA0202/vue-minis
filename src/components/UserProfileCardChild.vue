<template>
  <div class="my-component">
    <div class="n">
      <h1>Name {{ aUser.name }}</h1>
      <input placeholder="Update Name Here" v-model="localaUserCopy.name" />
    </div>

    <div class="e">
      <h1>Email {{ aUser.email }}</h1>
      <input placeholder="Update Name Here" v-model="localaUserCopy.email" />
    </div>
    <button @click="passUpdateData">Update</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { User } from "@/stores/interfaces";

const props = defineProps<{
  aUser: User;
}>();

// Dont mutate prop directly
const localaUserCopy = ref({ ...props.aUser });

const emitss = defineEmits<{
  (e: "update", updatedData: User): void;
}>();

function passUpdateData() {
  emitss("update", { ...localaUserCopy.value });
}

const message = ref("Hello from Vue!");
</script>

<style scoped>
.my-component {
  padding: 1rem;
  color: #333;
}
</style>
