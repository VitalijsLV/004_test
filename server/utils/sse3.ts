////~/server/api/sse.ts
////import { myHooks } from './hooks'
// export default defineEventHandler(async (event) => {
  // if (!process.dev) return { disabled: true }
  
  // setHeader(event, 'cache-control', 'no-cache')
  // setHeader(event, 'connection', 'keep-alive')
  // setHeader(event, 'content-type', 'text/event-stream')
  // setResponseStatus(event, 200)

  // let counter = 0
  // let data = {a:1, b:2, c:3, d:4}
  // event.node.res.write(`id: ${++counter}\n`);
  // event.node.res.write(`data: ${JSON.stringify(data)}\n\n`);
	
  // const sendEvent = (data) => {
    // data = {c:3, d:4}
    // event.node.res.write(`id: ${++counter}\n`);
    // event.node.res.write(`data: ${JSON.stringify(data)}\n\n`);
  // }

  // myHooks.hook('sse:event', sendEvent)
  // myHooks.callHook("sse:event", { message: "Hello!" })

  // event._handled = true;
// })