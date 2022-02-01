<script setup lang="ts">
import left from '../assets/icons/arrows/left.svg';
import Darkmode from './Darkmode.vue';
import { ref } from 'vue';
import links from '../links';

const open = ref(localStorage.getItem('navbar_open') !== 'false');
const close = () => {
	open.value = !open.value;
	localStorage.setItem('navbar_open', open.value ? 'true' : 'false');
};

function is_touch_enabled() {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}
</script>

<template>
	<div class="h-screen flex flex-row items-top sticky top-0">
		<div
			v-bind:class="
				'flex flex-col justify-center h-full left-0 bg-c_darkblue navbar transition-all ease-linear duration-200 origin-left' +
				' ' +
				(open ? 'scale-x-100 w-14 short:w-12' : 'scale-x-0 w-0')
			"
		>
			<div v-for="link in links" class="group">
				<router-link
					v-bind:to="link.to"
					v-bind:class="
						'button bg-c_beige' + ' ' + (open ? 'scale-100' : 'scale-0')
					"
				>
					<img v-bind:alt="link.desc" v-bind:src="link.src" class="w-8 h-8" />
				</router-link>
				<span
					v-if="!is_touch_enabled()"
					class="absolute dark:bg-slate-100 dark:text-black bg-c_darkblue text-slate-100 font-bold p-1 w-auto scale-0 origin-left left-16 -translate-y-11 group-hover:scale-100 transition-all ease-linear duration-100 rounded-lg"
				>
					{{ link.desc }}
				</span>
			</div>
			<div class="group">
				<Darkmode
					v-bind:class="'button' + ' ' + (open ? 'scale-100' : 'scale-0')"
				/>
				<span
					v-if="!is_touch_enabled()"
					class="absolute dark:bg-slate-100 dark:text-black bg-c_darkblue text-slate-100 font-bold p-1 w-auto scale-0 origin-left left-16 -translate-y-11 group-hover:scale-100 transition-all ease-linear duration-100 rounded-lg"
				>
					Mode
				</span>
			</div>
		</div>
		<button
			class="w-8 h-16 p-1 mt-10 rounded-r-lg bg-c_darkblue transition-all ease-linear"
			@click="close()"
		>
			<img
				alt="Navbar Arrow (color changed from black to white)"
				v-bind:src="left"
				v-bind:class="
					(open ? '' : 'rotate-180') +
					' ' +
					'transition-all ease-linear duration-200'
				"
			/>
		</button>
	</div>
</template>

<style scoped>
.button {
	@apply transition-all ease-linear duration-300 
    rounded-lg hover:rounded-sm
    m-1 p-1 w-11 h-11  short:w-10 short:h-10
    items-center flex justify-center;
}
</style>
