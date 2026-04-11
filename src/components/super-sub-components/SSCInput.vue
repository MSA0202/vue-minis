<template>
  <input v-bind="$attrs" v-model="model" class="ssc-input" type="text"/>
</template>

<script setup lang="ts">
const model = defineModel();
</script>

<style scoped>
.ssc-input
{
  background-color: azure;
  padding: 0.5rem;
  border: 1px solid white;
}
</style>