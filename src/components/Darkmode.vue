<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ class: String }>();

const darkmode = ref(localStorage.getItem('darkmode') === 'true');
if (darkmode.value) {
	document.body.classList.add('dark');
}
const flip = () => {
	darkmode.value = !darkmode.value;
	if (darkmode.value) {
		localStorage.setItem('darkmode', 'true');
		document.body.classList.add('dark');
	} else {
		localStorage.setItem('darkmode', 'false');
		document.body.classList.remove('dark');
	}
};
</script>

<template>
	<button
		v-bind:class="$props.class + ' ' + 'sm:text-4xl text-3xl text-white'"
		@click="flip()"
	>
		<i class="far fa-sun" v-if="!darkmode"></i>
		<i class="far fa-moon" v-else></i>
	</button>
</template>
