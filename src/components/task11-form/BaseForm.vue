<template>
<div class="wrapper">
  <form>
    <div class="form-wrapper">
      <div class="form-group">
        <label>Enter Name</label>
        <SSCInput placeholder="Enter Name"/>
      </div>
      <div class="form-group">
        <label>Enter Email</label>
        <SSCInput placeholder="Enter Email"/>
      </div>
      <div class="form-group">
        <label>Enter Password</label>
        <SSCInput placeholder="Enter Password"/>
      </div>
    </div>
  </form>
</div>
</template>

<script setup lang="ts">

import SSCInput from "@/components/super-sub-components/SSCInput.vue";
</script>

<style scoped>
label{
  color: White;
}

.form-wrapper
{
  display: grid;
  align-items: center;
}

.form-group
{
  display: flex;
  flex-direction: row;
  gap: 1rem;

}
</style>