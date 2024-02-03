<script lang="ts" setup>
  import type { FormSubmitEvent } from "#ui/types";

  const emit = defineEmits(["previous", "next"]);
  const kriteria = useKriteria();

  const state = kriteria.value;

  async function onSubmit(event: FormSubmitEvent<kriteriaZ>) {
    emit("next");
  }
</script>

<template>
  <div class="w-full h-full">
    <UForm
      :schema="kriteriaSchema"
      :state="state"
      class="space-y-4"
      @submit="onSubmit"
    >
      <UFormGroup label="Kriteria pasangan" name="kriteria">
        <UTextarea
          v-model="state.kriteria"
          :rows="10"
          placeholder="Ceritakan tentang kriteria calon yang anda inginkan"
        />
      </UFormGroup>

      <div class="flex justify-between">
        <UButton @click="emit('previous')"> Previous Step </UButton>
        <UButton type="submit"> Next Step </UButton>
      </div>
    </UForm>
  </div>
</template>
