<template>
	<div class="py-3 mb-3 border border-end-0 border-start-0">
		<div class="row mb-2">
			<div class="col-auto offset-2">
				<label class="form-label">День {{ index + 1 }}</label>
			</div>
		</div>
		<div class="row mb-2">
			<div class="col-2 offset-2">
				<label class="form-label">Заголовок</label>
			</div>
			<div class="col">
				<input type="text" class="form-control" />
			</div>
		</div>
		<div class="row mb-2">
			<div class="col-2 offset-2">
				<label class="form-label">Описание</label>
			</div>
			<div class="col">
				<textarea class="form-control resize-none" rows="7"></textarea>
			</div>
		</div>
		<button
			class="btn btn-outline-danger d-block ms-auto"
			@click="deleteDay(day.id)"
		>
			Удалить день
		</button>
	</div>
</template>

<script>
export default {
	props: ['day', 'index', 'deleteDay'],
}
</script>

<style></style>
