<script setup>
	
</script>


<template>
	<div class="custom-layout">
		<p>custom layout</p>
		<slot />
	</div>
</template>


<style>
	body{
		background-color:rgba(50,240,50,0.6);
	}
	.custom-layout{
		background-color:pink;
		padding:0 5px;
	}
</style>