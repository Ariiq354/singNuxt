<script lang="ts" setup>
  definePageMeta({
    middleware: "protected",
  });

  const user = await useAuthenticatedUser();
</script>

<template>
  <h1>Profile</h1>
  <p>User id: {{ user.userId }}</p>
  <p>Username: {{ user.username }}</p>
  <p>Role: {{ user.role }}</p>
</template>
