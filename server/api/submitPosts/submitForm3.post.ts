// read data, transform data, write data

import fs from 'fs'
import path from 'path'

export default defineEventHandler( async (event) => {
	if(event){
		// here need security to check event and body data
		// ...
		
		
		const body = await readBody(event)
		
		
		//new array for old and new objects
		let arrayWithDataObjects = []
		
		
		//check, is readable file exist?
		if(fs.existsSync(path.resolve("server", "api", "submitPosts", "file2.txt"))){
			
			//check, is readable file is empty?
			if(fs.readFileSync(path.resolve("server", "api", "submitPosts", "file2.txt")).length === 0){
				writeFn()
				return
			}
			
			//if readable file has length more than '0'
			else if(fs.readFileSync(path.resolve("server", "api", "submitPosts", "file2.txt")).length > 0){
				readFn()
				writeFn()
				return
			}
			
		}
		
		
		function readFn(){
			//read
			let getOldData = fs.readFileSync(path.resolve("server", "api", "submitPosts", "file2.txt"), "utf8", (err, data) => {
				if(err){
					console.error("X Error reading file: ", err)
					return
				}
				///////// console.log(data)
			})


			//read old data and get data from JSON
			let transformOldDataFromJSON = JSON.parse(getOldData)
			
			transformOldDataFromJSON.forEach((one, index)=>{
				arrayWithDataObjects.push(one)
			})
		}
		
		
		function writeFn(){
			//write after read body(new object) from event
			
			arrayWithDataObjects.push(body)
			const objectsArrToJSON = JSON.stringify(arrayWithDataObjects)
			
			
			//write
			fs.writeFileSync(path.resolve('server', 'api', 'submitPosts', 'file2.txt'), objectsArrToJSON, {encoding: 'utf8', flags: 'a'}, err => {
				if (err) {
					console.error(err);
				} else {
					////////// file written successfully
				}
			})
		}
		
	}
})

