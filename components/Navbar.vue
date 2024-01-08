<script lang="ts" setup>
  const isOpen = ref(false);
</script>

<template>
  <nav class="bg-eastern-blue-500 sticky top-0">
    <UContainer class="flex justify-between py-4">
      <div>
        <NuxtImg src="/logoPutih.png" width="150" />
      </div>
      <div
        class="justify-between items-center gap-12 text-white tracking-wider md:flex hidden"
      >
        <NuxtLink to="/">Beranda</NuxtLink>
        <NuxtLink to="/layanan">Layanan</NuxtLink>
        <NuxtLink to="/tentangkami">Tentang Kami</NuxtLink>
        <NuxtLink to="/kontak">Kontak</NuxtLink>
      </div>
      <div class="flex items-center gap-2">
        <UButton
          to="/login"
          class="py-2 text-eastern-blue-700 bg-white hover:text-white"
        >
          Sign Up
        </UButton>
        <UButton
          icon="i-heroicons-bars-3-20-solid"
          class="md:hidden block"
          @click="isOpen = true"
        />
      </div>
    </UContainer>
  </nav>
  <USlideover v-model="isOpen">
    <UCard
      class="flex flex-col flex-1"
      :ui="{
        body: { base: 'flex-1' },
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Navigation Menu
          </h3>
          <UButton
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpen = false"
          />
        </div>
      </template>

      <div class="h-full flex flex-col gap-4">
        <NuxtLink to="/" @click="isOpen = false">Beranda</NuxtLink>
        <NuxtLink to="/layanan" @click="isOpen = false">Layanan</NuxtLink>
        <NuxtLink to="/tentangkami" @click="isOpen = false"
          >Tentang Kami</NuxtLink
        >
        <NuxtLink to="/kontak" @click="isOpen = false">Kontak</NuxtLink>
      </div>
    </UCard>
  </USlideover>
</template>

<style scoped>
  .router-link-active {
    opacity: 70%;
  }
</style>
