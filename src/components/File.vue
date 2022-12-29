<template>
	<div class="row justify-content-between align-items-center gap-2">
		<div class="col-auto">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="icon icon-tabler icon-tabler-file-text"
				width="40"
				height="40"
				viewBox="0 0 24 24"
				stroke-width="2"
				stroke="currentColor"
				fill="none"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M14 3v4a1 1 0 0 0 1 1h4" />
				<path
					d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
				/>
				<line x1="9" y1="9" x2="10" y2="9" />
				<line x1="9" y1="13" x2="15" y2="13" />
				<line x1="9" y1="17" x2="15" y2="17" />
			</svg>
			<span>{{ file.name }}</span>
		</div>
		<div class="col-auto">
			<button
				class="btn btn-outline-danger rounded-circle delete-btn"
				@click="deleteFile(file.id)"
			>
				X
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['file', 'deleteFile'],
}
</script>

<style></style>
