<template>
  <UNavigationMenu :items="items" class="w-full justify-center" />
</template>

<script setup>
const items = ref([
  {
    label: 'Mujeres documentalistas',
    icon: 'i-lucide-book-open',
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
    label: 'Navegación',
    icon: 'i-lucide-database',
    children: [
      {
        label: 'Documentalistas',
        icon: 'i-lucide-file-text',
        description: 'Mujeres documentalistas en México.',
        to: '/documentalistas'
      },
      {
        label: 'Catálogo',
        icon: 'i-lucide-file-text',
        description: 'Documentales con la participación de documentalistas.',
        to: '/documentales/catalogo'
      },
      {
        label: 'Línea de tiempo',
        icon: 'i-lucide-file-text',
        description: 'Documentales y eventos más importantes.',
        to: '/linea-de-tiempo'
      },
      {
        label: 'Acerca del proyecto',
        icon: 'i-lucide-file-text',
        description: 'Información sobre el proyecto Mujeres Documentalistas.',
        to: '/acerca-de'
      }
    ]
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    badge: '3.8k',
    to: 'https://github.com/nuxt/ui',
    target: '_blank'
  },
  {
    label: 'Help',
    icon: 'i-lucide-circle-help',
    disabled: true
  }
])
</script>

