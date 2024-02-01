<template>
  <div
    class="min-h-screen bg-white p-4 w-72 md:flex hidden flex-col shadow-xl z-10"
  >
    <div class="flex gap-2 items-center">
      <NuxtImg src="/logo.png" class="w-12" width="900" />
      <div class="text-xl font-bold">Keluarga Bahagia</div>
    </div>
    <div class="pt-6 flex flex-col gap-2">
      <div class="opacity-50 text-md font-semibold">DASHBOARD</div>
      <NuxtLink
        to="/dashboard"
        class="hover:bg-eastern-blue-400 hover:text-white transition-all duration-300 flex rounded-md p-2 cursor-pointer items-center gap-2 text-md text-eastern-blue-700"
      >
        <UIcon name="i-material-symbols-space-dashboard" />
        <div class="flex items-center">Dashboard</div>
      </NuxtLink>
      <div class="opacity-50 text-md font-semibold">USER</div>
      <NuxtLink
        to="/dashboard/pendaftaran"
        class="hover:bg-eastern-blue-400 hover:text-white transition-all duration-300 flex rounded-md p-2 cursor-pointer items-center gap-2 text-md text-eastern-blue-700"
      >
        <UIcon name="i-material-symbols-space-dashboard" />
        <div class="flex items-center">Edit Profile</div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
  .router-link-active {
    background-color: rgb(92 170 180);
    color: rgb(255 255 2525);
  }
</style>
