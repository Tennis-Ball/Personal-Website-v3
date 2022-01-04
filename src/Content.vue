<script setup lang="ts">
import gitlab from "./assets/contact/gitlab.svg";
import github from "./assets/contact/github.svg";
import instagram from "./assets/contact/instagram.svg";
import linkedin from "./assets/contact/linkedin.svg";
import email from "./assets/contact/email.svg";

const icons = [
  { name: "github", src: github, link: "https://github.com/junikimm717" },
  {
    name: "instagram",
    src: instagram,
    link: "https://www.instagram.com/junichristopherkim/",
  },
  {
    name: "linkedin",
    src: linkedin,
    link: "https://www.linkedin.com/in/juni-kim-28276b225/",
  },
  { name: "email", src: email, link: "mailto:junikimm717@gmail.com" },
  { name: "gitlab", src: gitlab, link: "https://gitlab.com/junikimm717" },
];

const year = new Date().getFullYear();

const dbg = () => {
  console.log("works!");
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
            value: '#65a30d',
          },
          links: {
            color: '#65a30d',
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
  <footer class="text-gray-400 text-sm text-center mt-16">
    <div class="flex flex-row justify-center">
      <div class="m-2 p-1 bg-gray-300 rounded-lg">
        <div class="flex flex-row flex-wrap justify-center gap-3">
          <a v-for="icon in icons" v-bind:href="icon.link">
            <img v-bind:alt="icon.name" v-bind:src="icon.src" class="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
    © 2021-{{ year }} Juni C. Kim
    <div class="text-center">
      Icons made by
      <a href="https://fontawesome.com/license" title="Font Awesome">
        Font Awesome
      </a>
    </div>
  </footer>
</template>
