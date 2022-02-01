<script setup lang="ts">
import profile from '../assets/icons/profile.jpg';
</script>
<template>
	<div class="m-2 text-3xl font-extrabold sm:text-4xl">
		Welcome to Juni Kim's Personal Website!
	</div>
	<div class="m-2 flex flex-row flex-wrap justify-between">
		<span class="max-w-2xl">
			<div class="text-xl font-extrabold sm:text-2xl">About Me</div>
			<p class="text-base sm:text-lg">
				I am a sophomore at Stanford Online High School who partakes in web
				development, contest math, and Linux ricing. Ever since my first
				programming experience preparing for the USACO, I have explored into
				other fields in an attempt to find my niche.
				<br /><br />
				I am also a nationally ranked competitive fencer as well as a hobbyist
				of boxing and basketball.
			</p>
		</span>
		<div class="flex justify-center mt-10 lg:mt-3 mx-auto">
			<img
				v-bind:src="profile"
				class="mx-auto w-36 h-36 rounded-2xl sm:w-48 sm:h-48"
			/>
		</div>
	</div>
</template>
