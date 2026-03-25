<template>
  <div class="buton">
    <button @click="clicked">Click Me</button>
  </div>
  <h1>count: {{  count }}</h1>
  <h2>othercount: {{  otherCount }}</h2>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref<number>(0);
const otherCount = ref(0);
function clicked(): void {
  count.value++;
  otherCount.value++;
}
</script>

<style scoped>
.buton{
  background-color: aqua;
}
</style>