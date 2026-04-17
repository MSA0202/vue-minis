

<template>
  <div class="ldt-wrapper">
    <BCButton class="light-theme">Click To Switch Theme</BCButton>
    <BaseProgressBar class="light-theme"/>
    <BaseTextarea class="light-theme"/>
  </div>
</template>

<script setup lang="ts">

import BCButton from "@/components/task1-basecounter/BCButton.vue";
import BaseProgressBar from "@/components/task9-progressbar/BaseProgressBar.vue";
import "@/styles.css"
import BaseTextarea from "@/components/task3-basetextarea/BaseTextarea.vue";
</script>

<style scoped>
.light-theme
{
  background-color: var(--light);
  color: var(--dark);
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
}

dark-theme:hover
{
  background-color: var(--light);
  color: var(--dark);
}
</style>