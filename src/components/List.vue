<script setup lang="ts">
defineProps<{ title: String }>();
</script>

<template>
	<div class="my-6">
		<div class="my-1 mx-2 text-2xl font-bold">{{ $props.title }}</div>
		<ol class="my-1 mx-2 text-lg list-disc">
			<slot></slot>
		</ol>
	</div>
</template>
