<script lang="ts" setup>
  const handleSubmit = async (e: Event) => {
    await $fetch("/api/auth/logout", {
      method: "POST",
    });
    await navigateTo("/login");
  };
</script>

<template>
  <div class="w-full p-4 flex justify-end bg-white shadow-lg">
    <UButton variant="ghost" @click="handleSubmit" class="text-black">
      Sign Out
    </UButton>
  </div>
</template>
