<script setup lang="ts">
import type { JsonPlaceholder } from "~/types/api/jsonplaceholder";

definePageMeta({
  layout: "auth",
});

const { data } = await useFetch<JsonPlaceholder.Todos[]>("https://jsonplaceholder.typicode.com/todos", { deep: true });

const input = ref("");
</script>

<template>
  <section class="container flex flex-col">
    <base-input v-model="input" class="my-8 max-w-[500px] self-center" />
    <transition-group name="list">
      <todo-item v-for="(item, index) in data" :key="item.id" :item="item" @delete="data?.splice(index, 1)" />
    </transition-group>
  </section>
</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
