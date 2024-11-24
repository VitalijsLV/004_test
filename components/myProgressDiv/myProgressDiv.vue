<script setup> 
	
</script>


<template>
	<div class="myProgressDiv">
		<div class="learnDiv a">
			<p>MySql</p>
			<p>HTML5</p>
			<p>CSS3</p>
			<p>JavaScript</p>
			<p>Vue3</p>
			<p>PSD to HTML5</p>
			<p>Pinia</p>
			<p>Git</p>
			<p>GitHub</p>
			<p>JSON</p>
			<p>Nuxt3</p>
			<p>SSE</p>
			<p>SSR</p>
			<p>Node</p>
			<p>other</p>
		</div>
		<div class="learnDiv b">
			<p>Nuxt3</p>
			<p>Docker</p>
			<p>MySql</p>
			<p>Git</p>
			<p>GitHub</p>
			<p>SCSS</p>
			<p>Node</p>
			<p>Pinia</p>
			<p>h3</p>
			<p>Nitro</p>
			<p>SSR</p>
			<p>WS</p>
			<p>SSE</p>
			<p>JWT</p>
			<p>Auth...</p>
			<p>ssh</p>
			<p>Hosting</p>
			<p>VPS</p>
			<p>Deploy</p>
			<p>other</p>
		</div>
		<div class="learnDiv c">
			<p>Kubernetes</p>
			<p>Postgresql</p>
			<p>Deploy</p>
			<p>VPS</p>
			<p>Auth...</p>
			<p>Payment</p>
			<p>other</p>
		</div>
	</div>
</template> 


<style scoped> 
	.myProgressDiv{
		display:flex;
		flex-flow:wrap row; 
		/*align-items:center;*/
		align-items: stretch;
		justify-content:center;
		margin:50px;
		box-sizing:border-box;
		background-color:rgba(30,30,30,0.05);
		border:1px dotted yellow;
	}
		.learnDiv{
			display:flex;
			flex-flow:wrap row; 
			align-items:center; 
			justify-content:center;
			margin: 20px; 
			padding: 20px;
			border:1px solid green; 
			width: 330px;
		}
		.learnDiv p{
			margin: 5px 20px 5px 0;
			padding:3px 5px;
			color:black;
			background-color: rgba(100,50,20,0.1);
			background-color:white;
			border:none;
			/*outline: 1px solid black;*/		
		}
		.a{
			background-color:rgba(100,200,100,0.5);
		}
		.b{
			background-color:rgba(100,100,200,0.5);
		}
		.c{
			background-color:rgba(200,100,100,0.5);
		}
</style>