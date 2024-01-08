<template>
  <footer class="bg-eastern-blue-500">
    <UContainer class="grid md:grid-cols-12 text-white py-12 gap-7">
      <div class="flex flex-col gap-4 lg:col-span-4 col-span-12">
        <NuxtImg src="/logoPutih.png" width="200" />
        <p class="text-justify opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quo
          ipsum dignissimos. Totam ab dolorem accusantium nesciunt tempora,
          soluta perferendis suscipit eveniet ut culpa, in nam excepturi eius.
          Necessitatibus, quos.
        </p>
      </div>
      <div class="flex flex-col gap-6 lg:col-span-2 md:col-span-4 col-span-6">
        <h1 class="text-2xl font-semibold tracking-wider">Pages</h1>
        <div class="flex flex-col opacity-80 gap-2">
          <NuxtLink to="/">Beranda</NuxtLink>
          <NuxtLink to="/layanan">Layanan</NuxtLink>
          <NuxtLink to="/tentangkami">Tentang Kami</NuxtLink>
          <NuxtLink to="/kontak">Kontak</NuxtLink>
        </div>
      </div>
      <div class="flex flex-col gap-4 lg:col-span-3 md:col-span-4 col-span-6">
        <h1 class="text-2xl font-semibold tracking-wider">Contact Us</h1>
        <div class="flex flex-col opacity-80 gap-2">
          <div class="flex gap-2 items-center">
            <UIcon name="i-heroicons-phone-solid" />
            <p>123-123-123-123</p>
          </div>
          <div class="flex gap-2 items-center">
            <UIcon name="i-heroicons-envelope-20-solid" />
            <p>example@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-4 lg:col-span-3 md:col-span-4 col-span-12">
        <h1 class="text-xl font-semibold tracking-wider">Links</h1>
        <div class="flex gap-4">
          <UIcon name="i-devicon-facebook" />
          <UIcon name="i-skill-icons-instagram" />
          <UIcon name="i-logos-youtube-icon" />
        </div>
      </div>
    </UContainer>
    <UDivider />
    <UContainer>
      <div class="text-white tracking-wider flex justify-center w-full py-6">
        Copyright @ 2023 Keluarga Bahagia. All right Reserved.
      </div>
    </UContainer>
  </footer>
</template>
