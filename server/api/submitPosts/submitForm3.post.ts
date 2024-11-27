// take date from post

import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
	if(event){
	// check event's body data  
		const body = await readBody(event)
		const text = JSON.stringify(body)
		const w = fs.createWriteStream(path.resolve('server', 'api', 'submitPosts', 'file2.txt'), {encoding: 'utf8', flags: 'a'})

		w.on('open', () => {
		  w.write(text)

		  //process.nextTick(() => {
			//w.write(text);
			w.end()
		  //})
		})
	}
})

