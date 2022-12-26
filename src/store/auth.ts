interface UserType {
	id?: number | string
	login: string
	password: string
}

interface StateType {
	auth: null | UserType
	users: null | UserType[]
}

export default {
	state: {
		auth: { id: 1, login: 'tigran', password: 'qwerty123' },
		users: [
			{ id: 1, login: 'tigran', password: 'qwerty123' },
			{ id: 2, login: 'anya', password: '12345t' },
			{ id: 1, login: 'petya', password: 'trewq1234' },
			{ id: 1, login: 'victor', password: '1234567' },
			{ id: 1, login: 'zhenya', password: '15151515www' },
			{ id: 1, login: 'artem', password: '1234abc' },
		],
	},
	getters: {
		isAuth: (state: StateType) => !!state.auth,
		getAuth: (state: StateType) => state.auth,
		getUsers: (state: StateType) => state.users,
	},
	mutations: {
		setUser(state: StateType, action: UserType) {
			state.auth = action
		},
		logout(state: StateType) {
			state.auth = null
		},
	},
}
