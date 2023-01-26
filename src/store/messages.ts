interface MessageType {
	id: number
	date: string
	time: string
	title: string
	message: string
	isNew: boolean
}

interface StateType {
	messages: MessageType[]
}

export default {
	state: {
		messages: [
			{
				id: 1,
				date: '21.02.2022',
				time: '15:00',
				title: 'Уведомление о переносе рейса',
				message: 'Ваш рейс был перенесен.',
				isNew: true,
			},
			{
				id: 2,
				date: '18.02.2022',
				time: '15:00',
				title: 'Запрос бронирования',
				message: 'Вы забронировали номер.',
				isNew: false,
			},
			{
				id: 3,
				date: '18.02.2022',
				time: '15:00',
				title: 'Уведомление о переносе рейса',
				message: 'Ваш рейс был перенесен.',
				isNew: true,
			},
			{
				id: 4,
				date: '16.02.2022',
				time: '15:00',
				title: 'Запрос бронирования',
				message: 'Вы забронировали номер.',
				isNew: false,
			},
			{
				id: 5,
				date: '13.02.2022',
				time: '15:00',
				title: 'Запрос бронирования',
				message: 'Вы забронировали номер.',
				isNew: false,
			},
			{
				id: 6,
				date: '13.02.2022',
				time: '15:00',
				title: 'Запрос бронирования',
				message: 'Вы забронировали номер.',
				isNew: false,
			},
			{
				id: 7,
				date: '11.02.2022',
				time: '15:00',
				title: 'Уведомление о переносе рейса',
				message: 'Ваш рейс был перенесен.',
				isNew: true,
			},

			{
				id: 8,
				date: '9.02.2022',
				time: '15:00',
				title: 'Запрос бронирования',
				message: 'Вы забронировали номер.',
				isNew: false,
			},
			{
				id: 9,
				date: '9.02.2022',
				time: '15:00',
				title: 'Уведомление о переносе рейса',
				message: 'Ваш рейс был перенесен.',
				isNew: true,
			},
			{
				id: 10,
				date: '7.02.2022',
				time: '15:00',
				title: 'Запрос бронирования',
				message: 'Вы забронировали номер.',
				isNew: false,
			},
			{
				id: 11,
				date: '2.02.2022',
				time: '15:00',
				title: 'Уведомление о переносе рейса',
				message: 'Ваш рейс был перенесен.',
				isNew: true,
			},
		],
	},
	getters: {
		getMessages: (state: StateType) => state.messages,
		getMessageById: (state: StateType) => (id: number) =>
			state.messages.find(message => message.id === id),
	},
	mutations: {},
}
