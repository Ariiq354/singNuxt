<script lang="ts" setup></script>

<template>
  <div class="flex">
    <Sidebar />
    <div class="flex flex-col flex-1">
      <Topbar />
      <slot />
    </div>
  </div>
</template>
