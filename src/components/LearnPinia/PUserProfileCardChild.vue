<template>
  <div class="my-component">
    <div class="n">
      <h1>Name {{ targetUser.name }}</h1>
      <input placeholder="Update Name Here" v-model="localaUserCopy.name" />
    </div>

    <div class="e">
      <h1>Email {{ targetUser.email }}</h1>
      <input placeholder="Update Email Here" v-model="localaUserCopy.email" />
    </div>
    <button @click="saveTheChanges">Save Changes</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import type { User } from "@/stores/interfaces";
import { useAPiniaStore } from "@/stores/aPiniaStore";

const userStore = useAPiniaStore();
const props = defineProps<{
  userId: number;
}>();

const targetUser = userStore.users.find((u) => u.id === props.userId);
if (!targetUser) throw new Error(`User with id ${props.userId} not found.`);
const localaUserCopy = ref<User>({ ...targetUser });

// watch(
//   () => props.userId,
//   (newId) => {
//     localaUserCopy.value = { ...userStore.users.find((u) => u.id === newId)! };
//   }
// );

function saveTheChanges() {
  userStore.updateUser({ ...localaUserCopy.value });
}
/*
Prior to using pinia
// const props = defineProps<{
//   aUser: User;
// }>();

// Dont mutate prop directly
// const localaUserCopy = ref({ ...props.aUser });

// const emitss = defineEmits<{
//   (e: "update", updatedData: User): void;
// }>();

// function passUpdateData() {
//   emitss("update", { ...localaUserCopy.value });
// }
// 
*/
</script>

<style scoped>
.my-component {
  padding: 1rem;
  color: #333;
}
</style>
