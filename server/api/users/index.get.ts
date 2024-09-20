export default defineEventHandler(async(event) =>{
	return new Promise((resolve)=>{
		setTimeout(()=>{
			resolve(
				{
					myEname3: [
						"Vitaliy Lavrinovich",
						"3: server/api/users/index.get.ts"
					],
				}
			)
		},2000)
	})
})