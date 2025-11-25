<script setup lang="ts">
import type { JsonPlaceholder } from "~/types/api/jsonplaceholder";

defineProps<{
  item: JsonPlaceholder.Todos;
}>();
</script>

<template>
  <div class="mb-3 rounded-xl border border-gray-400">
    <article class="prose prose-blockquote:text-gray-500 p-2">
      <blockquote class="p-2">"{{ item.title }}"</blockquote>
    </article>
  </div>
</template>
