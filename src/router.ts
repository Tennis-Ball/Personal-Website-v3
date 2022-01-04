import { createRouter, createWebHistory } from "vue-router";
import AchievementsVue from "./views/Achievements.vue";
import HomeVue from "./views/Home.vue";
import PortfolioVue from "./views/Portfolio.vue";
import SchoolVue from "./views/School.vue";
import LinksVue from "./views/Links.vue";
import PublicationsVue from "./views/Publications.vue";
import VolunteerVue from "./views/Volunteer.vue";
import Error404 from "./views/404.vue";

const routes = [
  { path: "/", component: HomeVue },
  { path: "/achievements", component: AchievementsVue },
  { path: "/portfolio", component: PortfolioVue },
  { path: "/school", component: SchoolVue },
  { path: "/publications", component: PublicationsVue },
  { path: "/links", component: LinksVue },
  { path: "/volunteering", component: VolunteerVue },
  { path: "/:pathMatch(.*)*", component: Error404 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
