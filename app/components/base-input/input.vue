<script setup>
const model = defineModel();
</script>

<template>
  <input type="text" v-model="model" v-bind="$attrs" class="base-input" />
</template>

<style scoped>
@reference '#index.css';

.base-input {
  @apply focus:border-primary w-full rounded-lg border border-gray-400 p-2 text-base outline-none;
}
</style>
