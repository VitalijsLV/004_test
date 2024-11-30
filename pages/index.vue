<script setup lang="ts">
	//import { ref, watch } from 'vue'
	import { ref } from 'vue'
	
	
	const apiTest = await $fetch('/api/testServer')
	//console.log(apiTest)
	
	
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
	
	
	let functionIsRunnng = false;
	
	let eventSource;
	//let eventSource: EventSource | undefined;

	function startSse() {
	  //if(!eventSource){
	    if(functionIsRunnng === false){
		  eventSource = new EventSource('http://localhost:3000/api/sse3');

		  eventSource.onmessage = (event) => {
			console.log('Event received:', event.data);
		  };

		  eventSource.onerror = (error) => {
			console.error('SSE error:', error);
		  };
		  functionIsRunnng = !functionIsRunnng;
		};
	  //};
	};

	function cancelSse() {
		if(functionIsRunnng === true){
			if (eventSource) {
			console.log('Closing SSE connection');
			eventSource.close();
			}
			functionIsRunnng = !functionIsRunnng;
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
		xxx0: aprakstsValue2,
		xxx1: 'nullx',
		xxx2: 5,
		xxx3: '555$',
	})
	
	
	
	const name = ref('')
	const surname = ref('')
	
	let resName = ref('')
	let resSurname = ref('')

	async function submitForm1() {
		const { body1 } = await $fetch('http://localhost:3000/api/submitPosts/submitForm1', {
			method: 'post',
			//body1: { test: 123 }
			body1: { test: 123, name: name.value, surname: surname.value }
		}).then(results => {
			console.log(results)
				resName.value = results.body1.name
				resSurname.value = results.body1.surname
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
		const { body2 } = await $fetch('http://localhost:3000/api/submitPosts/submitForm2', {
			method: 'post',
			//body2: { test: 234 }
			body2: { test: 234, offer: offer.value, phone: phone.value, domainBuyerName: domainBuyerName.value }
		}).then(results => {
			console.log(results)
				resOffer.value = results.body2.offer
				resPhone.value = results.body2.phone
				resDomainBuyerName.value = results.body.domainBuyerName
			return results
			})
			.catch(error => {
				console.log(error)
			});
	}
	
	
	///////
	
	const offer2 = ref('')
	const phone2 = ref('')
	const domainBuyerName2 = ref('')
	
	let resOffer2 = ref('')
	let resPhone2 = ref('')
	let resDomainBuyerName2 = ref('')

	async function submitForm3() {
		let idValue = Math.random() * (10 - 1) + 1
		//const { data } = await $fetch('http://localhost:3000/api/submitPosts/submitForm3', {
		const data = await $fetch('http://localhost:3000/api/submitPosts/submitForm3', {
			method: 'post',
			body: { 
				id: idValue, 
				offer2: offer2.value, 
				phone2: phone2.value, 
				domainBuyerName2: domainBuyerName2.value 
			}
		})
	}
	
</script>

<template>
	<div class="app-index-div">
		<div style="display:flex; flex-flow:wrap row; border:2px dotted lightgreen;">
			
			<div class="div-info">
				<button @click="startSse">Start SSE</button>
				<button @click="cancelSse">Cancel SSE</button>
				
				
				<ul 
					style="display:flex; flew-flow:wrap column; margin:10px; color:rgba(20,100,220,0.75);"
				>
					<li>
						this is a local routing: localhost:3000
					</li>
				</ul>
				
				<ul 
					style="display:flex; flex-flow:wrap column; margin:10px; color:rgba(200,100,20,0.75);"
					class="div-info-ul2"
				>
					<li
						style="width:max-content; margin:0 10px;"
						v-for="(value, key, i) in apiTest" :key="value"
					>
						{{ value }}
					</li>
				</ul>
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
			
			
			<div style="display:flex; flex-flow:wrap row; flex:1 0 auto; border:4px dotted lightblue;">
			
				<form method="POST" style="margin:10px;">
					<input type="text" v-model="offer2" placeholder="Your price offer"/><br/>
					<br/>
					<input type="text" v-model="phone2" placeholder="Your phone number"/><br/>
					<br/>
					<input type="text" v-model="domainBuyerName2" placeholder="Your Name"/><br/>
					<input @click.prevent="submitForm3" type="submit" value="Nosūtīt"/>
				</form>
				
				
				<br/><br/><br/>
				
				
				<br/><br/><br/>
				
				<div style="display:flex; flex-flow: wrap column;">
					<p>offer2: {{ resOffer2 ? resOffer2 : '--' }}</p>
					<p>Phone2: {{ resPhone2 ? resPhone2 : '--' }}</p>
					<p>Name2: {{ resDomainBuyerName2 ? resDomainBuyerName2 : '--' }}</p>
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
		
		
		<div style="display:flex;">
			<div style="font-family:sans-serif; display:flex; flex-flow:wrap column; margin:50px 70px; padding:10px 25px; border:2px solid green; font-size:19px;">
				<section style="font-size:17px;">
					<p>
						Vitālijs Lavrinovičs, 
						<br>36 gadi, 
						<br>dzīvesvieta: Olaine,  
						<br>valodu zināšanas: latviešu un krievu brīvi, angļu vāji,
						<br>e-pasts: vitalijam@inbox.lv, 
						<br>tālrunis: 25313925.
					</p>
				</section>
				<hr style="width:95%;">
				<section>
					<p style="font-size:17px;">Bez pieredzes algotā programmētāja darbā.</p>  
					<i><p>Sakarā ar miega problēmām, interesē darbs ar slīdošu jeb stingri nenoteiktu darba laika grafiku.</p></i> 
				</section>
				<section style="font-weight:bold;">
					<p>Pašmācības ceļā apgūts: Html, Css, JavaScript vanilla. <br> 
					Ir pamata zināšanas strādājot ar Node, Vue, Nuxt, cmd, Git, GitHub.</p> 
				</section>
				<section>
					<p>Mācos un papildinu savas zināšanas iekš: Node, Vue, Nuxt, Docker, Deploy, JWT, SSE, Auth, WS utt.</p> 
				</section>
				<section>
					<p>Plānoju apgūt Postgresql, Kubernetes.</p> 
				</section>
				<section style="color:gray;">
					<p>Bija neliela pieredze strādājot ar PSD, Figma, Gimp2, MySql.</p>  
					<p>Tāpat neliela pieredze bija strādājot ar Php(taču izvēlējos mācīties Node; varbūt vēlāk kaut kad Php vēl iemācīšos, bet ne tagad).</p>
				</section>
			</div>
		</div>
		
		
		<div style="display:flex; margin:30px 100px; border:2px solid yellow; background-color:rgba(130,130,90,0.27);">
			<p>
				Даже сатана использовал Священное Писание, и даже против самого Господа Иисуса. 
По этому я хочу напомнить всем: "Проверяйте всё, от Бога ли это.", "По Его ли воле это?", "Бог свят", "Бог есть Дух", "Бог есть Любовь", и еще: "любовь ближнему не причиняет зла; [Библия,Римлянам13глава10стих]".
			</p>
		</div>
		
		
	</div>
</template>

<style scoped>
	.app-index-div{
		background-color:white;
	}
		.div-info .div-info-ul2 li:nth-child(1), .div-info .div-info-ul2 li:nth-child(2){
			color:rgba(155,100,100,0.85);
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