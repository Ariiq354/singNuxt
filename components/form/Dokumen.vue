<script lang="ts" setup>
  import type { FormSubmitEvent } from "#ui/types";

  const emit = defineEmits(["next", "previous"]);
  const props = defineProps<{
    initialdata: dokumenSchema | null;
  }>();

  const dokumen = useDokumen();

  const { value: state } = computed(() =>
    props.initialdata
      ? ref(props.initialdata)
      : ref({
          path_image: undefined,
        })
  );

  async function onSubmit(event: FormSubmitEvent<dokumenSchema>) {
    dokumen.value.path_image = event.data.path_image;
    emit("next");
  }
</script>

<template>
  <div class="w-full h-full">
    <UForm
      :schema="dokumenSchemaZod"
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
