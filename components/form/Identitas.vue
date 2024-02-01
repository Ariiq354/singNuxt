<script setup lang="ts">
  import type { FormSubmitEvent } from "#ui/types";
  const props = defineProps<{
    initialdata: identitasSchema | null;
  }>();

  const emit = defineEmits(["next"]);
  const identitas = useIdentitas();

  const genderOptions = [
    { label: "Laki-laki", value: 1 },
    { label: "Perempuan", value: 2 },
  ];

  const statusOptions = [
    { label: "Belum kawin", value: 1 },
    { label: "Sudah kawin", value: 2 },
    { label: "Cerai hidup", value: 3 },
    { label: "Cerai mati", value: 4 },
  ];

  const { value: state } = computed(() =>
    props.initialdata
      ? ref({
          nama_lengkap: props.initialdata.nama_lengkap,
          nama_panggilan: props.initialdata.nama_panggilan,
          email: props.initialdata.email,
          no_telepon: props.initialdata.no_telepon,
          tempat_lahir: props.initialdata.tempat_lahir,
          tanggal_lahir: props.initialdata.tanggal_lahir,
          gender: props.initialdata.gender,
          status_pernikahan: props.initialdata.status_pernikahan,
        })
      : ref({
          nama_lengkap: undefined,
          nama_panggilan: undefined,
          email: undefined,
          no_telepon: undefined,
          tempat_lahir: undefined,
          tanggal_lahir: undefined,
          gender: undefined,
          status_pernikahan: undefined,
        })
  );

  async function onSubmit(event: FormSubmitEvent<identitasSchema>) {
    identitas.value.nama_lengkap = event.data.nama_lengkap;
    identitas.value.nama_panggilan = event.data.nama_panggilan;
    identitas.value.email = event.data.email;
    identitas.value.no_telepon = event.data.no_telepon;
    identitas.value.tempat_lahir = event.data.tempat_lahir;
    identitas.value.tanggal_lahir = new Date(event.data.tanggal_lahir);
    identitas.value.gender = event.data.gender;
    identitas.value.status_pernikahan = event.data.status_pernikahan;
    emit("next");
  }
</script>

<template>
  <div class="w-full h-full">
    <UForm
      :schema="identitasSchemaZod"
      :state="state"
      class="space-y-8"
      @submit="onSubmit"
    >
      <UFormGroup label="Nama Lengkap" name="nama_lengkap">
        <UInput
          v-model="state.nama_lengkap"
          placeholder="Silahkan isi nama lengkap"
        />
      </UFormGroup>

      <UFormGroup label="Nama Panggilan" name="nama_panggilan">
        <UInput
          v-model="state.nama_panggilan"
          placeholder="Silahkan isi nama panggilan"
        />
      </UFormGroup>

      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" placeholder="Silahkan isi email" />
      </UFormGroup>

      <UFormGroup label="Nomor Whatsapp" name="no_telepon">
        <UInput
          v-model="state.no_telepon"
          placeholder="Silahkan isi nomor Whatsapp"
        />
      </UFormGroup>

      <UFormGroup label="Tempat Lahir" name="tempat_lahir">
        <UInput
          v-model="state.tempat_lahir"
          placeholder="Silahkan isi tempat lahir"
        />
      </UFormGroup>

      <UFormGroup label="Tanggal Lahir" name="tanggal_lahir">
        <UInput v-model="state.tanggal_lahir" type="date" />
      </UFormGroup>

      <UFormGroup label="Gender" name="gender">
        <div class="flex flex-row gap-4">
          <URadio
            v-for="gender of genderOptions"
            :key="gender.value"
            v-model="state.gender"
            v-bind="gender"
          />
        </div>
      </UFormGroup>

      <UFormGroup label="Status Pernikahan" name="status_pernikahan">
        <USelectMenu
          v-model="state.status_pernikahan"
          :options="statusOptions"
          value-attribute="value"
          option-attribute="label"
          placeholder="Silahkan pilih status pernikahan"
        />
      </UFormGroup>

      <div class="flex justify-end">
        <UButton type="submit">Next Step</UButton>
      </div>
    </UForm>
  </div>
</template>
