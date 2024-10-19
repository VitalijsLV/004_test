export default defineEventHandler(async (event) => {
  const eventStream = createEventStream(event);

  const interval = setInterval(async () => {
    await eventStream.push('Hello world');
  }, 1000);

  eventStream.onClosed(() => {
    clearInterval(interval);
  });

  return eventStream.send();
});