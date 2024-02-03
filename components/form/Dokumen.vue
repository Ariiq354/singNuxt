<script lang="ts" setup>
  import type { FormSubmitEvent } from "#ui/types";

  const emit = defineEmits(["next", "previous"]);

  const dokumen = useDokumen();

  const state = dokumen.value;

  async function onSubmit(event: FormSubmitEvent<dokumenZ>) {
    emit("next");
  }
</script>

<template>
  <div class="w-full h-full">
    <UForm
      :schema="dokumenSchema"
      :state="state"
      class="space-y-8"
      @submit="onSubmit"
    >
      <UFormGroup label="Upload Foto" name="path_image">
        <UiImageUpload
          :value="state.path_image ? state.path_image : null"
          @onChange="(res) => (state.path_image = res)"
          @onRemove="state.path_image = undefined"
        />
      </UFormGroup>

      <div class="flex justify-between">
        <UButton @click="emit('previous')"> Previous Step </UButton>
        <UButton type="submit"> Next Step </UButton>
      </div>
    </UForm>
  </div>
</template>
