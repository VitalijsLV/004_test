export default defineEventHandler(async (event) => {
  const eventStream = createEventStream(event);

  let st_count = 0;
  const interval = setInterval(async () => {
    await eventStream.push('Hello world '+ st_count+'');
	st_count++
  }, 1000);

  eventStream.onClosed(() => {
    clearInterval(interval);
  });

  return eventStream.send();
});