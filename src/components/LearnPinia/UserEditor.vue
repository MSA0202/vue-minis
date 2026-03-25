<template>
  <div class="my-component">
    <div>
      <label
        >Name: {{ userFromStore.name }}
        <input placeholder="Edit Name" v-model="localUserCopy.name" />
      </label>
    </div>

    <div>
      <label
        >Email: {{ userFromStore.email }}
        <input placeholder="Edit Email" v-model="localUserCopy.email" />
      </label>
    </div>

    <button @click="saveChanges">Update</button>
    <button @click="deleteUser">Delete User</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { defineProps } from "vue";
import { useAPiniaStore } from "@/stores/aPiniaStore";
import type { User } from "@/stores/interfaces";
import { computed } from "vue";

const useStore = useAPiniaStore();
const props = defineProps<{
  userId: number;
}>();

const userFromStore = computed(() => {
  return useStore.users.find((u) => u.id === props.userId)!;
});

const localUserCopy = ref<User>({ ...userFromStore.value });

function saveChanges() {
  useStore.updateUser({ ...localUserCopy.value });
}

function deleteUser() {
  useStore.removeUser(props.userId);
}
</script>

<style scoped>
.my-component {
  padding: 1rem;
  color: #333;
}
</style>
