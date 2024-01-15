export default defineNuxtRouteMiddleware(async () => {
  const user = useUser();
  if (!user.value) return navigateTo("/login");

  if (user.value.role !== 2) return navigateTo("/dashboard/user");
});
