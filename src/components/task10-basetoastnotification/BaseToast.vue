<template>
  <div class="wrapper">
    <div class="toast-popup" :class="open ? 'toast-popup-open' : 'toast-popup-closed'">
      <div class="toast-content">
        <ul>
          <li v-for="item in content" key="item" style="font-size: 12px; "> {{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, watch} from "vue";

defineProps<{
  open: boolean,
  content: string[]
}>();
</script>

<style scoped>
.wrapper
{
  display: flex;
  flex-direction: column;
  gap: 40px
}
.toast-popup
{
  display: flex;
  justify-content: left;
  background-color: white;
  color: red;

  border: 3px solid black;
  border-radius: 8px;
  width: 30%;
  height: 100px;

  position: absolute;
  top: 20px;
  right: 40px;

  transition: opacity 0.5s ease, transform 0.5s ease;
}

.toast-popup-closed
{
  opacity: 0;
  transform: translateX(100px);
  pointer-events: none;
}

.toast-popup-open
{
  opacity: 1;
  transform: translateY(0);
}
.toast-content
{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
</style>