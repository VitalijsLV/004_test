<script setup>
	import { ref, watch } from 'vue'
	
	const { status, data, close } = useEventSource('http://localhost:3000/api/sse', [], {
		autoReconnect: true,
	})
	
	const dataSSE = ref('')
	const sseTime = ref('lūdzu uzgaidiet...')
	
	watch(data, (newData, oldData) => {
		
		dataSSE.value = JSON.parse(newData)
		sseTime.value = dataSSE.value.time
	})
</script>


<template>
	<div class="div-wrapper--sse_data__time">
		<p>Laiks: {{ sseTime }}</p>
	</div>
</template>


<style scoped>
	.div-wrapper--sse_data__time{
		display:flex;
		flex-flow:wrap row;
		align-items:center;
		justify-content:center;
		width:max-content;
		height:max-content;
		margin:10px;
		padding:15px;
		border:1px solid rgba(40,90,50,0.8);
		background-color:rgba(170,40,20,0.1);
	}
	.div-wrapper--sse_data__time p{
		padding: 12px 10px;
		color: #fff;
		background-color:rgba(40,90,50,0.8);
	}
</style>