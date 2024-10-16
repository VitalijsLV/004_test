import os from 'os'

export default defineEventHandler(async (event) => {
	return {
		test1: 'test1',
		osArch: os.arch(),
		userInfo: os.userInfo(),
		api: "api works!"
	}
})