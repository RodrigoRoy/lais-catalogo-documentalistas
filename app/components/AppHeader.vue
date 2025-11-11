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
// Query de búsqueda
const searchTerm = ref('')

// Estado de apertura del modal de búsqueda
const openModal = ref(false)

// Resultados de la base de datos
const { data: results, status, refresh } = await useFetch('/api/search', {method: 'get', query: {q: searchTerm}})

// Opciones de navegación
const items = ref([
  {
    label: 'Documentalistas',
    icon: 'i-ri-women-line',
    children: [
      {
        label: 'Alejandra Islas',
        to: '/alejandra-islas'
      },
      {
        label: 'Beatriz Mira',
        to: '/beatriz-mira'
      },
      {
        label: 'Bertha Navarro',
        to: '/bertha-navarro'
      },
      {
        label: 'Dana Rotbert',
        to: '/dana-rotberg'
      },
      {
        label: 'Elvira Palafox, Guadalupe Escandón, Timotea Michelín',
        to: '/elvira-guadalupe-timotea'
      },
      {
        label: 'Gabriela Espinoza',
        to: '/gabriela-espinoza'
      },
      {
        label: 'Guadalupe Ferrer',
        to: '/guadalupe-ferrer'
      },
      {
        label: 'Guadalupe Sánchez',
        to: '/guadalupe-sanchez'
      },
      {
        label: 'Josefina Morales',
        to: '/josefina-morales'
      },
      {
        label: 'Laura Iñigo',
        to: '/laura-inigo'
      },
      {
        label: 'Maricarmen de Lara',
        to: '/maricarmen-lara'
      },
      {
        label: 'Martha Colmenares',
        to: '/martha-colmenares'
      },
      {
        label: 'Maru Tamés',
        to: '/maru-tames'
      },
      {
        label: 'Olivia Carrión',
        to: '/olivia-carrion'
      },
      {
        label: 'Penny Simpson',
        to: '/penny-simpson'
      },
      {
        label: 'Rosa Martha Fernández',
        to: '/rosa-martha-fernandez'
      },
      {
        label: 'Sonia Fritz',
        to: '/sonia-fritz'
      },
      {
        label: 'Teresa Carvajal',
        to: '/teresa-carvajal'
      },
      {
        label: 'Teófila Palafox, Justina Escandón, Juana Canseco',
        to: '/teofila-justina-juana'
      },
      {
        label: 'Trinidad Langarica',
        to: '/trinidad-langarica'
      },
    ]
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
</script>

