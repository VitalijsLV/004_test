<script setup>
	definePageMeta({
		layout: "custom2",
	})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
	<div class="custom2-page">
		<p>custom2 page</p>
	</div>
</template>

<style scoped>
	.custom2-page{
		background-color:rgba(120,40,40,0.75);
	}
</style>