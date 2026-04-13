<script setup lang="ts">
import Button from "./components/Button.vue";
import WorkoutCard from "./components/WorkoutCard.vue";
import WorkoutCardParent from "./components/WorkoutCardParent.vue";
import BookShelfParent from "./components/BookShelfParent.vue";
import UserDashboardParent from "./components/UserDashboardParent.vue";
import PUserDashboardParent from "./components/LearnPinia/PUserDashboardParent.vue";
import UserList from "./components/LearnPinia/UserList.vue";
import BaseCounter from "@/components/task1-basecounter/BaseCounter.vue"
import BaseToggle from "@/components/task2-basetoggle/BaseToggle.vue";
import BaseTextarea from "@/components/task3-basetextarea/BaseTextarea.vue";
import BaseAlert from "@/components/task4-basealert/BaseAlert.vue";
import AlertView from "@/components/task4-basealert/view/AlertView.vue";
import AlertBox from "@/components/task4-basealert/AlertBox.vue";
import BaseTab from "@/components/task5-basetabs/BaseTab.vue";
import TabView from "@/components/task5-basetabs/TabView.vue";
import BaseSelect from "@/components/task6-baseselectoption/BaseSelect.vue";
import DelayedInputDisplayView from "@/components/task7-delayedinputdisplay/DelayedInputDisplayView.vue";
import BaseAccordion from "@/components/task8-accordion/BaseAccordion.vue";
import BaseProgressBar from "@/components/task9-progressbar/BaseProgressBar.vue";
import BaseToast from "@/components/task10-basetoastnotification/BaseToast.vue";
import KeepToastAlive from "@/components/task10-basetoastnotification/KeepToastAlive.vue";
import BaseForm from "@/components/task11-form/BaseForm.vue";
</script>

<template>
  <div class="all-views">
<!--     <Button />-->
<!--     <WorkoutCardParent />-->
<!--     <BookShelfParent />-->
<!--     <UserDashboardParent />-->
<!--     <PUserDashboardParent />-->
<!--        <UserList />-->
<!--    <BaseCounter/>-->
<!--    <BaseToggle/>-->
<!--    <BaseTextarea/>-->
<!--    <AlertView/>-->
<!--    <TabView/>-->
<!--    <BaseSelect/>-->
<!--    <DelayedInputDisplayView/>-->
<!--    <BaseAccordion/>-->
<!--    <BaseProgressBar/>-->
<!--    <KeepToastAlive/>-->
    <BaseForm/>
  </div>
</template>

<style scoped>
.all-views > * {
  border: 10px solid rgba(244,70,255,0.96);
  padding: 8px;
  margin-bottom: 10px;
}
</style>
