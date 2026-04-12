<template>
  <div class="wrapper">
    <SSCInput v-model="userInput" placeholder="Type to keep the toast alive!" style="width: 200px"/>
    <div class="toast-popup" :class="open ? 'toast-popup-open' : 'toast-popup-closed'">
      <div class="toast-content">
        This is a toast !
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SSCInput from "@/components/super-sub-components/SSCInput.vue";
import {ref, watch} from "vue";

const open = ref(false);
const userInput = ref("");

let timeoutId: ReturnType<typeof setTimeout> | null = null;

watch(userInput, (newValue) =>
{
  // If user keeps typing, timer is reset until they aren't typing anymore
  if (newValue)
  {
    open.value = true;

    // clear previous timer
    if (timeoutId) clearTimeout(timeoutId);

    // start new timer
    timeoutId = setTimeout(() =>
    {
      open.value = false;
    }, 200);
  }
});
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
  justify-content: center;

  border: 3px solid white;
  border-radius: 8px;
  width: 50%;
  height: 100px;

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
}
</style>