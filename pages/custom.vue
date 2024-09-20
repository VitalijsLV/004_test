<script setup>
	definePageMeta({
		layout: "custom",
	})
</script>

<template>
	<div class="custom-page">
		<p>custom page</p>
	</div>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style scoped>
	.custom-page{
		background-color:rgba(120,120,200,0.55);
	}
</style>