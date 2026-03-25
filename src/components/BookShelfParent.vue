<template>
  <div>
    <BookCardChild
      v-for="bookCard in dummyData"
      :key="bookCard.id"
      @updateButtonClicked="parentBookHandleUpdate"
      class="book-card"
      :data="bookCard"
    />
  </div>
  <div class="original-object-data" v-for="item in dummyData" :key="item.id">
    The Book {{ item.title }} was authored by {{ item.author }}
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { Book } from "@/stores/interfaces";
import { dummyBooks } from "@/stores/storedummydata";
import BookCardChild from "./BookCardChild.vue";

const message = ref("Hello from Vue!");
const dummyData = reactive<Book[]>([...dummyBooks]);

function parentBookHandleUpdate(theUpdatedData: Book) {
  const index = dummyData.findIndex((book) => book.id === theUpdatedData.id);
  dummyData[index] = { ...theUpdatedData };
  //   dummyData[index] = theUpdatedData ;
  // This assigns reference and not the actual data
}
</script>

<style scoped>
.my-component {
  padding: 1rem;
  color: #333;
}
</style>
