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
		background-color:rgba(20,80,20,0.55);
		padding:0 5px;
	}
</style>