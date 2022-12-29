<template>
	<div class="page-wrapper">
		<div class="container-xl">
			<div class="card">
				<div class="card-body">
					<h2>Программы - Описание</h2>
					<div class="row align-items-center mb-3">
						<div class="col-2">
							<label class="form-label">Название программы</label>
						</div>
						<div class="col">
							<input class="form-control" type="text" />
						</div>
					</div>
					<div class="row mb-3">
						<div class="col-2 offset-2 d-flex align-items-center gap-2">
							<label class="form-label">дней</label>
							<input class="form-control" type="text" />
						</div>
						<div class="col-2 ms-auto d-flex align-items-center gap-2">
							<label class="form-label">для группы</label>
							<input class="form-control" type="text" />
							<label class="form-label">-</label>
							<input class="form-control" type="text" />
						</div>
					</div>
					<div class="row mb-3">
						<div class="col-auto offset-2">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									id="popularBlock"
								/>
								<label class="form-check-label" for="popularBlock"
									>Выводить в блоке популярных</label
								>
							</div>
						</div>
					</div>
					<div class="row mb-2">
						<div class="col-2">
							<label class="form-label">Анонс</label>
						</div>
						<div class="col">
							<textarea class="form-control resize-none" rows="7"></textarea>
						</div>
					</div>
					<div class="row mb-3">
						<div class="col-auto offset-2">
							<span>(250 знаков)</span>
						</div>
					</div>
					<div class="row mb-3">
						<div class="col-2">
							<label class="form-label">Описание</label>
						</div>
						<div class="col">
							<textarea class="form-control resize-none" rows="7"></textarea>
						</div>
					</div>
					<div class="row mb-5">
						<div class="col-2">
							<label class="form-label">Файлы с описанием</label>
						</div>
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
						<div class="col-auto d-flex flex-column gap-2">
							<File
								v-for="file in descriptionsFiles"
								:key="file.id"
								:file="file"
								:deleteFile="deleteFile"
							/>
						</div>
					</div>
					<div class="row mb-2">
						<div class="col-2">
							<h3>Фотогалерея</h3>
						</div>
						<div class="col">
							<div class="row mb-3">
								<div class="col-2">
									<img
										src="../../assets/img/photo.svg"
										alt="Photo"
										class="h-100"
									/>
								</div>
								<div class="col-4 align-items-end">
									<div class="mb-1">
										<label for="description" class="form-label">Описание</label>
										<input type="text" class="form-control" id="description" />
									</div>
									<div class="mb-1">
										<label for="alt" class="form-label">ALT</label>
										<input type="text" class="form-control" id="alt" />
									</div>
								</div>
								<div class="col-auto cursor-pointer align-self-center">
									<img
										src="../../assets/icons/arrow-narrow-up.svg"
										alt="Arrow Up"
										height="30"
									/>
									<img
										src="../../assets/icons/arrow-narrow-down.svg"
										alt="Arrow Down"
										height="30"
									/>
								</div>
								<div class="col-auto align-self-center">
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											id="avatar"
										/>
										<label class="form-check-label" for="avatar"
											>На аватар</label
										>
									</div>
								</div>
								<div class="col-auto align-self-center">
									<button
										class="btn btn-outline-danger rounded-circle delete-btn"
									>
										X
									</button>
								</div>
							</div>
							<div class="row mb-3">
								<div class="col-2">
									<img
										src="../../assets/img/photo.svg"
										alt="Photo"
										class="h-100"
									/>
								</div>
								<div class="col-4 align-items-end">
									<div class="mb-1">
										<label for="description" class="form-label">Описание</label>
										<input type="text" class="form-control" id="description" />
									</div>
									<div class="mb-1">
										<label for="alt" class="form-label">ALT</label>
										<input type="text" class="form-control" id="alt" />
									</div>
								</div>
								<div class="col-auto cursor-pointer align-self-center">
									<img
										src="../../assets/icons/arrow-narrow-up.svg"
										alt="Arrow Up"
										height="30"
									/>
									<img
										src="../../assets/icons/arrow-narrow-down.svg"
										alt="Arrow Down"
										height="30"
									/>
								</div>
								<div class="col-auto align-self-center">
									<div class="form-check">
										<input
											class="form-check-input"
											type="checkbox"
											id="avatar"
										/>
										<label class="form-check-label" for="avatar"
											>На аватар</label
										>
									</div>
								</div>
								<div class="col-auto align-self-center">
									<button
										class="btn btn-outline-danger rounded-circle delete-btn"
									>
										X
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-auto offset-2">
							<button class="btn btn-primary">Добавить фото</button>
						</div>
					</div>
					<h3>Программа</h3>
					<Day v-for="day in programDays" :key="day.id" />
					<div class="row mb-5">
						<div class="col-auto offset-2">
							<button class="btn btn-primary">Добавить день</button>
						</div>
					</div>
					<div class="row mb-3">
						<div class="col offset-2">
							<label class="form-label">Примечание</label>
							<textarea class="form-control resize-none" rows="7"></textarea>
						</div>
					</div>
					<div class="row mb-3">
						<div class="col offset-2">
							<label class="form-label">Льготы</label>
							<textarea class="form-control resize-none" rows="3"></textarea>
						</div>
					</div>
					<div class="row mb-3">
						<div class="col offset-2">
							<label class="form-label">В стоимость входит</label>
							<textarea class="form-control resize-none" rows="3"></textarea>
						</div>
					</div>
					<div class="row mb-3">
						<div class="col offset-2">
							<label class="form-label">Дополнительно оплачивается</label>
							<textarea class="form-control resize-none" rows="3"></textarea>
						</div>
					</div>
					<div class="row mb-3">
						<div class="col offset-2">
							<label class="form-label">Описание для ваучера</label>
							<textarea class="form-control resize-none" rows="3"></textarea>
						</div>
					</div>
					<div class="row mb-2">
						<div class="col offset-2">
							<h3>Карта маршрута</h3>
						</div>
						<div class="col">
							<h3>Код для вставки карты</h3>
						</div>
					</div>
					<div class="row mb-4">
						<div class="row">
							<div class="col offset-2 d-flex align-items-end gap-3">
								<img
									src="../../assets/img/photo.svg"
									alt="Image"
									class="h-100"
								/>
								<div class="d-flex flex-column w-100">
									<label for="desciptionInput" class="form-label"
										>Описание</label
									>
									<input
										type="email"
										class="form-control"
										id="desciptionInput"
									/>

									<label for="altInput" class="form-label">ALT</label>
									<input type="email" class="form-control" id="altInput" />
								</div>
							</div>
							<div class="col">
								<textarea class="form-control resize-none" rows="6"></textarea>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-auto offset-2">
							<button class="btn btn-primary">Сохранить</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import File from '@/components/File.vue'
import Day from '@/components/Day.vue'
export default {
	data: () => ({
		descriptionsFiles: [
			{ id: 1, name: 'Программа2022-08.pdf' },
			{ id: 2, name: 'Правила поведения монастыре.doc' },
		],
		photos: [{ id: 1 }, { id: 2 }],
		programDays: [{ id: 1 }],
	}),
	components: {
		File,
		Day,
	},
}
</script>

<style>
.resize-none {
	resize: none;
}

.delete-btn {
	width: 40px;
	height: 40px;
}
</style>
