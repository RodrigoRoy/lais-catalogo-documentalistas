<template>
  <div class="flex justify-evenly bg-primary-700/20 h-16">
    <NuxtImg src="/logo-1.png" class="my-1" />
    <UNavigationMenu :items="items" color="primary" :highlight="false" highlight-color="primary" variant="link" content-orientation="vertical" />
    <UInput color="primary" variant="subtle" icon="i-lucide-search" size="md" placeholder="Buscar..." />
    <ColorModeButton />
  </div>
</template>

<script setup>
const items = ref([
  {
    label: 'Inicio',
    icon: 'material-symbols-home-outline',
    to: '/'
  },
  {
    label: 'Documentalistas',
    icon: 'i-ri-women-line',
    to: '/documentalistas',
    children: [
      {
        label: 'Guadalupe Sánchez Sosa',
        icon: 'i-lucide-smile',
        to: '/lupita-sanchez'
      },
    ]
  },
  {
    label: 'Filmografía',
    icon: 'i-bx-camera-movie',
    to: '/documentales/filmografia',
    children: [
      {
        label: 'Xantolo',
        icon: 'i-mdi-movie',
        to: '/documentales/xantolo-fiesta-de-todos-los-santos'
      },
    ]
  },
  {
    label: 'Línea de tiempo',
    icon: 'i-material-symbols-nest-clock-farsight-analog-outline',
    to: '/linea-de-tiempo',
  },
  {
    label: 'Acerca de',
    icon: 'mdi-information-variant-circle-outline',
    to: '/acerca-de'
  }
])
</script>

