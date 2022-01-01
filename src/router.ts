import { createRouter, createWebHistory } from "vue-router";
import AchievementsVue from "./views/Achievements.vue";
import HomeVue from "./views/Home.vue";
import ProjectsVue from "./views/Projects.vue";
import SchoolVue from "./views/School.vue";
import ServerVue from "./views/Server.vue";

const routes = [
  { path: "/", component: HomeVue },
  { path: "/achievements", component: AchievementsVue },
  { path: "/projects", component: ProjectsVue },
  { path: "/school", component: SchoolVue },
  { path: "/other", component: ServerVue },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
