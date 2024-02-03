export default defineNuxtRouteMiddleware(async () => {
  const { data } = await useFetch("/api/auth/validate");
  if (data.value) return navigateTo("/dashboard");
});
