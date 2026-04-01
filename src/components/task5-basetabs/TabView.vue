<template>
<div class="tab-view-wrapper">
  <div class="input-wrapper">
    <SSCInput size="30" placeholder="Enter Number Of Tabs"/>
    <SSCInput size="30" placeholder="Enter Tab Names, e.g, Tab1, Tab2"/>
  </div>
  <div class="tabs-wrapper">
    <BaseTab v-for="x in 3">
      test
    </BaseTab>
  </div>
</div>
</template>

<script setup lang="ts">

import BaseTab from "@/components/task5-basetabs/BaseTab.vue";
import SSCInput from "@/components/super-sub-components/SSCInput.vue";
</script>

<style scoped>
.tab-view-wrapper
{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.input-wrapper
{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}
.tabs-wrapper
{
  display: flex;
  flex-direction: row;
}
</style>