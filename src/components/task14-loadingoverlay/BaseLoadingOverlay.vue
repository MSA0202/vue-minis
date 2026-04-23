<template>
  <div class="overlay">
    <div class="loader">
      <div class="spinner"></div>
      <p class="text">Loading . . . </p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.overlay
{
  position: absolute;
  inset: 0;
  background: rgba(10, 10, 10, 0.6);
  backdrop-filter: blur(4px);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;
}

.loader
{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

/* Spinner */
.spinner
{
  /*Makes a circle*/
  width: 48px;
  height: 48px;
  border-radius: 50%;

  border: 4px solid rgba(255, 0, 0, 0.2);
  border-top: 4px solid white;
  animation: spin 0.8s linear infinite;
}

/* Text */
.text
{
  color: white;
  font-size: 14px;
  opacity: 0.8;
}

/* Animation */
@keyframes spin
{
  to
  {
    transform: rotate(360deg);
  }
}
</style>