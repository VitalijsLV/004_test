<script setup lang="ts">
	//import { ref, watch } from 'vue'
	import { ref } from 'vue'
	
	
	/*
	const dataSSE = ref('')
	const sseDate = ref('--')
	const sseTime = ref('--')
	const sseTestManyPages = ref('--')
	
	watch(data, (newData, oldData) => {
		
		dataSSE.value = JSON.parse(newData)
		sseDate.value = dataSSE.value.date
		sseTime.value = dataSSE.value.time
		sseTestManyPages.value = dataSSE.value.testManyPages
	})
	*/
	
	
	
	let eventSource: EventSource | undefined;

	function startSse() {
	  //if(!eventSource){
		  eventSource = new EventSource('http://localhost:3000/api/sse3');

		  eventSource.onmessage = (event) => {
			console.log('Event received:', event.data);
		  };

		  eventSource.onerror = (error) => {
			console.error('SSE error:', error);
		  };
	  };
	//}

	function cancelSse() {
	  if (eventSource) {
		console.log('Closing SSE connection');
		eventSource.close();
	  }
	}
	
	
	
	
	
	let tabs1 = '\t'
	let tabs2 = '\u00A0'
	
	let aprakstsValue = `Lācis uz zelta bumbas(Rīgas porcelāns), ļoti labā stāvoklī.   ${tabs2}   Lācis uz zelta bumbas(Rīgas porcelāns), ir lietošanas pazīmes.   ${tabs2}   Lācis uz oranžās bumbas(Rīgas porcelāns), ar defektu pie pamatnes.   ${tabs2}   Lācis uz zilās bumbas(Rīgas porcelāns), labā stāvoklī.   ${tabs2}   Lācis uz zaļās bumbas(Rīgas porcelāns), labā stāvoklī.   ${tabs2}   Lācis uz sarkanās bumbas(Kuzņecovs), labā stāvoklī.`
	const blocksApix1 = ref([1, 2, 3, 4, 5, '', ':)', 'pre'].length)
	
	//if Skaits:null? don't show word 'Skaits'
	//database, bilde, apraksts, stāvoklis, skaits, cena.
	const fakeApiDatax1 = ref({
		Apraksts: aprakstsValue,		
		Stāvoklis: 'Labā stāvoklī.',
		Skaits: null,
		Cena: null,
	})
	
	const fakeApiDatax2 = ref({
		'lacis':50,
		'tautasdeja':160,
		'zirdzins':15
	})
	
	let aroundStart = "«"
	let aroundEnd = "»"
	//let aprakstsValue2 = `Lācis uz zelta bumbas(Rīgas porcelāns), ļoti labā stāvoklī. Lācis uz zelta bumbas(Rīgas porcelāns), ir lietošanas pazīmes. Lācis uz oranžās bumbas(Rīgas porcelāns), ar defektu pie pamatnes. Lācis uz zilās bumbas(Rīgas porcelāns), labā stāvoklī. Lācis uz zaļās bumbas(Rīgas porcelāns), labā stāvoklī. Lācis uz sarkanās bumbas(Kuzņecovs), labā stāvoklī.`
	let aprakstsValue2 = `Продукт1 олвпо лпоук пуодл кппуд. Продукт2 олвпо лпоук пуодл кппуд. Продукт3 олвпо лпоук пуодл кппуд. Продукт4 олвпо лпоук пуодл кппуд. Продукт5 олвпо лпоук пуодл кппуд.`
	
	const fakeApiDatax3 = ref({
		Описание: aprakstsValue2,
		null: null,
		Количество: 5,
		Цена: '555$',
	})
	
	
	
	const name = ref('')
	const surname = ref('')
	
	let resName = ref('')
	let resSurname = ref('')

	async function submitForm1() {
		const { body } = await $fetch('http://localhost:3000/api/submitPosts/submitForm1', {
			method: 'post',
			//body: { test: 123 }
			body: { test: 123, name: name.value, surname: surname.value }
		}).then(results => {
			console.log(results)
				resName.value = results.body.name
				resSurname.value = results.body.surname
			return results
			})
			.catch(error => {
				console.log(error)
			});
	}
	
	///////
	
	const offer = ref('')
	const phone = ref('')
	const domainBuyerName = ref('')
	
	let resOffer = ref('')
	let resPhone = ref('')
	let resDomainBuyerName = ref('')

	async function submitForm2() {
		const { body } = await $fetch('http://localhost:3000/api/submitPosts/submitForm2', {
			method: 'post',
			//body: { test: 234 }
			body: { test: 234, offer: offer.value, phone: phone.value, domainBuyerName: domainBuyerName.value }
		}).then(results => {
			console.log(results)
				resOffer.value = results.body.offer
				resPhone.value = results.body.phone
				resDomainBuyerName.value = results.body.domainBuyerName
			return results
			})
			.catch(error => {
				console.log(error)
			});
	}
	
</script>

<template>
	<div class="ddd">
		<div style="display:flex; flex-flow:wrap row; border:2px dotted lightgreen;">
			
			<div>
				<button @click="startSse">Start SSE</button>
				<button @click="cancelSse">Cancel SSE</button>
			  </div>
			
			
			<div style="margin-right:4px;min-width:730px; display:flex; flex-flow:wrap row; border:4px dotted gray;">
				<form method="POST" style="margin:20px;">
					<label for="fname">First name:</label><br/>
					<input type="text" id="fname" v-model="name" placeholder="Adam"/><br/>
					<label for="lname">Last name:</label><br/>
					<input type="text" id="lname" v-model="surname" placeholder="Godis"/><br/><br/>
						<input @click.prevent="submitForm1" type="submit" value="Nosūtīt"/>
				</form>
				
				<br/><br/><br/>
				
				<button @click="submitForm1" style="margin:20px; display:flex; align-items:center; height:50px;">SubmitForm1</button>
				<button @click="submit" style="margin:20px; display:flex; align-items:center; height:50px;">Submit</button>
				
				<br/><br/><br/>
				
				<div style="display:flex; flex-flow: wrap column;">
					<p>Name: {{ resName ? resName : '--' }}</p>
					<p>Surname: {{ resSurname ? resSurname : '--' }}</p>
				</div>
			</div>
			
			
			<div style="display:flex; flex-flow:wrap row; flex:1 0 auto; border:4px dotted lightblue;">
			
				<form method="POST" style="margin:10px;">
					<input type="text" v-model="offer" placeholder="Your price offer"/><br/>
					<br/>
					<input type="text" v-model="phone" placeholder="Your phone number"/><br/>
					<br/>
					<input type="text" v-model="domainBuyerName" placeholder="Your Name"/><br/>
					<input @click.prevent="submitForm2" type="submit" value="Nosūtīt"/>
				</form>
				
				
				<br/><br/><br/>
				
				
				<br/><br/><br/>
				
				<div style="display:flex; flex-flow: wrap column;">
					<p>offer: {{ resOffer ? resOffer : '--' }}</p>
					<p>Phone: {{ resPhone ? resPhone : '--' }}</p>
					<p>Name: {{ resDomainBuyerName ? resDomainBuyerName : '--' }}</p>
				</div>
				
			</div>
			
		</div>
		
		
		<div style="display:flex; flex-flow:wrap row; align-items:center; justify-content:space-between;">
			<!--<SseDate />
			
			<SseTimeNow />-->
			
			<div class="div-wrapper--sse_data__price">
				<!--<p 
					v-for="(value, key, index) in fakeApiDatax2" 
					:key="index"
					class="pp"
				>
					{{ value ? value + ' Eur' : '--'}}
				</p>-->
			</div>
			
			<div class="div-wrapper--sse_data__sseTestManyPages">
				<!--<p>sseTestManyPages: {{ sseTestManyPages }} /tested=work</p>-->
			</div>
		</div>
		
		
		<!-- <div style="display:inline-flex;">
		&nbsp;&nbsp;&nbsp;
		<NuxtLink to="/">Main-page-X</NuxtLink>
		&nbsp;&nbsp;&nbsp;
		<p>URL is: {{ url }}</p>
		&nbsp;&nbsp;&nbsp;
		<p>Path is: {{ url.pathname }}</p>
		&nbsp;&nbsp;&nbsp;
		<p>is : {{ blocksApix1 }}</p>
		</div> -->
		
		<br/>
		
		<div class="sseWrapper">
			
			<!--<div class="leftSideMenu">
				<p>::A::</p>
				<p>::B::</p>
				<p>::C::</p>
				<p>::D::</p>
			</div>-->
			
		
		
		
			
			<div class="blocksPhotoAndInfoWrapper">
				<div class="blockPhotoAndInfoWrapper">
					<div class="photo">
						img
					</div>
					<div class="info">
						<!--<p 
							v-for="(value, key, index) in fakeApiDatax1" 
							:key="index"
							class="pp"
						>
							<span style="color:#666;">{{ key }}</span>: 
							&nbsp;&nbsp; 
							<span class="vx">{{ value ? value : '--'}}</span>
						</p>-->
					</div>
				</div>
				
				<div class="blockPhotoAndInfoWrapper">
					<div class="photo">
						img
					</div>
					<div class="info">
						<!--<p 
							v-for="(value, key, index) in fakeApiDatax3" 
							:key="index"
							class="pp"
						>
							<span style="color:#666;">{{ key }}</span>: &nbsp;&nbsp; {{ value ? value : '--'}}
						</p>-->
					</div>
				</div>
			</div>
			
		</div>
		
		<br/>
		
		<MyPlusesAndMinusesDiv />
		
		<br/>
		
		<MyProgressDiv />
	</div>
</template>

<style scoped>
	.ddd{
		background-color:white;
	}
	.div-wrapper--sse_data__price{
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
	.div-wrapper--sse_data__price p{
		padding: 12px 10px;
		color: #fff;
		background-color:rgba(40,90,50,0.8);
	}
	
	.div-wrapper--sse_data__sseTestManyPages{
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
	.div-wrapper--sse_data__sseTestManyPages p{
		padding: 12px 10px;
		color: #fff;
		background-color:rgba(40,90,50,0.8);
	}


	.sseWrapper{
		display:flex;
		align-items:center;
		justify-content:space-around;
		box-sizing:border-box;
	}
	.leftSideMenu{
		display:flex;
		flex-flow:wrap column;
		align-items:center;
		justify-content:center;
		box-sizing:border-box;
		width:260px;
		.background-color:rgba(250,110,50,0.15);
		background-color:#fff;
		.border:1px solid purple;
		outline: 1px solid #55a;
		.box-shadow:inset 0 0 2px purple;
	}
	.blocksPhotoAndInfoWrapper{
		display:flex;
		flex-flow:wrap column;
		align-items:center;
		justify-content:center;
		align-self:start;
		box-sizing:border-box;
		width:max-content;
	}
	.blockPhotoAndInfoWrapper{
		display:inline-flex;
		align-self:start;
		align-items:center;
		justify-content:center;
		margin-bottom:30px;
		box-shadow:0 0 2px blue;
		box-sizing:border-box;
	}.blockPhotoAndInfoWrapper:last-child{
		margin-bottom:0;
	}
	.photo{
		display:flex;
		align-items:center;
		justify-content:center;
		width:220px;
		height:220px;
		/*margin:20px;*/
		box-sizing:border-box;
		.background-color:rgba(200,100,10,0.1);
		background-color:#fff;
		overflow:hidden;
	}
	.info{
		display:flex;
		flex-flow:wrap column;
		width:700px;
		height:220px;
		/*margin:20px;*/
		padding:2px;
		box-sizing:border-box;
		.background-color:rgba(200,150,150,0.4);
		background-color:#fff;
		overflow:hidden;
	}
	
	
	.sseWrapper, 
	.leftSideMenu, 
	.blocksPhotoAndInfoWrapper, 
	.blockPhotoAndInfoWrapper, 
	.photo, 
	.info
	{
		.border-radius:14px;
	}
	.photo{
		.border-radius:14px 0 0 14px;
	} 
	.info{
		.border-radius:0 14px 14px 0;
	}
	
		.info .pp{
			font-size:17px;
			font-family:Arial;
			margin:2px;
			padding:4px 7px;
			background-color:rgba(250,250,250,0.2);
			border:none;
			border-radius:7px;
		}
		
	.vx{
		white-space: pre-wrap;
		white-space: pre-line;
		white-space: break-spaces;
	}
</style>