<template>
  <div class="wrapper">
    <SSCInput placeholder="Type to keep the toast alive!" style="width: 200px"/>
    <div :class="open ? 'toast-popup-open' : 'toast-popup-closed'">
      <div class="toast-content">
        This is a toast !
      </div>
    </div>
    <BCButton @click="temporaryTest">Temporary</BCButton>
  </div>
</template>

<script setup lang="ts">
import SSCInput from "@/components/super-sub-components/SSCInput.vue";
import {ref} from "vue";
import BCButton from "@/components/task1-basecounter/BCButton.vue";

const open = ref(true);
const appearanceFadeOutTimer = ref(2);

function temporaryTest()
{
  open.value = !open.value
}
</script>

<style scoped>
.wrapper
{
  display: flex;
  flex-direction: column;
  gap: 40px
}
.toast-popup-closed
{
  display: flex;
  justify-content: center;

  max-height: 0;
  opacity: 0;
  /*todo complete*/
  transition-duration: 1s; /* closing speed */
}
.toast-popup-open
{
  display: flex;
  justify-content: center;

  border: 3px solid white;
  border-radius: 8px;
  width: 50%;
  height: 100px;

  transition-duration: 0.5s; /* opening speed */
  opacity: 1;
}
.toast-content
{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>