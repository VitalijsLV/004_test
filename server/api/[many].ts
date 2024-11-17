//server route(s)

export default defineEventHandler(async (event) => {
	
	setHeader(event, 'cache-control', 'no-cache')
	setHeader(event, 'content-type', 'text/html')
	// setHeader(event, 'content-type', 'application/json')
	
	
	if(event.context.params.many === '3'){
		// return { "it is": 1 }
		return '<div><p style=\"color:red;\">Test text, 3 </p></div>' 
	}
	
	const many = event.context.params.many
	// Do what you need to do with the id
	
	
	//in node.js / console can see consoles .log
	console.log("params", event.context.params)
	console.log('New request: ' + event.node.req.url)
	
	
	return { "here is response from server": ` your route request data --> '${many}' ` }
})