<template>
	<div class="page-wrapper">
		<div class="container-xl">
			<div class="card">
				<div class="card-body">
					<h2>Программы - Компоненты</h2>
					<div class="row align-items-center mb-3">
						<div class="col-auto">
							<div class="form-check">
								<input type="checkbox" class="form-check-input" id="transfer" />
								<label class="form-check-label" for="transfer">{{
									`Трансфер СПб <> причал`
								}}</label>
							</div>
						</div>
						<div class="col-4">
							<div class="row align-items-center">
								<div class="col-auto">
									<label class="form-label">Время выезда автобуса из СПб</label>
								</div>
								<div class="col-2">
									<input type="text" class="form-control" />
								</div>
							</div>
						</div>
					</div>
					<h3>Рейсы теплоходов</h3>
					<table class="table mb-3">
						<thead>
							<tr>
								<th scope="col"><h3>Рейс туда</h3></th>
								<th scope="col"><h3>Рейс обратно</h3></th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>25.05 11:00 Сортавала - Валаам - Метеор</td>
								<td>25.05 15:00 Валаам - Сортавала - ОМ-1</td>
								<td class="cursor-pointer">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-edit"
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
										<path
											d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"
										/>
										<path
											d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
										/>
										<path d="M16 5l3 3" />
									</svg>
								</td>
								<td class="cursor-pointer">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-calendar"
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
										<rect x="4" y="5" width="16" height="16" rx="2" />
										<line x1="16" y1="3" x2="16" y2="7" />
										<line x1="8" y1="3" x2="8" y2="7" />
										<line x1="4" y1="11" x2="20" y2="11" />
										<line x1="11" y1="15" x2="12" y2="15" />
										<line x1="12" y1="15" x2="12" y2="18" />
									</svg>
								</td>
							</tr>
							<tr>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
								<td class="cursor-pointer">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-edit"
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
										<path
											d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"
										/>
										<path
											d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
										/>
										<path d="M16 5l3 3" />
									</svg>
								</td>
								<td class="cursor-pointer">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-calendar"
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
										<rect x="4" y="5" width="16" height="16" rx="2" />
										<line x1="16" y1="3" x2="16" y2="7" />
										<line x1="8" y1="3" x2="8" y2="7" />
										<line x1="4" y1="11" x2="20" y2="11" />
										<line x1="11" y1="15" x2="12" y2="15" />
										<line x1="12" y1="15" x2="12" y2="18" />
									</svg>
								</td>
							</tr>
							<tr>
								<td>&nbsp;</td>
								<td>&nbsp;</td>
								<td class="cursor-pointer">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-edit"
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
										<path
											d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"
										/>
										<path
											d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"
										/>
										<path d="M16 5l3 3" />
									</svg>
								</td>
								<td class="cursor-pointer">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="icon icon-tabler icon-tabler-calendar"
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
										<rect x="4" y="5" width="16" height="16" rx="2" />
										<line x1="16" y1="3" x2="16" y2="7" />
										<line x1="8" y1="3" x2="8" y2="7" />
										<line x1="4" y1="11" x2="20" y2="11" />
										<line x1="11" y1="15" x2="12" y2="15" />
										<line x1="12" y1="15" x2="12" y2="18" />
									</svg>
								</td>
							</tr>
						</tbody>
					</table>
					<button class="btn btn-primary mb-3">Добавить рейс</button>
					<div class="row mb-3">
						<div class="col-2">
							<label class="form-label">Время выезда автобуса из СПб</label>
						</div>
						<div class="col-1">
							<input type="text" class="form-control" />
						</div>
					</div>
					<h3>Экскурсии</h3>
					<div class="row align-items-center mb-2">
						<div class="col-3">
							<select class="form-select">
								<option>Никольский скит</option>
								<option>Скиты Всех Святых и Смоленский</option>
							</select>
						</div>
						<div class="col-auto d-flex gap-3">
							<div class="form-check">
								<input
									class="form-check-input"
									type="radio"
									name="tourType"
									id="tourType1"
								/>
								<label class="form-check-label" for="tourType1">
									Паломническая
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input"
									type="radio"
									name="tourType"
									id="tourType2"
									checked
								/>
								<label class="form-check-label" for="tourType2"> Пешая </label>
							</div>
						</div>
						<div class="col-1 cursor-pointer">
							<img src="../../assets/icons/trash.svg" alt="Trash Icon" />
						</div>
					</div>
					<div class="row align-items-center mb-2">
						<div class="col-3">
							<select class="form-select">
								<option>Никольский скит</option>
								<option>Скиты Всех Святых и Смоленский</option>
							</select>
						</div>
						<div class="col-auto d-flex gap-3">
							<div class="form-check">
								<input
									class="form-check-input"
									type="radio"
									name="tourType2"
									id="tourType1"
								/>
								<label class="form-check-label" for="tourType1">
									Паломническая
								</label>
							</div>
							<div class="form-check">
								<input
									class="form-check-input"
									type="radio"
									name="tourType2"
									id="tourType2"
									checked
								/>
								<label class="form-check-label" for="tourType2"> Пешая </label>
							</div>
						</div>
						<div class="col-1 cursor-pointer">
							<img src="../../assets/icons/trash.svg" alt="Trash Icon" />
						</div>
					</div>
					<button class="btn btn-primary mb-3">Добавить</button>
					<div class="row mb-3">
						<div class="col-2">
							<label class="form-label">Базовая цена</label>
						</div>
						<div class="col-1">
							<input type="text" class="form-control" />
						</div>
					</div>
					<h3 class="mb-2">Размещение</h3>
					<div class="row mb-3">
						<div class="col-2">
							<label class="form-label">Ночей</label>
						</div>
						<div class="col-1">
							<input type="text" class="form-control" />
						</div>
					</div>
					<div class="row mb-3">
						<div class="col-5">
							<label class="form-label mb-2"
								>Описание блока типов номеров</label
							>
							<textarea class="form-control resize-none" rows="6"></textarea>
						</div>
						<div class="col">
							<div class="form-check">
								<input
									class="form-check-input"
									type="checkbox"
									id="priceForPeople"
								/>
								<label class="form-check-label" for="priceForPeople">
									Цена за человека
								</label>
							</div>
							<table class="table table-bordered">
								<thead>
									<tr>
										<th scope="col">id</th>
										<th scope="col">Тип в Logus</th>
										<th scope="col">Описание для прайса</th>
										<th scope="col">Цена</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<input class="form-check-input" type="checkbox" />
										</td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
									<tr>
										<td>
											<input class="form-check-input" type="checkbox" />
										</td>
										<td></td>
										<td></td>
										<td></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<div class="row mb-3">
						<div class="col-auto">
							<button class="btn btn-primary">Добавить блок</button>
						</div>
						<div class="col-auto">
							<button class="btn btn-danger">Удалить</button>
						</div>
						<div class="col-auto">
							<button class="btn">Редактировать</button>
						</div>
					</div>
					<h2>Питание</h2>
					<div class="d-flex align-items-center mb-3">
						<img src="../../assets/icons/meat.svg" alt="Icon" height="30" />
						<h3 class="pt-2">Питание</h3>
					</div>
					<div class="row align-items-center mb-2">
						<div class="col-1">
							<label class="form-label">Завтраков</label>
						</div>
						<div class="col-1">
							<input type="number" class="form-control" min="0" />
						</div>
						<div class="col-2">
							<select class="form-select">
								<option>Стандартное</option>
								<option>Постное</option>
								<option>Детское</option>
							</select>
						</div>
						<div class="col-auto"></div>
					</div>
					<div class="row align-items-center mb-2">
						<div class="col-1">
							<label class="form-label">Обедов</label>
						</div>
						<div class="col-1">
							<input type="number" class="form-control" min="0" />
						</div>
						<div class="col-2">
							<select class="form-select">
								<option>Стандартное</option>
								<option>Постное</option>
								<option>Детское</option>
							</select>
						</div>
						<div class="col-auto"></div>
					</div>
					<div class="row align-items-center mb-3">
						<div class="col-1">
							<label class="form-label">Ужинов</label>
						</div>
						<div class="col-1">
							<input type="number" class="form-control" min="0" />
						</div>
						<div class="col-2">
							<select class="form-select">
								<option>Стандартное</option>
								<option>Постное</option>
								<option>Детское</option>
							</select>
						</div>
						<div class="col-auto"></div>
					</div>
					<label class="form-label mb-2">Описание блока типов номеров</label>
					<textarea class="form-control resize-none mb-3" rows="6"></textarea>
					<button class="btn btn-primary mb-3">Сохранить</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style></style>
