<script lang="ts" setup>
  import type { FormSubmitEvent } from "#ui/types";

  const emit = defineEmits(["previous", "next"]);

  function getNameByCode(data: any, code: string) {
    const result: any = data.find((item: any) => item.code === code);
    return result.name;
  }

  const alamat = useAlamat();
  const wilayah = useWilayah();
  const { data: provinsi } = await useFetch("/api/wilayah/provinsi");
  const kota = ref();
  const kecamatan = ref();
  const desa = ref();

  async function getKota(provId: string | undefined) {
    const data = await $fetch(`/api/wilayah/kota/${provId}`);
    kota.value = data;
  }

  async function getKecamatan(kotaId: string | undefined) {
    const data = await $fetch(`/api/wilayah/kecamatan/${kotaId}`);
    kecamatan.value = data;
  }

  async function getDesa(kecamatanId: string | undefined) {
    const data = await $fetch(`/api/wilayah/desa/${kecamatanId}`);
    desa.value = data;
  }

  const statusOptions = [
    { label: "Rumah Pribadi", value: 1 },
    { label: "Rumah Orang tua", value: 2 },
    { label: "Rumah Dinas", value: 3 },
    { label: "Sewa", value: 4 },
  ];

  if (alamat.value.provinsi) {
    getKota(alamat.value.provinsi);
    getKecamatan(alamat.value.kabupaten_kota);
    getDesa(alamat.value.kecamatan);
  }

  const state = alamat.value;

  async function onSubmit(event: FormSubmitEvent<alamatZ>) {
    wilayah.value.provinsi = getNameByCode(provinsi.value, event.data.provinsi);
    wilayah.value.kota = getNameByCode(kota.value, event.data.kabupaten_kota);
    wilayah.value.kecamatan = getNameByCode(
      kecamatan.value,
      event.data.kecamatan
    );
    wilayah.value.desa = getNameByCode(desa.value, event.data.kelurahan_desa);
    emit("next");
  }
</script>

<template>
  <div class="w-full h-full">
    <UForm
      :schema="alamatSchema"
      :state="state"
      class="space-y-8"
      @submit="onSubmit"
    >
      <UFormGroup label="Provinsi" name="provinsi">
        <USelectMenu
          v-model="state.provinsi"
          searchable
          placeholder="Silahkan pilih provinsi"
          :options="provinsi!"
          value-attribute="code"
          option-attribute="name"
          @change="getKota(state.provinsi)"
        />
      </UFormGroup>
      <UFormGroup label="Kabupaten/Kota" name="kabupaten_kota">
        <USelectMenu
          v-model="state.kabupaten_kota"
          searchable
          placeholder="Silahkan pilih kabupaten/kota"
          :options="kota"
          value-attribute="code"
          option-attribute="name"
          @change="getKecamatan(state.kabupaten_kota)"
        />
      </UFormGroup>
      <UFormGroup label="Kecamatan" name="kecamatan">
        <USelectMenu
          v-model="state.kecamatan"
          searchable
          placeholder="Silahkan pilih kecamatan"
          :options="kecamatan"
          value-attribute="code"
          option-attribute="name"
          @change="getDesa(state.kecamatan)"
        />
      </UFormGroup>
      <UFormGroup label="Kelurahan/Desa" name="kelurahan_desa">
        <USelectMenu
          v-model="state.kelurahan_desa"
          searchable
          placeholder="Silahkan pilih kelurahan/desa"
          :options="desa"
          value-attribute="code"
          option-attribute="name"
        />
      </UFormGroup>

      <UFormGroup label="Alamat (Jalan dan Nomor)" name="nama_lengkap">
        <UInput v-model="state.alamat" placeholder="Silahkan isi alamat" />
      </UFormGroup>

      <UFormGroup label="Status Tempat Tinggal" name="status_tempat_tinggal">
        <USelectMenu
          v-model="state.status_tempat_tinggal"
          searchable
          :options="statusOptions"
          value-attribute="value"
          placeholder="Silahkan pilih status tempat tinggal"
        />
      </UFormGroup>

      <div class="flex justify-between">
        <UButton @click="emit('previous')"> Previous Step </UButton>
        <UButton type="submit"> Next Step </UButton>
      </div>
    </UForm>
  </div>
</template>
