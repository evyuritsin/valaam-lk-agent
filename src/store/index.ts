import { createStore } from 'vuex'

import orders from './orders'
import auth from './auth'

export default createStore({
	state: {},
	getters: {},
	mutations: {},
	actions: {},
	modules: { orders, auth },
})
