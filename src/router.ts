import { createRouter, createWebHistory } from 'vue-router';
import AchievementsVue from './views/Achievements.vue';
import HomeVue from './views/Home.vue';
import ProjectsVue from './views/Projects.vue';
import SchoolVue from './views/School.vue';
import ServerVue from './views/Server.vue';
import PublicationsVue from './views/Publications.vue';
import VolunteerVue from './views/Volunteer.vue';
import Error404 from './views/404.vue';

const routes = [
	{ path: '/', component: HomeVue },
	{ path: '/achievements', component: AchievementsVue },
	{ path: '/projects', component: ProjectsVue },
	{ path: '/school', component: SchoolVue },
	{ path: '/publications', component: PublicationsVue },
	{ path: '/other', component: ServerVue },
	{ path: '/volunteering', component: VolunteerVue },
	{ path: '/:pathMatch(.*)*', component: Error404 },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
