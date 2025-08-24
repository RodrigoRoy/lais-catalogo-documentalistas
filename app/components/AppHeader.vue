<template>
  <UNavigationMenu :items="items" color="primary" :highlight="false" highlight-color="primary" variant="link" content-orientation="vertical" class="justify-center h-16 bg-primary/10" />
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
        label: 'Rosa Martha Fernández',
        icon: 'i-lucide-smile',
        to: '/rosa-martha'
      },
      {
        label: 'Alejandra Islas',
        icon: 'i-lucide-smile',
        to: '/alejandra-islas'
      },
      {
        label: 'Bertha Navarro',
        icon: 'i-lucide-smile',
        to: '/bertha-navarro'
      },
      {
        label: 'Guadalupe Sánchez Sosa',
        icon: 'i-lucide-smile',
        to: '/lupita-sanchez'
      },
      {
        label: 'Maru Tamés',
        icon: 'i-lucide-smile',
        to: '/maru-tames'
      },
      {
        label: 'Olivia Carrión',
        icon: 'i-lucide-smile',
        to: '/olivia-carrion'
      },
    ]
  },
  {
    label: 'Filmografía',
    icon: 'i-bx-camera-movie',
    to: '/catalogo'
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

