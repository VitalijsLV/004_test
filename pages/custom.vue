<script setup>
	definePageMeta({
		layout: "custom",
	})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
	<div class="custom-page">
		<p>custom page</p>
	</div>
</template>

<style scoped>
	.custom-page{
		background-color:rgba(120,120,200,0.75);
	}
</style>