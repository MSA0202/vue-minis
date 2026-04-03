<template>
  <div class="wrapper" :style="wrapperStyle">
    <label>Select a colour</label>
    <select class="b-select" v-model="selected">
      <option class="b-option" v-for="c in colours"> {{c.name}} </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import {computed, type Reactive, ref} from "vue";

const colours: Reactive<Colours[]> =
[
  {name: "Red", colour: "#ff0000"},
  {name: "Green", colour: "#00ff00"},
  {name: "Blue", colour: "#0000ff"}
];

interface Colours
{
  name: string,
  colour: string
}

const selected = ref(colours[0].name);

/*
:style = JavaScript object → use camelCase
<style> = real CSS → use kebab-case
* */
const wrapperStyle = computed(() => ({
  backgroundColor: selected.value,
  color: "yellow"
}))
</script>

<style scoped>
.wrapper
{
  display: flex;
  gap: 1rem;
}
</style>