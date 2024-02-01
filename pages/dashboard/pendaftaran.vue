<script lang="ts" setup>
  definePageMeta({
    middleware: "protected",
  });

  const user = useUser();
  const { data } = await useFetch("/api/form/getUser", {
    method: "POST",
    body: {
      userId: user.value?.id,
    },
  });

  const identitasData = computed(() =>
    data.value
      ? {
          nama_lengkap: data.value.nama_lengkap,
          nama_panggilan: data.value.nama_panggilan,
          email: data.value.email,
          no_telepon: data.value.no_telepon,
          tempat_lahir: data.value.tempat_lahir,
          tanggal_lahir: data.value.tanggal_lahir.split("T")[0],
          gender: data.value.gender,
          status_pernikahan: data.value.status_pernikahan,
        }
      : null
  );

  const alamatData = computed(() =>
    data.value
      ? {
          provinsi: data.value.provinsi,
          kabupaten_kota: data.value.kabupaten_kota,
          kecamatan: data.value.kecamatan,
          kelurahan_desa: data.value.kelurahan_desa,
          alamat: data.value.alamat,
          status_tempat_tinggal: data.value.status_tempat_tinggal,
        }
      : null
  );

  const informasiData = computed(() =>
    data.value
      ? {
          jumlah_saudara: data.value.jumlah_saudara,
          anak_ke: data.value.anak_ke,
          suku: data.value.suku,
          pendidikan_terakhir: data.value.pendidikan_terakhir,
          jurusan_pendidikan: data.value.jurusan_pendidikan,
          pekerjaan: data.value.pekerjaan,
          tinggi: data.value.tinggi,
          berat: data.value.berat,
          hobi: data.value.hobi,
          cerita: data.value.cerita,
        }
      : null
  );

  const kriteriaData = computed(() =>
    data.value
      ? {
          kriteria: data.value.kriteria,
        }
      : null
  );

  const dokumenData = computed(() =>
    data.value
      ? {
          path_image: data.value.path_image,
        }
      : null
  );

  const formState = ref(1);
  const doneState = ref(1);

  function nextPage() {
    formState.value += 1;
    if (formState.value > doneState.value) {
      doneState.value += 1;
    }
  }
</script>

<template>
  <UContainer class="py-4">
    <div class="text-xl mb-2">Pembaharuan Informasi Akun</div>
    <div class="bg-white rounded-lg w-full flex border-2 px-4 py-5 divide-x-2">
      <div class="flex-1 flex flex-col gap-2 pr-4">
        <UButton
          variant="ghost"
          @click="formState = 1"
          :class="{
            'bg-eastern-blue-50': formState === 1,
            'flex text-black disabled:opacity-50': true,
          }"
        >
          <div>
            <UIcon
              name="i-material-symbols-identity-platform-outline"
              class="text-4xl"
            />
          </div>
          <div class="flex flex-col text-start">
            <h1 class="text-lg">Identitas Pribadi</h1>
            <p class="opacity-50 font-normal">Lengkapi Informasi Pribadi</p>
          </div>
        </UButton>
        <UButton
          variant="ghost"
          @click="formState = 2"
          :class="{
            'bg-eastern-blue-50': formState === 2,
            'flex text-black disabled:opacity-50': true,
          }"
          :disabled="doneState < 2"
        >
          <div>
            <UIcon
              name="i-material-symbols:home-pin-outline-rounded"
              class="text-4xl"
            />
          </div>
          <div class="flex flex-col text-start">
            <h1 class="text-lg">Alamat</h1>
            <p class="opacity-50 font-normal">
              Lengkapi informasi Alamat Domisili
            </p>
          </div>
        </UButton>
        <UButton
          variant="ghost"
          @click="formState = 3"
          :class="{
            'bg-eastern-blue-50': formState === 3,
            'flex text-black disabled:opacity-50': true,
          }"
          :disabled="doneState < 3"
        >
          <div>
            <UIcon
              name="i-material-symbols-person-add-outline"
              class="text-4xl"
            />
          </div>
          <div class="flex flex-col text-start">
            <h1 class="text-lg">Informasi Tambahan</h1>
            <p class="opacity-50 font-normal">Lengkapi informasi tambahan</p>
          </div>
        </UButton>
        <UButton
          variant="ghost"
          @click="formState = 4"
          :class="{
            'bg-eastern-blue-50': formState === 4,
            'flex text-black disabled:opacity-50': true,
          }"
          :disabled="doneState < 4"
        >
          <div>
            <UIcon
              name="i-material-symbols-person-search-outline-rounded"
              class="text-4xl"
            />
          </div>
          <div class="flex flex-col text-start">
            <h1 class="text-lg">Kriteria pasangan</h1>
            <p class="opacity-50 font-normal">Lengkapi informasi kriteria</p>
          </div>
        </UButton>
        <UButton
          variant="ghost"
          @click="formState = 5"
          :class="{
            'bg-eastern-blue-50': formState === 5,
            'flex text-black disabled:opacity-50': true,
          }"
          :disabled="doneState < 5"
        >
          <div>
            <UIcon
              name="i-material-symbols-file-copy-outline-rounded"
              class="text-4xl"
            />
          </div>
          <div class="flex flex-col text-start">
            <h1 class="text-lg">Dokumen Pribadi</h1>
            <p class="opacity-50 font-normal">Lengkapi dokumen pribadi</p>
          </div>
        </UButton>
        <UButton
          variant="ghost"
          @click="formState = 6"
          :class="{
            'bg-eastern-blue-50': formState === 6,
            'flex text-black disabled:opacity-50': true,
          }"
          :disabled="doneState < 6"
        >
          <div>
            <UIcon
              name="i-material-symbols-cloud-done-outline-rounded"
              class="text-4xl"
            />
          </div>
          <div class="flex flex-col text-start">
            <h1 class="text-lg">Selesai!</h1>
            <p class="opacity-50 font-normal">Review dan Submit</p>
          </div>
        </UButton>
      </div>
      <div class="flex-[2] pl-4">
        <FormIdentitas
          v-if="formState == 1"
          @next="nextPage"
          :initialdata="identitasData"
        />
        <FormAlamat
          v-if="formState == 2"
          @previous="formState -= 1"
          @next="nextPage"
          :initialdata="alamatData"
        />
        <FormInformasi
          v-if="formState == 3"
          @previous="formState -= 1"
          @next="nextPage"
          :initialdata="informasiData"
        />
        <FormKriteria
          v-if="formState == 4"
          @previous="formState -= 1"
          @next="nextPage"
          :initialdata="kriteriaData"
        />
        <FormDokumen
          v-if="formState == 5"
          @previous="formState -= 1"
          @next="nextPage"
          :initialdata="dokumenData"
        />
        <FormReview v-if="formState == 6" @previous="formState -= 1" />
      </div>
    </div>
  </UContainer>
</template>
