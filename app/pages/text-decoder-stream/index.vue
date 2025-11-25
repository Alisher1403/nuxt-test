<script setup lang="ts">
const content = ref("");

async function getData() {
  const response = await $fetch<ReadableStream>("/api/text-decoder-stream", { responseType: "stream" });
  const reader = response.pipeThrough(new TextDecoderStream()).getReader();

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    content.value += value;
  }
}

onMounted(() => {
  getData();
});
</script>

<template>
  <p>{{ content }}</p>
</template>
