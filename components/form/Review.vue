<script lang="ts" setup>
  const emit = defineEmits(["next", "previous"]);

  const user = useUser();
  const toast = useToast();
  const loading = ref(false);

  const identitas = useIdentitas();
  const alamat = useAlamat();
  const informasi = useInformasi();
  const dokumen = useDokumen();
  const kriteria = useKriteria();

  async function onSubmit() {
    const { data, pending } = await useFetch("/api/form/userDtl", {
      method: "POST",
      body: {
        identitas: identitas,
        alamat: alamat,
        informasi: informasi,
        kriteria: kriteria,
        dokumen: dokumen,
        userId: user.value?.id,
      },
      onRequest() {
        loading.value = true;
      },
      onResponse() {
        loading.value = false;
      },
    });

    if (data.value?.statusCode === 200) {
      toast.add({
        title: "Success",
        description: "User edited",
        icon: "i-heroicons-check-circle",
      });
      await navigateTo("/dashboard");
    }
  }
</script>

<template>
  <div class="w-full flex gap-4">
    <div class="flex-1">
      <NuxtImg
        class="object-cover max-w-48 max-h-48"
        alt="User Image"
        :src="dokumen.path_image"
      />
      <h1 class="font-semibold">Identitas</h1>
      <p>Nama lengkap: {{ identitas.nama_lengkap }}</p>
      <p>Nama panggilan: {{ identitas.nama_panggilan }}</p>
      <p>Email: {{ identitas.email }}</p>
      <p>No Whatsapp: {{ identitas.no_telepon }}</p>
      <p>Tempat lahir: {{ identitas.tempat_lahir }}</p>
      <p>Tanggal lahir: {{ identitas.tanggal_lahir }}</p>
      <p>Gender: {{ identitas.gender === 1 ? "Laki - laki" : "Perempuan" }}</p>
      <p>
        Status pernikahan:
        {{
          identitas.status_pernikahan === 1
            ? "Belum Kawin"
            : identitas.status_pernikahan === 2
            ? "Sudah Kawin"
            : identitas.status_pernikahan === 3
            ? "Cerai Hidup"
            : "Cerai Mati"
        }}
      </p>
    </div>
    <div class="flex-1">
      <h1 class="font-semibold">Alamat</h1>
      <p>Provinsi: {{ alamat.provinsi }}</p>
      <p>Kabupate/Kota: {{ alamat.kabupaten_kota }}</p>
      <p>Kecamatan: {{ alamat.kecamatan }}</p>
      <p>Kelurahan/Desa: {{ alamat.kelurahan_desa }}</p>
      <p>Alamat: {{ alamat.alamat }}</p>
      <p>
        Status Tempat Tinggal:
        {{
          alamat.status_tempat_tinggal === 1
            ? "Rumah Pribadi"
            : alamat.status_tempat_tinggal === 2
            ? "Rumah Orang Tua"
            : alamat.status_tempat_tinggal === 3
            ? "Rumah Dinas"
            : "Sewa"
        }}
      </p>
      <h1 class="font-semibold mt-2">Informasi Tambahan</h1>
      <p>Jumlah Saudara: {{ informasi.jumlah_saudara }}</p>
      <p>Anak Ke: {{ informasi.anak_ke }}</p>
      <p>Suku: {{ informasi.suku }}</p>
      <p>Pendidikan Terakhir: {{ informasi.pendidikan_terakhir }}</p>
      <p>Jurusan Pendidikan: {{ informasi.jurusan_pendidikan }}</p>
      <p>Pekerjaan: {{ informasi.pekerjaan }}</p>
      <p>Tinggi: {{ informasi.tinggi }}</p>
      <p>Berat: {{ informasi.berat }}</p>
      <p>Hobi: {{ informasi.hobi }}</p>
      <p>Cerita: {{ informasi.cerita }}</p>

      <p class="mt-2">
        <span class="font-semibold">Kriteria:</span> {{ kriteria.kriteria }}
      </p>
    </div>
  </div>

  <div class="flex justify-between">
    <UButton @click="emit('previous')" :loading="loading">
      Previous Step
    </UButton>
    <UButton type="button" @click="onSubmit" :loading="loading">
      Submit
    </UButton>
  </div>
</template>
