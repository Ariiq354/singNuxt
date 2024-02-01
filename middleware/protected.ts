export default defineNuxtRouteMiddleware(async () => {
  // if (process.server) return;
  const { data } = await useFetch("/api/auth/validate");
  if (!data.value) {
    return navigateTo("/login");
  }
});
