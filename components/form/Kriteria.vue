<script lang="ts" setup>
  import type { FormSubmitEvent } from "#ui/types";

  const emit = defineEmits(["previous", "next"]);
  const props = defineProps<{
    initialdata: kriteriaSchema | null;
  }>();

  const kriteria = useKriteria();

  const { value: state } = computed(() =>
    props.initialdata
      ? ref(props.initialdata)
      : ref({
          kriteria: undefined,
        })
  );

  async function onSubmit(event: FormSubmitEvent<kriteriaSchema>) {
    kriteria.value.kriteria = event.data.kriteria;
    emit("next");
  }
</script>

<template>
  <div class="w-full h-full">
    <UForm
      :schema="kriteriaSchemaZod"
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
