<template>
<div class="wrapper">
  <BaseToast :content="errors" :open="toastOpen" />
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
        <SSCInput v-model="password" id="password" placeholder="Enter Password"/>
      </div>
    </div>
    <BCButton type="submit">Submit</BCButton>
  </form>
</div>
</template>

<script setup lang="ts">
import SSCInput from "@/components/super-sub-components/SSCInput.vue";
import BCButton from "@/components/task1-basecounter/BCButton.vue";
import {reactive, ref, watch} from "vue";
import BaseToast from "@/components/task10-basetoastnotification/BaseToast.vue";

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
  validate();
  if (errors.value.length > 0) return;

  const formS: FormSubmission = {
    name: name.value,
    email: email.value,
    password: password.value
  };
  console.log("Submitted:", formS);
}

const errors = ref<string[]>([]);
const toastOpen = ref(false);
// Name,Email, Password must not be left blank
// Password must at least be 8 chars long
function validate()
{
  errors.value = []; // reset fir
  if(name.value == "" || email.value == "" || password.value == "")
  {
    errors.value.push("Fields cannot be left blank!");
  }
  if (password.value.length < 8)
  {
    errors.value.push("Password length must be greater than 8!");
  }
}

watch(errors, (newv) =>
{
  if (newv.length > 0) {
    toastOpen.value = true;
    // Close toast after 2 seconds
    setTimeout(() => {
      toastOpen.value = false;
    }, 3000);
  }
})
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