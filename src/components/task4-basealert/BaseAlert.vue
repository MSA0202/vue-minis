<template>
    <div class="wrapper">
      <div class="alert-box">
        <AlertBox/>
      </div>
    </div>
</template>

<script setup lang="ts">

import BCButton from "@/components/task1-basecounter/BCButton.vue";
import AlertBox from "@/components/task4-basealert/AlertBox.vue";
</script>

<style scoped>
.wrapper
{
 /*
 Underlay size
 */
  width: 100%;
  height: 100%;

  background-color: rgba(0,0,0,0.5); /* Black background with opacity */

  /*
  The core styling for the underlay to occupy the entire page
  */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /*Underlay ( + for overlay )*/
  z-index: 10;
}
</style>