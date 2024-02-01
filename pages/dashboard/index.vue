<script lang="ts" setup>
  definePageMeta({
    middleware: "protected",
  });

  const user = useUser();
  if (user.value?.status === 0) {
    await navigateTo("/dashboard/pendaftaran");
  }

  const { data } = await useFetch("/api/form/getUser", {
    method: "POST",
    body: {
      userId: user.value?.id,
    },
  });
</script>

<template>
  <UContainer class="mt-4">
    <UCard>
      <div class="w-full flex gap-4">
        <div class="flex-1">
          <NuxtImg
            class="object-cover max-w-48 max-h-48"
            alt="User Image"
            :src="data.path_image"
          />
          <h1 class="font-semibold">Identitas Diri</h1>
          <p>Nama lengkap: {{ data.nama_lengkap }}</p>
          <p>Nama panggilan: {{ data.nama_panggilan }}</p>
          <p>Email: {{ data.email }}</p>
          <p>No Whatsapp: {{ data.no_telepon }}</p>
          <p>Tempat lahir: {{ data.tempat_lahir }}</p>
          <p>Tanggal lahir: {{ data.tanggal_lahir }}</p>
          <p>Gender: {{ data.gender === 1 ? "Laki - laki" : "Perempuan" }}</p>
          <p>
            Status pernikahan:
            {{
              data.status_pernikahan === 1
                ? "Belum Kawin"
                : data.status_pernikahan === 2
                ? "Sudah Kawin"
                : data.status_pernikahan === 3
                ? "Cerai Hidup"
                : "Cerai Mati"
            }}
          </p>
        </div>
        <div class="flex-1">
          <h1 class="font-semibold">Alamat</h1>
          <p>Provinsi: {{ data.provinsi }}</p>
          <p>Kabupate/Kota: {{ data.kabupaten_kota }}</p>
          <p>Kecamatan: {{ data.kecamatan }}</p>
          <p>Kelurahan/Desa: {{ data.kelurahan_desa }}</p>
          <p>Alamat: {{ data.alamat }}</p>
          <p>
            Status Tempat Tinggal:
            {{
              data.status_tempat_tinggal === 1
                ? "Rumah Pribadi"
                : data.status_tempat_tinggal === 2
                ? "Rumah Orang Tua"
                : data.status_tempat_tinggal === 3
                ? "Rumah Dinas"
                : "Sewa"
            }}
          </p>
          <h1 class="font-semibold mt-2">Informasi Tambahan</h1>
          <p>Jumlah Saudara: {{ data.jumlah_saudara }}</p>
          <p>Anak Ke: {{ data.anak_ke }}</p>
          <p>Suku: {{ data.suku }}</p>
          <p>Pendidikan Terakhir: {{ data.pendidikan_terakhir }}</p>
          <p>Jurusan Pendidikan: {{ data.jurusan_pendidikan }}</p>
          <p>Pekerjaan: {{ data.pekerjaan }}</p>
          <p>Tinggi: {{ data.tinggi }}</p>
          <p>Berat: {{ data.berat }}</p>
          <p>Hobi: {{ data.hobi }}</p>
          <p>Cerita: {{ data.cerita }}</p>

          <p class="mt-2">
            <span class="font-semibold">Kriteria:</span> {{ data.kriteria }}
          </p>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
