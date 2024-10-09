<script setup>
	
</script>


<template>
	<div class="wr">
		<ul>
			<!--<li><NuxtLink to="/">Main-page-X</NuxtLink></li>
			<li><NuxtLink to="/about">About-page-X</NuxtLink></li>
			<li><NuxtLink to="/auth">Auth-page-X</NuxtLink></li>
			<li><NuxtLink to="/payment">Payment-page-X</NuxtLink></li>
			<li><NuxtLink to="/users">Users-page-X</NuxtLink></li>
			<li><NuxtLink to="/products">Products-page-X</NuxtLink></li>
			
			<li><NuxtLink to="/products/nextstep">nextstep-page-X</NuxtLink></li>-->
		</ul>
	</div>
</template>


<style >
	body{background-color:red}
	.wr{
		padding:0 5px;
	}
	ul{
		margin:3px auto;
		padding:0;
		display:flex;
		flex-direction:row;
		align-items:center;
		justify-content:space-around;
		width:100%;
		box-sizing:border-box;
		height:max-content;
		border-radius:10px;
		overflow:hidden;
		background-color:pink;
		background-color:rgba(230,130,130,0.25);
	}
	ul li{
		height:18px;
		margin:5px 2px;
		padding:5px;
		border-radius:5px;
		background-color:rgba(40,220,40,0.05);
		list-style-type:none;
	}
	
	@media screen and (max-width: 600px) {
		ul li{
			background-color:rgba(100,100,230,0.67);
		}
	}
</style>