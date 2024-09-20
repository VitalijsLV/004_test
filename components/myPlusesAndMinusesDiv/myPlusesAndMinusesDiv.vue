<script setup> 
	
</script>


<template>
	<div class="myPlusesAndMinusesDiv">
		<div class="some plusesDiv">
			<p>Good heart. Thanks to God!</p>
			<p>Web programmer skills.</p>
		</div>
		<div class="some middleDiv">
			<p>other</p>
		</div>
		<div class="some minusesDiv">
			<p>Sicknesses in my body.</p>
			<p>Barriers within sleeping.</p>
			<p>Barriers in my progress.</p>
			<p>Barriers in my mental and psychical health.</p>
		</div>
	</div>
</template> 


<style scoped> 
	.myPlusesAndMinusesDiv{
		display:flex;
		flex-flow:wrap row; 
		/*align-items:center;*/
		align-items: stretch;
		justify-content:center;
		margin:50px;
		box-sizing:border-box;
		background-color:rgba(190,190,90,0.1);
		border:1px dotted yellow;
	}
		.some{
			display:flex;
			flex-flow:wrap row; 
			align-items:center; 
			justify-content:center;
			margin: 20px; 
			padding: 20px;
			border:1px solid green; 
			width: 330px;
		}
		.some p{
			margin: 5px 20px 5px 0;
			padding:3px 5px;
			color:black;
			background-color: rgba(100,50,20,0.1);
			background-color:white;
			border:none;
			/*outline: 1px solid black;*/		
		}
		.plusesDiv{
			background-color:rgba(100,200,100,0.2);
		}
		.middleDiv{
			background-color:rgba(100,100,200,0.2);
		}
		.minusesDiv{
			background-color:rgba(200,100,100,0.2);
		}
</style>