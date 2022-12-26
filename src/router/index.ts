import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ProfileView from '../views/PersonalArea/ProfileView.vue'
import OrdersView from '../views/PersonalArea/OrdersView.vue'
import OrderView from '../views/PersonalArea/OrderView.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/admin/orders',
		name: 'admin-orders',
		component: ProfileView,
	},
	{
		path: '/admin/ships',
		name: 'admin-ships',
		component: ProfileView,
	},
	{
		path: '/admin/hotels',
		name: 'admin-hotels',
		component: ProfileView,
	},
	{
		path: '/admin/tours',
		name: 'admin-tours',
		component: ProfileView,
	},
	{
		path: '/admin/nutrition',
		name: 'admin-nutrition',
		component: ProfileView,
	},
	{
		path: '/admin/users',
		name: 'admin-users',
		component: ProfileView,
	},
	{
		path: '/admin/settings',
		name: 'admin-settings',
		component: ProfileView,
	},
	{
		path: '/admin/programs',
		name: 'admin-programs',
		component: ProfileView,
	},
	{
		path: '/personal-area/profile',
		name: 'pa-profile',
		component: ProfileView,
	},
	{
		path: '/personal-area/orders',
		name: 'pa-orders',
		component: OrdersView,
	},
	{
		path: '/personal-area/order/:id',
		name: 'pa-order',
		component: OrderView,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
