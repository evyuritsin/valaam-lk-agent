<template>
	<div class="row mb-3">
		<div class="col-2">
			<img src="../assets/img/photo.svg" alt="Photo" class="h-100" />
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
				src="../assets/icons/arrow-narrow-up.svg"
				alt="Arrow Up"
				height="30"
				@click="moveUp(index)"
			/>
			<img
				src="../assets/icons/arrow-narrow-down.svg"
				alt="Arrow Down"
				height="30"
				@click="moveDown(index)"
			/>
		</div>
		<div class="col-auto align-self-center">
			<div class="form-check">
				<input class="form-check-input" type="checkbox" id="avatar" />
				<label class="form-check-label" for="avatar">На аватар</label>
			</div>
		</div>
		<div class="col-auto align-self-center">
			<button
				class="btn btn-outline-danger rounded-circle delete-btn"
				@click="deletePhoto(photo.id)"
			>
				X
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['photo', 'index', 'deletePhoto', 'moveDown', 'moveUp'],
}
</script>

<style></style>
