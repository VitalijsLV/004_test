// take date from post

import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
	if(event){
	// here need security to check event and body data  
		const body = await readBody(event)
		const text = JSON.stringify(body)
		const w = fs.createWriteStream(path.resolve('server', 'api', 'submitPosts', 'file2.txt'), {encoding: 'utf8', flags: 'a'})

		w.on('open', () => {

		  //process.nextTick(() => {
			//w.write(text);
			w.end()
		  //})
		})
	}
})

