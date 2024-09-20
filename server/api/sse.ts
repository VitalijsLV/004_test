/*export default defineEventHandler(async (event) => {
  
  setHeader(event, 'cache-control', 'no-cache')
  setHeader(event, 'connection', 'keep-alive')
  setHeader(event, 'content-type', 'text/event-stream')
  setResponseStatus(event, 200)

  let counter = 0; 
  let data = {
	'date':'', 
	'time':'',
	'testManyPages':'',
  };
  
  event.node.res.write(`id: ${++counter}\n`);
  event.node.res.write(`data: ${JSON.stringify(data)}\n\n`);
		
	
	// const minute = 1000 * 60; 
	// const hour = minute * 60; 
	// const day = hour * 24; 
	// const year = day * 365;
	function fn(){
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
	function intervalForfn(){
		fn();
		setTimeout(intervalForfn, 1000);
	}
	intervalForfn();
})*/