<template>
  <UApp>
    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter />
  </UApp>
</template>

<script setup>
definePageMeta({
    title: 'Catálogo Mujeres Documentalistas en México ()',
})
</script>