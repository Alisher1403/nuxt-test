<script setup lang="ts">
import type { JsonPlaceholder } from "~/types/api/jsonplaceholder";

const emit = defineEmits(["delete"]);
defineProps<{
  item: JsonPlaceholder.Todos;
}>();
</script>

<template>
  <div class="mb-3 flex items-center justify-between rounded-xl border border-gray-400">
    <article class="prose prose-blockquote:text-gray-500 p-2">
      <blockquote class="p-2">"{{ item.title }}"</blockquote>
    </article>
    <button @click="emit('delete')" class="p-4">🗑️</button>
  </div>
</template>
