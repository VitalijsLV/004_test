import os from 'os'
import path from 'path'

export default defineEventHandler(async (event) => {
	console.log(path)
	return {
		test1: 'test1',
		osArch: os.arch(),
		userInfo: os.userInfo(),
		//filename: __filename,
		api: "api works!"
	}
})