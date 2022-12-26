<template>
	<div class="page-wrapper">
		<div class="container-xl">
			<div class="card">
				<div
					v-if="!orders.length"
					class="card-body d-flex justify-content-center p-5"
				>
					<h1>Еще не создано ни одного заказа</h1>
				</div>
				<div v-else class="card-body">
					<h1>Заявки</h1>
					<div class="row align-items-start">
						<div class="col-1">
							<label class="form-label">Фильтр</label>
							<img src="../../assets/icons/filter.svg" alt="Filter Icon" />
						</div>
						<div class="col-auto">
							<div class="d-flex justify-content-between">
								<label class="form-label">Период</label>
								<img
									src="../../assets/icons/calendar.svg"
									alt="Calendar Icon"
									class="mb-2"
								/>
							</div>
							<flatPickr class="form-control mb-2" name="example-text-input" />
							<flatPickr class="form-control" name="example-text-input" />
						</div>
						<div class="col-2">
							<label class="form-label">ФИО</label>
							<input
								type="text"
								class="form-control"
								name="example-text-input"
							/>
						</div>
						<div class="col-2">
							<label class="form-label">Телефон</label>
							<input
								type="tel"
								class="form-control"
								name="example-text-input"
								v-mask="'+7 (###) ### ## ##'"
							/>
						</div>
						<div class="col-2 ms-auto">
							<select class="form-select my-2">
								<option v-for="item in agentsSelect" :key="item.id">
									{{ item.name }}
								</option>
							</select>
							<select class="form-select">
								<option v-for="item in managersSelect" :key="item.id">
									{{ item.name }}
								</option>
							</select>
						</div>
						<div class="col-1">
							<button class="btn btn-primary my-2">Найти</button>
							<button class="btn btn-primary">Найти</button>
						</div>
					</div>

					<div class="card-body">
						<table class="table mb-3">
							<thead>
								<tr>
									<th scope="col">id</th>
									<th>Дата</th>
									<th>Время</th>
									<th>ФИО заказчика</th>
									<th>Программа</th>
									<th>Тел.заказчика</th>
									<th>Человек</th>
									<th>Сумма</th>
									<th>% оплаты</th>
									<th>Агент</th>
									<th>Менеджер</th>
									<th>Статус заявки</th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="order in orders" :key="order.id">
									<td>{{ order.id }}</td>
									<td>{{ order.date }}</td>
									<td>{{ order.time }}</td>
									<td>{{ order.fullName }}</td>
									<td>{{ order.program }}</td>
									<td>{{ order.phone }}</td>
									<td>{{ order.peopleAmount }}</td>
									<td>{{ order.sumOfOrder }}</td>
									<td>{{ order.percents }}</td>
									<td>{{ order.agent }}</td>
									<td>{{ order.manager }}</td>
									<td>
										<select class="form-select">
											<option v-for="item in statusesSelect" :key="item.id">
												{{ item.id + '.' + item.name }}
											</option>
										</select>
									</td>
								</tr>
							</tbody>
						</table>
						<Pagination
							:countOfPages="countOfPages"
							label="orders-pagination"
							:selectPage="selectPage"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'

import Pagination from '@/components/Pagination.vue'

export default {
	data: () => ({
		agentsSelect: [
			{ id: 1, name: 'Админ 1' },
			{ id: 2, name: 'Админ 2' },
		],
		managersSelect: [
			{ id: 1, name: 'Менеджер 1' },
			{ id: 2, name: 'Менеджер 2' },
		],
		statusesSelect: [
			{ id: 1, name: 'Резерв (закрыто к продаже)' },
			{ id: 2, name: 'Свободно (открыто к продаже)' },
			{ id: 3, name: 'Бронь (закрыто к продаже)' },
			{ id: 4, name: 'Продано (закрыто к продаже)' },
		],
		orders: [
			{
				id: 1,
				date: '',
				time: '',
				fullName: '',
				program: '',
				phone: '',
				peopleAmount: 9,
				sumOfOrder: '',
				percents: '',
				agent: '',
				manager: '',
				status: '',
			},
			{
				id: 2,
				date: '',
				time: '',
				fullName: '',
				program: '',
				phone: '',
				peopleAmount: 9,
				sumOfOrder: '',
				percents: '',
				agent: '',
				manager: '',
				status: '',
			},
		],
	}),
	components: {
		flatPickr,
		Pagination,
	},
	computed: {
		countOfPages() {
			return this.orders.length / 5
		},
	},
}
</script>

<style></style>
