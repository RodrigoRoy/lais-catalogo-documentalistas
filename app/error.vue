<template>
  <UApp>
    <AppHeader />

    <UError :error="error" />

    <AppFooter />
  </UApp>
</template>

<script setup>
const props = defineProps('error')
</script>