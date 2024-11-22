//server route(s)

export default defineEventHandler(async (event) => {
	
	setHeader(event, 'cache-control', 'no-cache')
	setHeader(event, 'content-type', 'text/html')
	// setHeader(event, 'content-type', 'application/json')
	
	
	// if(event.context.params.parameters === '3'){
	if(event.context.params.parameters){
		// return { "it is": 1 }
		return `<div style=\"width:205px;background-color:yellow;"><p style=\"color:red;\">Test text. api GET route '${event.context.params.parameters}' </p></div>` 
	}
	
	const many = event.context.params.parameters
	// Do what you need to do with the id
	
	
	//in node.js / console can see consoles .log
	console.log("params", event.context.params)
	console.log('New request: ' + event.node.req.url)
	
	
	return { "here is response from server": ` your route request data --> '${many}' ` }
})