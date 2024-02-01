<script lang="ts" setup>
  defineProps<{
    value: string | null;
  }>();

  const emit = defineEmits(["onChange", "onRemove"]);

  function onUpload(res: any) {
    emit("onChange", res.value.info.secure_url);
  }
</script>

<template>
  <div v-if="value" class="relative rounded-md overflow-hidden mb-4">
    <div className="z-10 absolute top-2 right-2">
      <UButton
        type="button"
        color="red"
        variant="solid"
        size="sm"
        @click="emit('onRemove')"
      >
        <UIcon name="i-lucide-trash-2" className="h-4 w-4" />
      </UButton>
    </div>
    <NuxtImg class="object-cover w-full h-full" alt="Image" :src="value" />
  </div>
  <div>
    <CldUploadWidget
      v-slot="{ open }"
      :onUpload="onUpload"
      uploadPreset="m1hjmre2"
    >
      <UButton @click="open" icon="i-lucide-image-plus"> Upload </UButton>
    </CldUploadWidget>
  </div>
</template>
