<template>
	<div class="page-wrapper">
		<div class="container-xl">
			<div class="card">
				<div class="row g-0">
					<div class="col d-flex flex-column">
						<div class="card-body">
							<h2 class="mb-4">Профиль</h2>
							<h3 class="card-title mt-4">Персональные данные</h3>
							<div class="row g-4">
								<div class="col-md">
									<div class="form-label">Фамилия</div>
									<input
										type="text"
										class="form-control"
										v-model="profile.lastName"
									/>
								</div>
								<div class="col-md">
									<div class="form-label">Имя</div>
									<input
										type="text"
										class="form-control"
										v-model="profile.firstName"
									/>
								</div>
								<div class="col-md">
									<div class="form-label">Отчество</div>
									<input
										type="text"
										class="form-control"
										v-model="profile.middleName"
									/>
								</div>
								<div class="col-md">
									<div class="form-label">Пароль</div>
									<button
										class="btn btn-danger"
										data-bs-toggle="modal"
										data-bs-target="#ChangePasswordModal"
									>
										Сменить
									</button>
								</div>
							</div>
							<h3 class="card-title mt-4">Электронная почта</h3>
							<div>
								<div class="row g-1">
									<div class="col-auto">
										<input
											type="text"
											class="form-control w-auto"
											v-model="profile.email"
										/>
									</div>
								</div>
							</div>
							<h3 class="card-title mt-4">
								Телефон
								<span>
									<button class="btn" @click="addTelefon">+</button>
								</span>
							</h3>
							<TelefonItem
								v-for="telefon in profile.telefons"
								:key="telefon.id"
								:telefon="telefon"
								@deleteTelefon="deleteTelefon"
								v-model="telefon.value"
							/>
							<h3>Реквизиты компании</h3>
							<div class="row gap-2 mb-3">
								<div class="col-auto">
									<label class="form-label">Название*</label>
									<input type="text" class="form-control" />
								</div>
								<div class="col-auto">
									<label class="form-label">ИНН*</label>
									<input type="text" class="form-control" />
								</div>
								<div class="col-auto">
									<label class="form-label">КПП</label>
									<input type="text" class="form-control" />
								</div>
								<div class="col-auto">
									<label class="form-label">Юридический адрес</label>
									<input type="text" class="form-control" />
								</div>
								<div class="col-auto">
									<label class="form-label">Телефон/Факс*</label>
									<input type="text" class="form-control" />
								</div>
								<div class="col-auto">
									<label class="form-label">Расчетный счет* </label>
									<input type="text" class="form-control" />
								</div>
								<div class="col-auto">
									<label class="form-label">Название банка*</label>
									<input type="text" class="form-control" />
								</div>
								<div class="col-auto">
									<label class="form-label">БИК*</label>
									<input type="text" class="form-control" />
								</div>
								<div class="col-auto">
									<label class="form-label">Кор.счет банка*</label>
									<input type="text" class="form-control" />
								</div>
								<div class="col-auto">
									<label class="form-label">Адрес доставки док-ов*</label>
									<input type="text" class="form-control" />
								</div>
							</div>
							<div class="row">
								<div class="col-auto">
									<div class="form-check">
										<input class="form-check-input" type="checkbox" />
										<label class="form-check-label">Плательщик НДС</label>
									</div>
								</div>
							</div>
						</div>

						<div class="card-footer bg-transparent mt-auto">
							<div class="btn-list justify-content-end">
								<a href="#" class="btn">Отменить</a>
								<a href="#" class="btn btn-primary">Сохранить</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<ChangePasswordModal @changePassword="changePassword" />
	<button
		class="d-none"
		data-bs-toggle="modal"
		data-bs-target="#danger_alert"
		ref="danger_button"
	></button>
	<AlertDanger title="Старый пароль не подходит" />
	<button
		class="d-none"
		data-bs-toggle="modal"
		data-bs-target="#successful_alert"
		ref="successful_button"
	></button>
	<AlertSuccessful title="Пароль успешно изменен" />
</template>

<script>
import ChangePasswordModal from '@/components/Modals/ChangePasswordModal.vue'
import TelefonItem from '@/components/TelefonItem.vue'
import AlertDanger from '@/components/Alert/AlertDanger.vue'
import AlertSuccessful from '@/components/Alert/AlertSuccessful.vue'

export default {
	props: [],
	components: {
		TelefonItem,
		ChangePasswordModal,
		AlertDanger,
		AlertSuccessful,
	},
	data: () => ({
		profile: {
			firstName: 'Иванов',
			lastName: 'Иван',
			middleName: 'Иванович',
			password: '12345',
			email: 'ivanov@gmail.com',
			telefons: [{ id: 1, value: '' }],
		},
	}),
	methods: {
		addTelefon() {
			this.profile.telefons.push({ id: Date.now(), value: '' })
		},
		deleteTelefon(id) {
			this.profile.telefons = this.profile.telefons.filter(tel => tel.id !== id)
		},
		changePassword(newPassword, oldPassword) {
			if (oldPassword === this.profile.password) {
				this.profile.password = newPassword
				this.$refs['successful_button'].click()
			} else {
				this.$refs['danger_button'].click()
			}
		},
	},
}
</script>
