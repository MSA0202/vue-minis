<template>
<div>
  <div class="heart">
    💗
  </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.heart
{
  font-size: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  /* Infinite + alternate = constant heart beat*/
  animation: pulse 0.5s ease-in-out infinite alternate;
}

@keyframes pulse
{
  to
  {
    transform: scale(1.4);
  }
}
</style>