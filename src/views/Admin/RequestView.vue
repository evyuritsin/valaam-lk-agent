<template>
	<div class="page-wrapper">
		<div class="container-xl">
			<div class="card">
				<div class="col d-flex flex-column">
					<div class="card-body">
						<h2>Заявка № {{ request.id }}</h2>
						<h2>{{ request.title }}</h2>
						<div class="row align-items-center mb-2">
							<div class="col-2">
								<span>Автобус</span>
							</div>
							<div class="col-3">
								<p>28.07.23 8:00 Санкт-Петербург - причал</p>
							</div>
							<div class="col-1">
								<label class="form-label">№ автобуса</label>
							</div>
							<div class="col-2">
								<input type="text" class="form-control" />
							</div>
							<div class="col-1">
								<label class="form-label">№ рейса</label>
							</div>
							<div class="col-2">
								<input type="text" class="form-control" />
							</div>
							<div class="col-1">
								<img src="../../assets/icons/edit.svg" alt="Edit Icon" />
							</div>
						</div>
						<div class="row align-items-center">
							<div class="col-2">
								<span>Автобус</span>
							</div>
							<div class="col-3">
								<p>30.07.23 14:00 причал - Санкт-Петербург</p>
							</div>
							<div class="col-1">
								<label class="form-label">№ автобуса</label>
							</div>
							<div class="col-2">
								<input type="text" class="form-control" />
							</div>
							<div class="col-1">
								<label class="form-label">№ рейса</label>
							</div>
							<div class="col-2">
								<input type="text" class="form-control" />
							</div>
							<div class="col-1">
								<img src="../../assets/icons/edit.svg" alt="Edit Icon" />
							</div>
						</div>
						<div class="row mb-3">
							<div class="col-2">
								<span>Сопровождающий</span>
							</div>
							<div class="col-3">
								<h4>Попова Евгения Викторовна</h4>
							</div>
							<div class="col-1">
								<img src="../../assets/icons/edit.svg" alt="Edit Icon" />
							</div>
						</div>
						<div class="row mb-3">
							<div class="offset-1 col-1">
								<span>телефон</span>
							</div>
							<div class="col-2">
								<h4>89012345678</h4>
							</div>
							<div class="col-1">
								<img src="../../assets/icons/edit.svg" alt="Edit Icon" />
							</div>
						</div>
						<div class="row mb-3">
							<div class="col-2">
								<span>Рейс туда</span>
							</div>
							<div class="col-3">
								<h4>28.07.23 Приозерск > Валаам 11:00 метеор</h4>
							</div>
							<div class="col-1">
								<img src="../../assets/icons/edit.svg" alt="Edit Icon" />
							</div>
						</div>
						<div class="row mb-3">
							<div class="col-2">
								<span>Рейс обратно</span>
							</div>
							<div class="col-3">
								<h4>30.07.23 Валаам > Приозерск 12:00 метеор</h4>
							</div>
							<div class="col-1">
								<img src="../../assets/icons/edit.svg" alt="Edit Icon" />
							</div>
						</div>
						<div class="row mb-4">
							<div class="col-2">
								<span>Размещение</span>
							</div>
							<div class="col-2">
								<h4>Дом паломника "Валаам"</h4>
							</div>
							<div class="col-2">
								<h4>Стандартные номера</h4>
							</div>
							<div class="col-1">
								<h4>1 номер</h4>
							</div>
							<div class="col-2">
								<h4>28.07.23 - 30.07.23</h4>
							</div>
							<div class="col-1">
								<img src="../../assets/icons/edit.svg" alt="Edit Icon" />
							</div>
						</div>
						<div class="row mb-3">
							<div class="col-auto d-flex align-items-center">
								<img
									src="../../assets/icons/meat.svg"
									alt="Eat Icon"
									height="40"
									class="me-2"
								/>
								<h3 class="pt-2">Питание</h3>
							</div>
						</div>
						<div class="row align-items-center mb-2">
							<div class="col-1">
								<label class="form-label">Завтраков</label>
							</div>
							<div class="col-2">
								<input type="text" class="form-control" />
							</div>
							<div class="col-2">
								<select class="form-select">
									<option v-for="item in eatOptions" :key="item.id">
										{{ item.name }}
									</option>
								</select>
							</div>
							<div class="col-1">
								<img src="../../assets/icons/close.svg" alt="Close Icon" />
							</div>
						</div>
						<div class="row align-items-center mb-2">
							<div class="col-1">
								<label class="form-label">Обедов</label>
							</div>
							<div class="col-2">
								<input type="text" class="form-control" />
							</div>
							<div class="col-2">
								<select class="form-select">
									<option v-for="item in eatOptions" :key="item.id">
										{{ item.name }}
									</option>
								</select>
							</div>
							<div class="col-1">
								<img src="../../assets/icons/close.svg" alt="Close Icon" />
							</div>
						</div>
						<div class="row align-items-center mb-5">
							<div class="col-1">
								<label class="form-label">Ужинов</label>
							</div>
							<div class="col-2">
								<input type="text" class="form-control" />
							</div>
							<div class="col-2">
								<select class="form-select">
									<option v-for="item in eatOptions" :key="item.id">
										{{ item.name }}
									</option>
								</select>
							</div>
							<div class="col-1">
								<img src="../../assets/icons/close.svg" alt="Close Icon" />
							</div>
						</div>
						<h3>Экскурсии, услуги</h3>
						<h4>
							<a href="#" class="text-decoration-underline">Никольский скит</a>
							<img src="../../assets/icons/close.svg" alt="Close Icon" />
						</h4>
						<h4 class="mb-2">
							<a href="#" class="text-decoration-underline"
								>Скиты Всех Святых и Смоленский</a
							>
							<img src="../../assets/icons/close.svg" alt="Close Icon" />
						</h4>
						<button class="btn btn-primary mb-5">Добавить</button>
						<h3>Данные туристов</h3>
						<TouristData
							v-for="(tourist, index) in [...Array(request.persons.length)]"
							:key="index"
						/>
						<button class="btn btn-primary mb-5" @click="addPerson">
							Добавить
						</button>
						<h3>Файлы к заявке</h3>
						<div class="row mb-3">
							<div class="col-2">
								<button class="btn btn-primary" @click="clickToInputFile">
									Загрузить
								</button>
								<input
									type="file"
									id="file"
									ref="inputFile"
									class="d-none"
									@change="previewFile"
								/>
							</div>
							<div class="col-3">
								<div
									class="d-flex gap-1"
									v-for="file in request.files"
									:key="file.id"
								>
									<img src="../../assets/icons/file.svg" alt="File Icon" />
									<span>{{ file.name }}</span>
									<img
										src="../../assets/icons/close.svg"
										alt="Close Icon"
										@click="deleteFile(file.id)"
										class="cursor-pointer"
									/>
								</div>
							</div>
						</div>

						<h3>Взаимотошения по заявке:</h3>
						<div class="row">
							<table class="table table-bordered mb-3 col">
								<thead>
									<tr>
										<th scope="col">Операция</th>
										<th scope="col">Дата</th>
										<th scope="col">Сумма + -</th>
										<th scope="col">Итог</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Возврат</td>
										<td>30.09.22</td>
										<td>12000</td>
										<td>12000</td>
									</tr>
									<tr>
										<td>Оплата</td>
										<td>29.09.22</td>
										<td>24000</td>
										<td>{{ request.sum }}</td>
									</tr>
								</tbody>
							</table>
							<div class="col-auto d-flex flex-column align-items-start">
								<h4>QR-код</h4>
								<div id="qr-code" ref="qrcode">123</div>
								<a class="btn w-100" :href="request.qrcode">Скачать</a>
							</div>
						</div>

						<h3>Документы для скачивания:</h3>
						<div class="row mb-3">
							<div class="col-6 d-flex flex-column align-items-start">
								<div
									class="d-flex gap-2 align-items-center"
									v-for="file in request.files"
									:key="file.id"
								>
									<img src="../../assets/icons/file.svg" alt="File Icon" />
									<a href="#">{{ file.name }}</a>
								</div>
							</div>
						</div>
						<div class="row align-items-center mb-3">
							<div class="col-auto">
								<select class="form-select">
									<option v-for="status in statusesSelect" :key="status.id">
										{{ status.name }}
									</option>
								</select>
							</div>
							<div class="col-auto">
								<button class="btn btn-primary">Сохранить</button>
							</div>
							<div class="col-2 cursor-pointer" @click="cancelTheOrder">
								<button class="btn btn-danger">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-x"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										stroke-width="2"
										stroke="currentColor"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path stroke="none" d="M0 0h24v24H0z" fill="none" />
										<line x1="18" y1="6" x2="6" y2="18" />
										<line x1="6" y1="6" x2="18" y2="18" />
									</svg>
									<span> Отменить заявку </span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<ConditionAlert
		v-if="alerts.isCondition"
		:title="'Вы уверены, что хотите отменить заявку?'"
		@cancel="closeIsConfirm"
		@confirm="confirmAlert"
	/>
	<ConfirmAlert
		:title="'Заявка отменена, оформите прошение на возврат средств.'"
		:btnSpan="'Перейти'"
		@confirm="closeIsConfirm"
		v-if="alerts.isConfirm"
	/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { defineComponent } from 'vue'
import OrderInterface from '../../types/order'
import store from '@/store'

import qrcode from 'qrcode-generator'

import TouristData from '@/components/TouristData.vue'
import ConfirmAlert from '@/components/Alert/ConfirmAlert.vue'
import ConditionAlert from '@/components/Alert/ConditionAlert.vue'

export default defineComponent({
	props: [],
	components: { TouristData, ConfirmAlert, ConditionAlert },
	data: () => ({
		eatOptions: [
			{ id: 1, name: 'Стандартное' },
			{ id: 2, name: 'Постное' },
			{ id: 3, name: 'Детское' },
		],
		alerts: {
			isCondition: false as boolean,
			isConfirm: false as boolean,
		},
		request: {
			id: 420,
			title: 'Валаамское мгновение из Приозерска',
			persons: [{ id: 1 }, { id: 2 }],
			sum: 42000,
			files: [{ id: 1, name: 'Билет.pdf' }],
			qrcode: 'www.google.com',
		},
		statusesSelect: [
			{ id: 1, name: 'Резерв (закрыто к продаже)' },
			{ id: 2, name: 'Свободно (открыто к продаже)' },
			{ id: 3, name: 'Бронь (закрыто к продаже)' },
			{ id: 4, name: 'Продано (закрыто к продаже)' },
		],
	}),
	methods: {
		cancelTheOrder() {
			this.alerts.isCondition = true
		},
		confirmAlert() {
			this.alerts.isCondition = false
			this.alerts.isConfirm = true
		},
		closeIsConfirm() {
			this.alerts.isCondition = false
			this.alerts.isConfirm = false
			this.$router.push('/admin/requests')
		},
		addPerson() {
			this.request.persons.push({ id: Date.now() })
		},
		clickToInputFile() {
			;(this.$refs.inputFile as any).click()
		},
		previewFile() {
			this.request.files.push({
				name: (this.$refs.inputFile as any).files[0].name,
				id: Date.now(),
			})
		},
		deleteFile(fileId: number) {
			this.request.files = this.request.files.filter(file => file.id !== fileId)
		},
	},

	mounted() {
		//qr-code generated
		const qrCode: any = this.$refs.qrcode
		const qr = qrcode(0, 'Q')
		qr.addData(this.request.qrcode)
		qr.make()
		qrCode!.innerHTML = qr.createImgTag()
	},
})
</script>

<style>
.table {
	text-align: center;
}

#qr-code {
	height: 150px;
}

#qr-code img {
	height: 100%;
	width: 100%;
}
</style>
