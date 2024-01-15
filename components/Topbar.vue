<script lang="ts" setup>
  const handleSubmit = async (e: Event) => {
    await $fetch("/api/logout", {
      method: "POST",
      redirect: "manual", // ignore redirect responses
    });
    await navigateTo("/login");
  };
</script>

<template>
  <div class="bg-slate-300 w-full p-4 flex justify-end">
    <UButton variant="ghost" @click="handleSubmit" class="text-black"
      >Sign Out</UButton
    >
  </div>
</template>
