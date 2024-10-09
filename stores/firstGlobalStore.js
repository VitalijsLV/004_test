export const useFirstGlobalStore  define('firstGlobal', {
	const serverDateNow = ref(0)
	const serverTimeNow = ref(0)
	const starDateOfTheCurrentAuction = ref(0)
	const startTimeOfTheCurrentAuction = ref(0)
	const timeForTheAuction = computed( () => {
		const auctionStartDate = starDateOfTheCurrentAuction.value - serverDateNow.value
		const auctionStartTime = startTimeOfTheCurrentAuction.value - serverTimeNow.value
		const auctionStartDateAndTime = { date: auctionStartDate, time: auctionStartTime } 
		return auctionStartDateAndTime
	})
	
	return { 
		serverDateNow, 
		serverTimeNow, 
		starDateOfTheCurrentAuction,  
		startTimeOfTheCurrentAuction,
		timeForTheAuction 
	}
})




/*
По умолчанию @pinia/nuxt предоставляет несколько автоматических импортов:

usePinia(), похоже на getActivePinia(), но лучше работает с Nuxt. 
Вы можете добавить автоматические импорты, чтобы упростить свою жизнь:
defineStore() для определения хранилищ
storeToRefs()когда необходимо извлечь отдельные ref-ссылки из хранилища
acceptHMRUpdate() для горячей замены модулей
*/