<script setup lang="ts">
  import type { FormSubmitEvent } from "#ui/types";

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

  const state = identitas.value;

  async function onSubmit(event: FormSubmitEvent<identitasZ>) {
    emit("next");
  }
</script>

<template>
  <div class="w-full h-full">
    <UForm
      :schema="identitasSchema"
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
