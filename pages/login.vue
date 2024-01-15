<script lang="ts" setup>
  definePageMeta({
    layout: false,
  });

  import { z } from "zod";
  import type { FormSubmitEvent } from "#ui/types";

  const user = useUser();
  if (user.value) {
    await navigateTo("/dashboard"); // redirect to profile page
  }

  const toast = useToast();
  const loading = ref(false);

  const schema = z.object({
    username: z.string(),
    password: z.string().min(8, "Must be at least 8 characters"),
  });

  type Schema = z.output<typeof schema>;

  const state = ref({
    username: undefined,
    password: undefined,
  });

  async function onSubmit(event: FormSubmitEvent<Schema>) {
    loading.value = true;
    const { error } = await useFetch("/api/login", {
      method: "POST",
      body: {
        username: event.data.username,
        password: event.data.password,
      },
      redirect: "manual",
    });

    if (error.value) {
      toast.add({
        title: "Error",
        description: error.value.statusMessage,
        icon: "i-heroicons-x-circle",
        color: "red",
      });
    } else {
      toast.add({
        title: "Success",
        description: "Succesfully login",
        icon: "i-heroicons-check-circle",
      });

      await navigateTo("/dashboard");
    }
    loading.value = false;
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
          <div class="font-bold text-2xl">Welcome back</div>
          <UFormGroup label="Email" name="email">
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
            Submit
          </UButton>
          <div>
            Don't have an account yet?
            <NuxtLink to="/register" class="text-eastern-blue-500 font-bold"
              >Sign Up</NuxtLink
            >
          </div>
        </UForm>
      </UCard>
    </UContainer>
  </main>
</template>
