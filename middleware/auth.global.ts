export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = useUser();
  const { data, error } = await useFetch("/api/usersession");
  if (error.value) throw createError("Failed to fetch data");
  user.value = data.value?.user ?? null;
});
