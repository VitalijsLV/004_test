<script setup>
	import { ref, onMounted } from 'vue'
	
	let styleForP = ref()
	let styleForSvg = ref()
	
	onMounted(()=>{
		let batteryFn = () => {
			let changeColorFn = () => {
				styleForSvg.value = {
					fill:'orange'
				},
				styleForP.value = {
					border:'1px solid orange'
				}
			}
			setTimeout(changeColorFn, 0)
			
			let changeColorFn2 = () => {
				styleForSvg.value = {
					fill:'green'
				},
				styleForP.value = {
					border:'1px solid green'
				}
			}
			setTimeout(changeColorFn2, 3000)
			setTimeout(batteryFn, 6000)
		}
		batteryFn()
	})
</script>

<template>
	<p :style="styleForP" class="pServer">data received from SERVER</p>
	
	<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path :style="styleForSvg" fill="#77aa88" d="M7 10V2h6v8h5l-8 8l-8-8z"></path></svg>
</template>

<style scoped>
	.pServer{
		color:rgb(30,30,30); 
		border:1px solid rgb(10,10,10); 
		width:max-content; height:18px;
	}
	
	path:hover{
		fill:red;
	}
</style>