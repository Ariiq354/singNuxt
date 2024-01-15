<template>
  <div class="h-screen bg-purple-900 p-5 pt-8 w-72 md:flex hidden flex-col">
    <div class="text-white flex gap-2 items-center text-xl font-bold uppercase">
      <NuxtImg src="/logo.png" class="w-16" width="900" />
      <div>Dashboard</div>
    </div>
    <div class="pt-6 text-white">
      <NuxtLink
        to="/dashboard"
        class="hover:bg-blue-200 hover:text-purple-900 transition-all duration-300 flex rounded-md p-2 cursor-pointer items-center gap-2 text-xl"
      >
        <UIcon name="i-material-symbols-space-dashboard" />
        <div class="flex items-center font-semibold tracking-wide">
          Dashboard
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
  .router-link-active {
    background-color: rgb(191 219 254);
    color: rgb(88 28 135);
  }
</style>
