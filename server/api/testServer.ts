//server route

import os from 'os'

export default defineEventHandler(async (event) => {
	return {
		is: '\$fetch(\'/api/testServer\')',
		"server route": 'server/api/testServer.ts',
		api: "api works!",
		event: event,
		newData: 'your new data here'
	}
})