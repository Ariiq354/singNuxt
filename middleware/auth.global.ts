export default defineNuxtRouteMiddleware(async () => {
  const user = useUser();
  const data = await $fetch("/api/auth/user");
  user.value = data;
});
