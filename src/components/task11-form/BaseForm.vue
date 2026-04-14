<template>
<div class="wrapper">
  <form @submit.prevent="handleSubmit">
    <div class="form-wrapper">
      <div class="form-group">
        <label for="name">Enter Name</label>
        <SSCInput v-model="name" id="name" placeholder="Enter Name"/>
      </div>
      <div class="form-group">
        <label for="email">Enter Email</label>
        <SSCInput v-model="email" id="email" placeholder="Enter Email" :pattern="regexPattern"/>
      </div>
      <div class="form-group">
        <label for="password">Enter Password</label>
        <SSCInput v-model="password" id="password" placeholder="Enter Password" minLength="4"/>
      </div>
    </div>
    <BCButton type="submit">Submit</BCButton>
  </form>
</div>
</template>

<script setup lang="ts">
import SSCInput from "@/components/super-sub-components/SSCInput.vue";
import BCButton from "@/components/task1-basecounter/BCButton.vue";
import {reactive, ref} from "vue";

/*

^        start of string
[...]    allowed characters
+        one or more
@        literal @
\.       literal dot
$        end of string

*/
const regexPattern = "^[A-Za-z0-9]+@[A-Za-z0-9]+\\.[A-Za-z]+$";

const name = ref("");
const email = ref("");
const password = ref("");

interface FormSubmission
{
  name: string; email: string; password: string;
}


function handleSubmit()
{
  const formS: FormSubmission = {
    name: name.value,
    email: email.value,
    password: password.value
  };

  console.log("Submitted:", formS);
}
</script>

<style scoped>
label{
  color: White;
  min-width: 120px; /*This aligns the label/input elements*/
}

.form-wrapper
{
  background-color: darkolivegreen;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
}

.form-group
{
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;

}
</style>