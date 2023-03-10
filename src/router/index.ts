import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import AdminRequestsView from '../views/Admin/RequestsView.vue'
import AdminRequestView from '../views/Admin/RequestView.vue'

import ProfileView from '../views/PersonalArea/ProfileView.vue'
import PAOrdersView from '../views/PersonalArea/OrdersView.vue'
import OrderView from '../views/PersonalArea/OrderView.vue'
import MessagesView from '../views/PersonalArea/MessagesView.vue'
import MessageView from '../views/PersonalArea/MessageView.vue'

import ProgramComponents from '../views/Programs/ComponentsView.vue'
import ProgramDescriptionView from '../views/Programs/DescriptionView.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/admin/requests',
		name: 'admin-requests',
		component: AdminRequestsView,
	},
	{
		path: '/admin/request/:id',
		name: 'admin-request',
		component: AdminRequestView,
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
		component: PAOrdersView,
	},
	{
		path: '/personal-area/order/:id',
		name: 'pa-order',
		component: OrderView,
	},
	{
		path: '/personal-area/messages',
		name: 'pa-messages',
		component: MessagesView,
	},
	{
		path: '/personal-area/message/:id',
		name: 'pa-message',
		component: MessageView,
	},
	{
		path: '/programs/description',
		name: 'p-description',
		component: ProgramDescriptionView,
	},
	{
		path: '/programs/components',
		name: 'p-components',
		component: ProgramComponents,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
