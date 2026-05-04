<template>
<div>
  <div class="scroll-container">
    <div class="scroll-track">
      <div v-for="(image, index) in images.image" :key="'first-' + index" class="images">
        {{ image }}
      </div>

      <div v-for="(image, index) in images.image" :key="'second-' + index" class="images">
        {{ image }}
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
const images =
    {
      "image": ["𝐕", "💪", "♨️", "🧩", "⚛️"]
    }
</script>

<style scoped>
.scroll-container
{
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 50%;
}
.scroll-track
{
  display: flex;
  width: max-content;
  animation: infinite-scroll 3s linear infinite;
}

.images
{
  border: solid 1px black;
  background-color: rgb(255,255,255,0.01);
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
}

@keyframes infinite-scroll
{
  from
  {
    transform: translateX(0);
  }
  to
  {
    transform: translateX(50%);
  }
}
</style>