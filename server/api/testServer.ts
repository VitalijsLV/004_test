//server route

import path from 'path'
import fs from 'fs'
import os from 'os'

export default defineEventHandler(async (event) => {

	const readText = fs.readFileSync(path.resolve("textdoc1.txt"), "utf8", (err, data) => {
		if(err){
			console.error("X Error reading file: ", err)
			return
		}
		const regEx = /\w+/g
		const dataResult = data.match(regEx)
		
		//console.log('----')
		//console.log(dataResult)
		return dataResult
	})
	
	return {
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
		DATA_FROM_FILE: readText
	}
})