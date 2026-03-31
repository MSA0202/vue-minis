<template>
  <div class="alert-box">
    This is an alert
    <div class="buttons">
      <BCButton>Does Nothing 1</BCButton>
      <BCButton class="close-btn" @click="send">Close</BCButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BCButton from "@/components/task1-basecounter/BCButton.vue";

const emits = defineEmits<{
  (e: "showValue", value: boolean): void
}>();

function send()
{
  emits("showValue", false);
}
</script>

<style scoped>
.alert-box
{
  width: 30%;
  height: 20%;
  /*
  We need to put the alert box in the middle
  of the page underlay
  */
  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: grey;
}
.buttons
{
  display: flex;
  flex-direction: row;
  gap: 3px;
}
.close-btn
{
  background-color: red;
}
</style>