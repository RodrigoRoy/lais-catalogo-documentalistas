<template>
  <div class="flex justify-evenly bg-primary-700/20 h-16">
    <NuxtImg src="/logo-1.png" class="my-1" />
    <UNavigationMenu :items="items" color="primary" :highlight="false" highlight-color="primary" variant="link" content-orientation="vertical" />
    
    <!-- Búsqueda como un modal -->
    <UModal title="Buscar" scrollable close v-model:open="openModal" >
      <!-- Botón para activar modal -->
      <UButton color="neutral" variant="link" icon="i-lucide-search" />

      <!-- Inicio del modal -->
      <template #content>
        <div class="m-4">
          <!-- Barra de búsqueda -->
          <UInput v-model="searchTerm" placeholder="Buscar..." icon="i-lucide-search" :loading="status === 'pending'" @change="refresh" class="mb-4 w-full" />
  
          <!-- Resultados -->
          <div>
            <!-- Documentalistas -->
            <UUser v-for="documentalista in results.documentalistas" :name="documentalista.nombre" :description="documentalista.mencionResponsabilidad" :avatar="{ src: `/documentalistas/${documentalista.url}/${documentalista.imagen}`, icon: 'i-lucide-user' }" :to="`/${documentalista.url}`" @click="openModal = false" class="mb-2" />
  
            <!-- Documentales -->
            <UUser v-for="documental in results.documentales" :name="documental.identificacion.titulo" :description="`${documental.identificacion.fecha} ${documental.identificacion.duracion ? `(${documental.identificacion.duracion} min.)` : '' }`" :avatar="{ src: `/documentales/${documental.adicional.imagen}`, icon: 'i-lucide-film' }" :to="`/documentales/${documental.adicional.url}`" @click="openModal = false" class="mb-2" />
          </div>
        </div>
      </template>
    </UModal>
    <ColorModeButton />
  </div>
</template>

<script setup>
// Query de búsqueda
const searchTerm = ref('')

// Estado de apertura del modal de búsqueda
const openModal = ref(false)

// Resultados de la base de datos
const { data: results, status, refresh } = await useFetch('/api/search', {method: 'get', query: {q: searchTerm}})

// Opciones de navegación
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

