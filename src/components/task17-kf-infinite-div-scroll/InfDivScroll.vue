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
      "image": ["𝐕", "💪", "♨️", "🧩", "⚛️"],
    }
</script>

<style scoped>
.scroll-container
{
  overflow: hidden;
  display: flex;
  flex-direction: row;
  width: 80%;
  /*
  Do not use these, they break the animation and create a gap just before it resets
  justify-content: center;
  align-items: center;
  */
}
.scroll-track
{
  display: flex;
  width: max-content;
  animation:  infinite-scroll-rl 6s linear infinite;
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

@keyframes infinite-scroll-rl
{
  from {
    /* Start halfway through the track */
    transform: translateX(-50%);
  }
  to {
    /* Move back to the very beginning */
    transform: translateX(0);
  }
}

@keyframes infinite-scroll-lr
{
  from
  {
    transform: translateX(0);
  }
  to
  {
    transform: translateX(-50%);
  }
}
</style>