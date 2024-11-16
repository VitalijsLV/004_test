// take date from post

import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
	if(event){
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

		
		if(body.test > 100){
			let fsLooking = fs
			return {body, Yc: 'Jesus is the King of Glory'}
		}
		else{
			return {Yb: 'Jesus is the King of Glory', x: 'body.test < 100', a:66 }
		}
	}
})

