export default defineEventHandler(async (event) => {
	if(event){
		const body = await readBody(event)
		if(body.test > 100){
			return {body, Ya: 'Jesus is the King of Glory', x: 'body.test > 100', a: 777, z: body.test + 10000}
		}
		else{
			return {Yb: 'Jesus is the King of Glory', x: 'body.test < 100', a:66, b:'?' }
		}
	}
})