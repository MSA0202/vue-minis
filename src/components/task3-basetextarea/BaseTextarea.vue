<template>
<div class="wrapper">
  <div class="wrapper-text-area">
    <small>
      Characters Remaining <span :class="statusClass">{{ textareaRemainingChars }} </span>
    </small>
    <textarea v-model="textarea" name="basetextarea" class="base-textarea" rows="5"
              cols="50" :maxlength="textareaMaxLength" placeholder="Enter Your Text Here">
    </textarea>
  </div>
</div>
</template>

<script setup lang="ts">
import {computed, type Ref, ref} from "vue";

const textarea: Ref<string> = ref("");
const textareaMaxLength: Ref<number> = ref(150);

const textareaCurrentLength = computed(() => textarea.value.length);

const textareaRemainingChars = computed(() => {
  return textareaMaxLength.value - textareaCurrentLength.value;
});

const statusClass = computed(() => {
  const remaining = textareaRemainingChars.value;

  // See style class defs below
  if (remaining < 50) return "danger";
  if (remaining < 100) return "nearing";
  return "ok";
});

</script>

<style scoped>
.wrapper-text-area
{
  display: flex;
  flex-direction: column;
}

.base-textarea
{
  border: 6px solid mediumpurple;
}

.danger {
  color: red;
}
.nearing {
  color: yellow;
}
.ok {
  color: green;
}

</style>