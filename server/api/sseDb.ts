export default defineEventHandler(async (event) => {
  
  setHeader(event, 'cache-control', 'no-cache')
  setHeader(event, 'connection', 'keep-alive')
  setHeader(event, 'content-type', 'text/event-stream')
  setResponseStatus(event, 200)

  let counter = 0; 
  let data = {};
  
  event.node.res.write(`id: ${++counter}\n`);
  event.node.res.write(`data: ${JSON.stringify(data)}\n\n`);
		
	function fnx1(){
		data = {c:3, d:4, e:5};
	
		event.node.res.write(`id: ${++counter}\n`);
		event.node.res.write(`data: ${JSON.stringify(data)}\n\n`);
	}
	
	function fnx2(){
		data = {a:1, b:'2', c:3, a8:'789', '?':'???'};
			
		event.node.res.write(`id: ${++counter}\n`);
		event.node.res.write(`data: ${JSON.stringify(data)}\n\n`);
	}
	// const minute = 1000 * 60; 
	// const hour = minute * 60; 
	// const day = hour * 24; 
	// const year = day * 365;
	function fnx3(){
		let d = new Date();
		let year = d.getFullYear();
		let month = d.getMonth()+1;
		let day = d.getDate();
		let hours = d.getHours();
		let minutes = d.getMinutes();
		let seconds = d.getSeconds();
		let testManyPages = Math.floor((Math.random() *10) +1);
		let dateResult = {
			'date':`${year}\.${month}\.${day}`, 
			'time':`${hours}:${minutes}:${seconds}`,
			'testManyPages':`${testManyPages}`
		};
		data = dateResult;
			
		event.node.res.write(`id: ${++counter}\n`);
		event.node.res.write(`data: ${JSON.stringify(data)}\n\n`);
	}
	//setTimeout(fnx1, 0);
	//setTimeout(fnx2, 0);
	setInterval(fnx3, 1000);
})