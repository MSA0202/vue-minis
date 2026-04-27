

<template>
  <div class="bouncing-ball-box">
    <div class="ball">
      ⚽
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.bouncing-ball-box
{
  height: 265px;
  display: flex;
  align-items: flex-start;
}

.ball
{
  display: inline-block;
  font-size: 2rem;
  animation: bounce 3.2s infinite;
}

/* Vertical movement */
@keyframes bounce
{
  0% {
    transform: translateY(0) scale(1,1);
    animation-timing-function: ease-in;
  }

  40% {
    transform: translateY(200px) scale(0.7, 1.1); /* squash while falling */
    animation-timing-function: ease-out;
  }

  60% {
    transform: translateY(120px) scale(1.2, 0.95); /* stretch after hitting ground and going back up */
    animation-timing-function: ease-in;
  }

  80% {
    transform: translateY(200px) scale(0.9, 1.1); /* smaller squash for falling again from lower height */
    animation-timing-function: ease-out;
  }

  100% {
    transform: translateY(0) scale(0.6, 1.1); /* stretch going (flying) back up */
  }
}
</style>