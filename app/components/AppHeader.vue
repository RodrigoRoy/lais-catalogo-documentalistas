<template>
  <UHeader toggle-side="right" >
    <template #title>
      <NuxtImg src="/logo.png" class="h-14 w-auto" />
    </template>

    <UNavigationMenu :items="items" color="secondary" :highlight="false" highlight-color="secondary" variant="link"  />

    <template #right>
      <!-- Búsqueda como un modal -->
      <UModal title="Buscar" scrollable close v-model:open="openModal" >
        <!-- Botón para activar modal -->
        <UButton color="secondary" variant="link" icon="i-lucide-search" />

        <!-- Inicio del modal -->
        <template #content>
          <div class="m-4">
            <!-- Barra de búsqueda -->
            <UInput v-model="searchTerm" color="secondary" placeholder="Buscar..." icon="i-lucide-search" :loading="status === 'pending'" @change="refresh" class="mb-4 w-full" />
    
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
    </template>

    <template #body>
      <UNavigationMenu :items="items" color="secondary" :highlight="false" highlight-color="secondary" variant="link" orientation="vertical" />
    </template>

  </UHeader>
</template>

<script setup>
// ---------- Lista de documentalistas ----------
// Documentalistas principales, petición en base de datos
const { data:documentalistas } = await useFetch('/api/documentalistas/shortlist')

// Usar sintaxis de UNavigationMenu para la lista de documentalistas (subáreas/children)
const documentalistasList = documentalistas.value.originales.map( (documentalista) => {
    return {
        label: documentalista.nombre,
        to: documentalista.url
    }
})

// Opciones de navegación
const items = ref([
  {
    label: 'Documentalistas',
    icon: 'i-ri-women-line',
    children: documentalistasList
  },
  {
    label: 'Filmografía',
    icon: 'i-bx-camera-movie',
    to: '/filmografia',
  },
  // {
  //   label: 'Línea de tiempo',
  //   icon: 'i-material-symbols-nest-clock-farsight-analog-outline',
  //   to: '/linea-de-tiempo',
  // },
  {
    label: 'Acerca de',
    icon: 'mdi-information-variant-circle-outline',
    to: '/acerca-de'
  }
])

// ---------- Búsqueda ----------
// Query de búsqueda
const searchTerm = ref('')

// Estado de apertura del modal de búsqueda
const openModal = ref(false)

// Resultados de la base de datos
const { data: results, status, refresh } = await useFetch('/api/search', {method: 'get', query: {q: searchTerm}})
</script>

