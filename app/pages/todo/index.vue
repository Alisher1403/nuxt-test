<script setup lang="ts">
import type { JsonPlaceholder } from "~/types/api/jsonplaceholder";

const { data } = await useFetch<JsonPlaceholder.Todos[]>("https://jsonplaceholder.typicode.com/todos", { deep: true });

const input = ref("");
</script>

<template>
  <section class="container flex flex-col">
    <base-input v-model="input" class="my-8 max-w-[500px] self-center" />
    <todo-item v-for="item in data" :item="item" />
  </section>
</template>
