<script lang="ts" setup>
  import type { FormSubmitEvent } from "#ui/types";

  const emit = defineEmits(["previous", "next"]);
  const props = defineProps<{
    initialdata: informasiSchema | null;
  }>();

  const informasi = useInformasi();

  const { value: state } = computed(() =>
    props.initialdata
      ? ref(props.initialdata)
      : ref({
          jumlah_saudara: undefined,
          anak_ke: undefined,
          suku: undefined,
          pendidikan_terakhir: undefined,
          jurusan_pendidikan: undefined,
          pekerjaan: undefined,
          tinggi: undefined,
          berat: undefined,
          hobi: undefined,
          cerita: undefined,
        })
  );

  async function onSubmit(event: FormSubmitEvent<informasiSchema>) {
    informasi.value.jumlah_saudara = event.data.jumlah_saudara;
    informasi.value.anak_ke = event.data.anak_ke;
    informasi.value.suku = event.data.suku;
    informasi.value.pendidikan_terakhir = event.data.pendidikan_terakhir;
    informasi.value.jurusan_pendidikan = event.data.jurusan_pendidikan;
    informasi.value.pekerjaan = event.data.pekerjaan;
    informasi.value.tinggi = event.data.tinggi;
    informasi.value.berat = event.data.berat;
    informasi.value.hobi = event.data.hobi;
    informasi.value.cerita = event.data.cerita;
    emit("next");
  }
</script>

<template>
  <div class="w-full h-full">
    <UForm
      :schema="informasiSchemaZod"
      :state="state"
      class="space-y-8"
      @submit="onSubmit"
    >
      <UFormGroup label="Jumlah Saudara" name="jumlah_saudara">
        <UInput v-model="state.jumlah_saudara" type="number" placeholder="0" />
      </UFormGroup>
      <UFormGroup label="Anak Ke" name="anak_ke">
        <UInput v-model="state.anak_ke" type="number" placeholder="0" />
      </UFormGroup>
      <UFormGroup label="Suku" name="suku">
        <UInput v-model="state.suku" placeholder="Silahkan isi suku" />
      </UFormGroup>
      <UFormGroup label="Pendidikan Terakhir" name="pendidikan_terakhir">
        <UInput
          v-model="state.pendidikan_terakhir"
          placeholder="Silahkan isi pendidikan terakhir"
        />
      </UFormGroup>
      <UFormGroup label="Jurusan Pendidikan" name="jurusan_pendidikan">
        <UInput
          v-model="state.jurusan_pendidikan"
          placeholder="Silahkan isi jurusan pendidikan"
        />
      </UFormGroup>
      <UFormGroup label="Pekerjaan" name="pekerjaan">
        <UInput
          v-model="state.pekerjaan"
          placeholder="Silahkan isi pekerjaan"
        />
      </UFormGroup>
      <UFormGroup label="Tinggi" name="tinggi">
        <UInput v-model="state.tinggi" type="number" placeholder="0" />
      </UFormGroup>
      <UFormGroup label="Berat" name="berat">
        <UInput v-model="state.berat" type="number" placeholder="0" />
      </UFormGroup>
      <UFormGroup label="Hobi" name="hobi">
        <UInput v-model="state.hobi" placeholder="Silahkan isi hobi" />
      </UFormGroup>
      <UFormGroup label="Ceritakan tentang diri anda" name="cerita">
        <UTextarea v-model="state.cerita" :rows="6" />
      </UFormGroup>

      <div class="flex justify-between">
        <UButton @click="emit('previous')"> Previous Step </UButton>
        <UButton type="submit"> Next Step </UButton>
      </div>
    </UForm>
  </div>
</template>
