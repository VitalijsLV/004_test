/*import { createEventStream } from '@nuxt/kit';

export default defineEventHandler(async (event) => {
  const eventStream = createEventStream(event);

  // Send a message every second
  const interval = setInterval(async () => {
    await eventStream.push('Hello world');
  }, 1000);

  // Cleanup the interval when the connection is terminated or the writer is closed
  eventStream.onClosed(() => {
    clearInterval(interval);
  });

  return eventStream.send();
});*/