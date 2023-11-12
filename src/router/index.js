import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: () => import("@/views/Home/index.vue"),
		},
		{
			path: "/dataflow",
			component: () => import("@/views/DataFlow/index.vue"),
		},
		{
			path: "/call",
			component: () => import("@/views/Call/index.vue"),
		},
		{
			path: "/oop",
			component: () => import("@/views/OOP/index.vue"),
		},
		{
			path:"/component",
			component: () => import("@/views/Component/index.vue"),
		},
		{
			path:"/vm",
			component: () => import("@/views/Vm/index.vue"),
		},
		{
			path: "/datashare",
			component: () => import("@/views/DataShare/index.vue"),
		},
	],
});

export default router;
