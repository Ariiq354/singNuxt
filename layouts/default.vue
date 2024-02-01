<script lang="ts" setup></script>

<template>
  <div class="flex">
    <Sidebar />
    <div class="flex flex-col flex-1 bg-slate-50">
      <Topbar />
      <div class="min-h-screen">
        <slot />
      </div>
      <div class="bg-white w-full p-4">2022 © B3 IT Services</div>
    </div>
  </div>
</template>
