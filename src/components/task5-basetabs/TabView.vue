<template>
<div class="tab-view-wrapper">
  <div class="input-wrapper">
    <SSCInput v-model="tabNames" size="30" placeholder="Enter Tab Names, e.g, Tab1, Tab2"/>
  </div>
  <div>
    Number of Tabs Counted: {{tabArray.length}}
  </div>
  <div class="tabs-wrapper">
    <BaseTab v-for="tabName in tabArray" :key="tabName">
      {{ tabName }}
    </BaseTab>
  </div>
</div>
</template>

<script setup lang="ts">
import BaseTab from "@/components/task5-basetabs/BaseTab.vue";
import SSCInput from "@/components/super-sub-components/SSCInput.vue";
import {computed, type ComputedRef, ref, type Ref} from "vue";

const tabNames: Ref<string> = ref("");
const tabArray = computed(() => {
  return tabNames.value
      .split(",")
      .map(t => t.trim())
      .filter(t => t.length > 0);
});

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