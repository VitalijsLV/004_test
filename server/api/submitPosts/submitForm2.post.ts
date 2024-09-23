export default defineEventHandler(async (event) => {
	if(event){
		const body = await readBody(event)
		if(body.test > 100){
			return {body, Yc: 'Jesus is the King of Glory'}
		}
		else{
			return {Yb: 'Jesus is the King of Glory', x: 'body.test < 100', a:66 }
		}
	}
})