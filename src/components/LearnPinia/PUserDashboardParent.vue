<template>
  <div class="my-component"></div>

  <PUserProfileCardChild
    v-for="oneUser in userStore.users"
    :key="oneUser.id"
    :userId="oneUser.id"
  />

  <h2>Live Data from Store:</h2>
  <div v-for="u in userStore.users" :key="u.id">
    {{ u.id }} - {{ u.name }} - {{ u.email }}
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import PUserProfileCardChild from "./PUserProfileCardChild.vue";
import type { User } from "@/stores/interfaces";
import { dummyUsers } from "@/stores/storedummydata";
import { useAPiniaStore } from "@/stores/aPiniaStore";

const userStore = useAPiniaStore();

// Prior to using a store we did this
// const theOriginalObject: User[] = reactive<User[]>([...dummyUsers]);

// function parentHandleUpdate(theUser: User) {
//   const index = theOriginalObject.findIndex((user) => user.id == theUser.id);
//   console.log(index);
//   theOriginalObject[index] = { ...theUser };
// }
</script>

<style scoped>
.my-component {
  padding: 1rem;
  color: #333;
}
</style>
