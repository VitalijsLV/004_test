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

