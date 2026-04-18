<template>
  <div class="ldt-wrapper">
    <BCButton @click="changeTheme" :class="currentTheme">Click To Switch Theme</BCButton>
    <BaseProgressBar :class="currentTheme"/>
    <BaseTextarea :class="currentTheme"/>
  </div>
</template>

<script setup lang="ts">
import BCButton from "@/components/task1-basecounter/BCButton.vue";
import BaseProgressBar from "@/components/task9-progressbar/BaseProgressBar.vue";
import "@/styles.css"
import BaseTextarea from "@/components/task3-basetextarea/BaseTextarea.vue";
import {ref} from "vue";

const isWhite = ref(true);
const currentTheme = ref("light-theme");
function changeTheme()
{
  if (isWhite.value)
  {
    currentTheme.value = "dark-theme";
    isWhite.value = false;
  }
  else
  {
    currentTheme.value = "light-theme";
    isWhite.value = true;
  }
}
</script>

<style scoped>
.light-theme
{
  background-color: var(--light);
  color: var(--dark);
  transition: 1s ease;
}

.light-theme:hover
{
  background-color: var(--dark);
  color: var(--light);
}

.dark-theme
{
  background-color: var(--dark);
  color: var(--light);
  transition: 1s ease;
}

.dark-theme:hover
{
  background-color: var(--light);
  color: var(--dark);
}
</style>