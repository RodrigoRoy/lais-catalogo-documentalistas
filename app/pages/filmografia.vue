<template>
    <div class="bg-primary-700">
        <UContainer class="pb-4 pt-12">
            <h2 class="text-2xl font-bold text-center uppercase py-8">
                Filmografía
            </h2>
        
            <!-- Filtros y ordenamiento -->
            <div class="sm:flex sm:justify-between mb-8">
                <!-- Lado izquierdo -->
                <div>
                    <!-- <USelect v-model="tema" :items="temas" icon="i-mdi-movie-open-outline" size="md" placeholder="Tema" color="white" class="w-48 mb-2 mr-1 sm:mr-4 bg-neutral-100 text-neutral-950" @change="refresh" /> -->
                    <USelect v-model="year" :items="years" icon="i-mdi-calendar-blank" size="md" placeholder="Año" color="white" class="w-48 mb-2 mr-1 sm:mr-4 bg-neutral-100 text-neutral-950" @change="refresh" />
                    <USelect v-model="documentalista" :items="documentalistas" value-key="_id" label-key="nombre" icon="i-mdi-face-woman" size="md" placeholder="Documentalista" color="white" class="w-48 mr-1 bg-neutral-100 text-neutral-950" @change="refresh" />
                    <!-- Botón de borrado -->
                    <UButton icon="i-lucide-delete" variant="link" v-if="tema || year || documentalista" @click="reset" class="w-48 py-2" color="neutral" />
                </div>
        
                <!-- Lado derecho -->
                <div>
                    <URadioGroup v-model="sort" :items="sortOptions" value-key="id" size="md" orientation="horizontal" class="mt-4 sm:mt-0" @change="refresh" />
                </div>
            </div>
        </UContainer>
    </div>

    <div class="bg-beige text-neutral-950 pt-8 pb-4">
        <UContainer>
            <p class="uppercase text-lg mb-4 italic font-medium">
                Documentales
            </p>

            <UButton v-if="status === 'pending'" loading loading-icon="i-lucide-loader-circle" size="lg" variant="link" class="text-secondary-800" color="neutral" >Buscando documentales...</UButton>
        
            <!-- Lista de documentales según filtros y ordenamiento -->
            <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-2">
                <div v-for="documental in documentales">
                    <DocumentalCard :data="documental" />
                </div>
            </div>

            <div v-if="documentales.length === 0 && status != 'pending'" class="text-neutral-950/50">
                No hay documentales con este criterio.
                <UButton variant="link" @click="reset" color="primary" class="text-primary-700/90" >Reiniciar búsqueda</UButton>
            </div>
        </UContainer>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Filmografía',
    layout: 'fluid'
})

// Variables para el filtrado de documentales
const tema = ref('')
const { data: temas} = useFetch('/api/documental/tagList')
// const temas = ['Trabajo doméstico', 'Educación', 'Pueblos originarios', 'Diversidad sexual', 'Alimentación', 'Despojo territorial', 'Naturaleza', 'Luchas campesinas', 'Derechos de la mujer']

const year = ref('')
const { data: years} = useFetch('/api/documental/yearList')

const documentalista = ref('')
const { data:documentalistas } = await useFetch('/api/documentalistas/idList')

// Variables para el ordenamiento de documentales
const sort = ref('fecha')
const sortOptions = [
    { label: 'Cronológico', id: 'fecha' },
    { label: 'Alfabético', id: 'title' },
]

// Documentales desde base de datos
const { data: documentales, status, refresh } = await useFetch('/api/documental', {method: 'get', query: {tema: tema, year: year, documentalista: documentalista, sortBy: sort}})

/**
 * Deja en blanco los criterios de filtrado
 */
function reset(){
    tema.value = ''
    year.value = ''
    documentalista.value = ''
}
</script>

<style scoped>
/* Fuente tipográfica (Google Fonts con Nuxt Fonts) */
div{
    font-family: "Be Vietnam Pro", Roboto, sans-serif;
}
</style>