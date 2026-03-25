<template>
  <div class="my-component">
    <label>
      Book Title:
      <input
        placeholder="Alter Book Title Here..."
        v-model="localCopyOfData.title"
      />
    </label>
    <button @click="update">Update Title</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import type { Book } from "@/stores/interfaces";

const message = ref("Hello from Vue!");

const props = defineProps<{
  data: Book;
}>();

const localCopyOfData = ref({ ...props.data });

const defEmit = defineEmits<{
  (e: "updateButtonClicked", theUpdatedDataBookObject: Book): void;
}>();

// We emit this { ...localCopyOfData.value } instead of localCopyOfData.value as it is safer to pass the local copy to the parent
// and not the actual because it is passing the reference !
function update() {
  defEmit("updateButtonClicked", { ...localCopyOfData.value });
}
</script>

<style scoped>
.my-component {
  padding: 1rem;
  color: #333;
}
</style>

<!-- 
Note: 
WE NEVER UPDATE PROPS DIRECTLY
ALWAYS PASS LOCAL DATA COPY TO PARENT ( via emit ) SO THAT PARENT CAN UPDATE THE DATA

HENCE BELOW IS WRONG
<template>
  <div class="my-component">
    <label>
      Book name: {{ data.title }} written by {{ data.author }}
      <input
        placeholder="Alter Book Title Here..."
        v-model="props.data.title"
      />
    </label>
    <button @click="update">Update Title</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Book } from "@/stores/interfaces";

const message = ref("Hello from Vue!");

const props = defineProps<{
  data: Book;
}>();


EMIT WOULD NOT EVEN BE NEEDED BECAUSE WE MUTATE PROP DIRECTLY, ie, NOT PASSING ANYTHING TO PARENT FOR UPDATING ACTUAL OBJECT
const defEmit = defineEmits<{
  (e: "updateButtonClicked", theUpdatedDataBookObject: Book): void;
}>();

function update() {
  defEmit("updateButtonClicked", props.data);
}
</script>



-->
