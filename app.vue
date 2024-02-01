<script lang="ts" setup>
  const user = useUser();
  const { data } = await useFetch("/api/auth/user");
  user.value = data.value;
</script>

<template>
  <NuxtLayout>
    <div>
      <NuxtPage />
      <UNotifications />
    </div>
  </NuxtLayout>
</template>
