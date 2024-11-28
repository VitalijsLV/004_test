// take date from post

import fs from 'fs'
import path from 'path'

export default defineEventHandler(async (event) => {
	if(event){
	// here need security to check event and body data
		
		// const body = await readBody(event)
		// const text = JSON.stringify(body)
		// fs.appendFile(path.resolve('server', 'api', 'submitPosts', 'file2.txt'), text, err => {
			// if (err) {
				// console.error(err);
				// } else {
				//////// done!
			// }
		// })
		
		
		
		const body = await readBody(event)
		const text = JSON.stringify(body)
		
		fs.writeFileSync(path.resolve('server', 'api', 'submitPosts', 'file2.txt'), text, {encoding: 'utf8', flags: 'a'}, err => {
			if (err) {
				console.error(err);
			} else {
				////////// file written successfully
			}
		})
	}
})

