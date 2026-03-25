<template>
  <div class="my-component">
    <UserEditor
      v-for="userr in dataa.users"
      :key="userr.id"
      :userId="userr.id"
    />
  </div>
  <div v-for="u in dataa.users" :key="u.id">
    {{ u.id }} - {{ u.name }} - {{ u.email }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAPiniaStore } from "@/stores/aPiniaStore";
import UserEditor from "./UserEditor.vue";

const dataa = useAPiniaStore();
</script>

<style scoped>
.my-component {
  padding: 1rem;
  color: #333;
}
</style>
