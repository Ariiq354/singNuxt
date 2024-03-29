<script lang="ts" setup>
  definePageMeta({
    layout: false,
  });

  import { z } from "zod";
  import type { FormSubmitEvent } from "#ui/types";

  const toast = useToast();
  const loading = ref(false);

  const schema = z.object({
    username: z.string().min(3, "Must be at least 3 characters"),
    password: z.string().min(8, "Must be at least 8 characters"),
  });

  type Schema = z.output<typeof schema>;

  const state = ref({
    username: undefined,
    password: undefined,
  });

  async function onSubmit(event: FormSubmitEvent<Schema>) {
    const { data } = await useFetch("/api/auth/signup", {
      method: "POST",
      body: {
        username: event.data.username,
        password: event.data.password,
      },
      onRequest() {
        loading.value = true;
      },
      onResponse() {
        loading.value = false;
      },
    });

    if (data.value?.statusCode !== 200) {
      toast.add({
        title: "Error",
        description: data.value?.statusMessage,
        icon: "i-heroicons-x-circle",
        color: "red",
      });
    } else {
      toast.add({
        title: "Success",
        description: data.value.statusMessage,
        icon: "i-heroicons-check-circle",
      });
      await navigateTo("/dashboard");
    }
  }
</script>

<template>
  <main class="bg-eastern-blue-100">
    <UContainer
      class="h-screen w-full flex items-center justify-center flex-col gap-12"
    >
      <NuxtImg src="/logoUtama.png" width="300" />
      <UCard class="w-full max-w-md">
        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <div class="font-bold text-2xl">Register</div>
          <UFormGroup label="Username" name="username">
            <UInput v-model="state.username" />
          </UFormGroup>

          <UFormGroup label="Password" name="password">
            <UInput v-model="state.password" type="password" />
          </UFormGroup>

          <UButton
            :loading="loading"
            type="submit"
            class="py-2 w-full flex justify-center"
          >
            Register
          </UButton>
          <div>
            Already have an account?
            <NuxtLink to="/login" class="text-eastern-blue-500 font-bold"
              >Sign In</NuxtLink
            >
          </div>
        </UForm>
      </UCard>
    </UContainer>
  </main>
</template>
