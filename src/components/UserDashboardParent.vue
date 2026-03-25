<template>
  <div class="my-component"></div>

  <UserProfileCardChild
    v-for="oneUser in theOriginalObject"
    :key="oneUser.id"
    :aUser="oneUser"
    @update="parentHandleUpdate"
  />
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import UserProfileCardChild from "./UserProfileCardChild.vue";
import type { User } from "@/stores/interfaces";
import { dummyUsers } from "@/stores/storedummydata";

const theOriginalObject: User[] = reactive<User[]>([...dummyUsers]);

function parentHandleUpdate(theUser: User) {
  const index = theOriginalObject.findIndex((user) => user.id == theUser.id);
  console.log(index);
  theOriginalObject[index] = { ...theUser };
}

const message = ref("Hello from Vue!");
</script>

<style scoped>
.my-component {
  padding: 1rem;
  color: #333;
}
</style>
