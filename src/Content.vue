<script setup lang="ts">
import gitlab from './assets/icons/contact/gitlab.svg';
import github from './assets/icons/contact/github.svg';
import instagram from './assets/icons/contact/instagram.svg';
import linkedin from './assets/icons/contact/linkedin.svg';
import email from './assets/icons/contact/email.svg';
import links from './links';

const icons = [
	{
		name: 'github',
		src: github,
		link: 'https://github.com/junikimm717',
		el: '<i class="fab fa-github"></i>',
	},
	{
		name: 'instagram',
		src: instagram,
		link: 'https://www.instagram.com/junichristopherkim/',
		el: '<i class="fab fa-instagram"></i>',
	},
	{
		name: 'linkedin',
		src: linkedin,
		link: 'https://www.linkedin.com/in/juni-kim-28276b225/',
		el: '<i class="fab fa-linkedin-in"></i>',
	},
	{
		name: 'email',
		src: email,
		link: 'mailto:junikimm717@gmail.com',
		el: '<i class="far fa-envelope"></i>',
	},
	{
		name: 'gitlab',
		src: gitlab,
		link: 'https://gitlab.com/junikimm717',
		el: '<i class="fab fa-gitlab"></i>',
	},
];

const year = new Date().getFullYear();

const dbg = () => {
	console.log('works!');
};
</script>

<template>
	<div>
		<Particles
			id="tsparticles"
			:particlesInit="dbg()"
			:options="{
				background: {
					color: {
						value: '#ffffff',
					},
				},
				fpsLimit: 60,
				particles: {
					color: {
						value: '#d1d5db',
					},
					links: {
						color: '#d1d5db',
						distance: 150,
						enable: true,
						opacity: 0.5,
						width: 1,
					},
					collisions: {
						enable: true,
					},
					move: {
						direction: 'none',
						enable: true,
						outMode: 'bounce',
						random: false,
						speed: 3,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 80,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: 'square',
					},
					size: {
						random: true,
						value: 2,
					},
				},
				detectRetina: true,
				backgroundMode: {
					enable: true,
					zIndex: -10,
				},
			}"
		/>
		<router-view></router-view>
	</div>
	<footer class="text-base text-center mt-16 py-2 rounded-sm">
		<div class="flex flex-row justify-center items-center">
			<div class="m-2 py-2 px-3 rounded-lg flex flex-row flex-wrap gap-3">
				<router-link
					v-for="link in links"
					v-bind:to="link.to"
					class="text-black dark:text-white"
					>{{ link.desc }}</router-link
				>
			</div>
		</div>
		<div class="flex flex-row justify-center items-center">
			<div class="m-2 p-1 rounded-lg">
				<div class="flex flex-row flex-wrap justify-center gap-3">
					<a
						v-for="icon in icons"
						v-bind:href="icon.link"
						v-html="icon.el"
						class="text-3xl"
					>
					</a>
				</div>
			</div>
		</div>
		<div class="text-center text-sm text-gray-800 dark:text-gray-200">
			© 2021-{{ year }} Juni C. Kim <br />
			Icons made by
			<a href="https://fontawesome.com/license" title="Font Awesome">
				Font Awesome
			</a>
		</div>
	</footer>
</template>
