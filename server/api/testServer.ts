///////////server route

// import path from 'path'
// import fs from 'fs'
// import os from 'os'


// export default defineEventHandler(async (event) => {
	
	/////////// read file and work with it
	// let fileData = fs.readFileSync(path.resolve("textdoc1.txt"), "utf8", (err, data) => {
		// if(err){
			// console.error("X Error reading file: ", err)
			// return
		// }
	// })
	
	// console.log(fileData)
	
	// const regEx = /\w+/g
	// let xx = fileData.match(regEx)
	// let xx_splice = xx.splice(0, 5).splice(2, 5)
	// console.log(xx_splice)
	
	
	/////////////read [POST] file and work with it
	// let filePostData = fs.readFileSync(path.resolve("server", "api", "submitPosts", "file2.txt"), "utf8", (err, data) => {
		// if(err){
			// console.error("X Error reading file: ", err)
			// return
		// }
		// console.log(data)
	// })
	
	// let fileDataParse = JSON.parse(filePostData)
	// console.log(fileDataParse)
	
	// return {
		// DATA_FROM_FILE: fileData,
		// DATA_FROM_FILE_regexed_spliced: xx_splice,
		//////////////DATA_FROM_FILE_data_from_POST: fileDataParse,
		// is: '\$fetch(\'/api/testServer\')',
		// "server route": 'server/api/testServer.ts',
		// api: "api works!",
		// event: event,
		// newData: 'your new data or [POST] here'
	// }
	
	
// })