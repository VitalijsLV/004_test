//server route

import path from 'path'
import fs from 'fs'
import os from 'os'


export default defineEventHandler(async (event) => {
	
	let xx;
	let fileData = fs.readFileSync(path.resolve("textdoc1.txt"), "utf8", (err, data) => {
		if(err){
			console.error("X Error reading file: ", err)
			return
		}
	})
	
	const regEx = /\w+/g
	xx = fileData.match(regEx)
	console.log(xx)
	
	
	return {
		a:1,
		DATA_FROM_FILE: xx,
		is: '\$fetch(\'/api/testServer\')',
		"server route": 'server/api/testServer.ts',
		api: "api works!",
		event: event,
		newData: 'your new data or [POST] here',
		".": '~~~',
		"..": '~~~',
		"...": '~~~',
		"....": '~~~',
		".....": '~~~',
	}
})