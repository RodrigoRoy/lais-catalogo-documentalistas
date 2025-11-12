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

// Usar dark mode para todas las páginas
const colorMode = useColorMode()
colorMode.preference = 'dark'
</script>