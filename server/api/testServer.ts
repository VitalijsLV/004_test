import os from 'os'

export default defineEventHandler(async (event) => {
	console.log('777')
	return {
		test1: 'test1',
		osArch: os.arch(),
		userInfo: os.userInfo(),
		//filename: __filename,
		api: "api works!"
	}
})