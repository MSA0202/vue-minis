<template>
  <div class="wrapper">
    <div class="single-tab">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.wrapper{}

.single-tab
{
  background-color: darkolivegreen;
  color: black;
  border: solid 2px white;
  padding: 2rem;
}

.single-tab:hover
{
  cursor: pointer;
  background-color: rgba(164,255,29,0.96);
  color: white;
}
</style>