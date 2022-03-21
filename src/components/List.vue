<script setup lang="ts">
defineProps<{ title: String }>();
</script>

<template>
  <div class="my-6">
    <div class="mx-2 my-1 text-2xl font-bold">{{ $props.title }}</div>
    <ol class="mx-2 my-1 text-lg list-disc">
      <slot></slot>
    </ol>
  </div>
</template>
