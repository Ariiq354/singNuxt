<script lang="ts" setup>
  definePageMeta({
    middleware: ["protected"],
  });

  const user = await useAuthenticatedUser();

  const handleSubmit = async (e: Event) => {
    await $fetch("/api/logout", {
      method: "POST",
      redirect: "manual", // ignore redirect responses
    });
    await navigateTo("/login");
  };
</script>

<template>
  <h1>Profile</h1>
  <p>User id: {{ user.userId }}</p>
  <p>Username: {{ user.username }}</p>
  <UButton @click="handleSubmit">Sign Out</UButton>
</template>
