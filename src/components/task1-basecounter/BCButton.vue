<template>
<button>
  <slot></slot>
</button>
</template>

<script setup lang="ts">
/*defineOptions({
  inheritAttrs: true
})*/
</script>

<style scoped>
button
{
  background-color: mediumpurple;
  color: white;
  width: fit-content;
}
button:hover
{
  background-color: #333333;
  transition: 0.4s ease;
}
</style>