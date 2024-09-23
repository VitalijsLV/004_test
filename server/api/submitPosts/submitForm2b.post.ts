import fs from 'fs'
//import path from 'path'


export default defineEventHandler(async (event) => {
	if(event){
		const body = await readBody(event)

		const sourceFilePath = 'server/api/submitPosts/file0.txt';
		const destinationFilePath = 'server/api/submitPosts/file.txt';

		// Create a read stream from the source file
		const readStream = fs.createReadStream(sourceFilePath);

		// Create a write stream to the destination file
		const writeStream = fs.createWriteStream(destinationFilePath);

		// Pipe the data from the read stream to the write stream
		readStream.pipe(writeStream);

		// Handle events for successful completion or errors
		readStream.on('end', () => {
		  console.log('File copy operation completed successfully!');
		});

		readStream.on('error', (err) => {
		  console.error('Error reading the source file:', err);
		});

		writeStream.on('finish', () => {
		  console.log('Data has been written to the destination file.');
		});

		writeStream.on('error', (err) => {
		  console.error('Error writing to the destination file:', err);
		});
		
		//const body = await readBody(event)
		if(body.test > 100){
			let fsLooking = fs
			return {body, fsLooking: fsLooking, Yc: 'Jesus is the King of Glory'}
		}
		else{
			return {Yb: 'Jesus is the King of Glory', x: 'body.test < 100', a:66 }
		}
	}
})

/*export default defineEventHandler(async (event) => {
	if(event){
		const body = await readBody(event)
		if(body.test > 100){
			let fsLooking = fs
			return {body, fsLooking: fsLooking, Yc: 'Jesus is the King of Glory'}
		}
		else{
			return {Yb: 'Jesus is the King of Glory', x: 'body.test < 100', a:66 }
		}
	}
})
*/

/*export default defineEventHandler(async (event) => {
	if(event){
		//const writeStream = fs.createWriteStream('write.txt', {flags: 'a'});
		const writeStream = fs.createWriteStream('./write.txt');
		const data = "Using streams to write data. 'Node and Nuxt'";
		writeStream.write(data);
		
		const body = await readBody(event)
		if(body.test > 100){
			let fsLooking = fs
			return {body, fsLooking: fsLooking, Yc: 'Jesus is the King of Glory'}
		}
		else{
			return {Yb: 'Jesus is the King of Glory', x: 'body.test < 100', a:66 }
		}
	}
})
*/
