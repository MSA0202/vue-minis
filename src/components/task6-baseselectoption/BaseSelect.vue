<template>
  <div class="wrapper" :style="wrapperStyle">
    <label>Select a colour</label>
    <select class="b-select" v-model="selected">
      <option class="b-option" v-for="c in colours"> {{c.name}} </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import {computed, type Reactive, ref, watch} from "vue";

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

/* Make colour selected available to Parent Components */
// Define an emit for emitting to parent
const emit = defineEmits<{
  (e:"selectedValue", value: string) :void
}>();

// Watch for select list changes and emit the changed value
watch(selected, (newValue) => emit("selectedValue", newValue))
</script>

<style scoped>
.wrapper
{
  display: flex;
  gap: 1rem;
}
</style>