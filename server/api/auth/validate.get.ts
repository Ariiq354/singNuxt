export default defineEventHandler(async (event) => {
  if (event.context.user) {
    return event.context.user.username;
  } else {
    return null;
  }
});
