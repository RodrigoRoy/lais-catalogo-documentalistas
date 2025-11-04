<template>
    <!-- Presentación inicial de la documentalista -->
    <div class="w-full" :style="{'background-image': `url(/documentalistas/${documentalista.url}/${documentalista.imagen})`}">
        <div class="bg-linear-to-b from-stone-900/70 via-neutral-900/50 to-stone-900">
            <div class="h-dvh w-5/6 sm:w-3/5 mx-6 sm:mx-12">
                <p class="text-3xl sm:pt-24 text-primary">
                    {{ documentalista.nombre }}
                </p>
                <p v-if="documentalista.colectivos" class="font-light">
                    Participó en: {{ documentalista.colectivos }}
                </p>
                <p class="my-6">
                    {{ documentalista.semblanza }}
                </p>
                <div>
                    <UButton v-if="documentalista.clipVideo" variant="soft" size="md" icon="i-mdi-youtube" :to="documentalista.clipVideo" target="_blank">Seminario Bitácora</UButton>
                </div>
            </div>
        </div>
    </div>
    
    <UContainer>
        <!-- Galería de fotos (de archivo y producción) -->
        <!-- El diseño se inspira de las fotos tipo Polaroid -->
        <div class="my-8">
            <p class="text-center text-2xl text-primary mb-4 uppercase">
                Galería
            </p>
            <div class="columns-1 sm:columns-2 md:columns-4 space-y-4">
                <UCard v-for="foto in documentalista.galeria" variant="subtle" class="bg-white text-black rounded-none shadow-lg/40 dark:shadow-primary-50 dark:shadow-lg/30">
                    <NuxtImg :src="`/documentalistas/${route.params.documentalista}/${foto.imagen}`" :alt="foto.descripcion" class="object-cover w-full max-h-40" />
                    <div class="text-xs text-justify p-2">
                        {{ foto.descripcion }}
                    </div>
                </UCard>
            </div>
        </div>

        <!-- Documentalistas que participaron en el documental -->
        <div class="text-center">
            <p class="text-2xl text-primary mb-4 uppercase">
                Documentales
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3">
                <div v-for="documental in documentalista.documentales">
                    <DocumentalCard :data="documental" />
                </div>
            </div>
        </div>
    </UContainer>
</template>

<script setup>
definePageMeta({
    title: 'Documentalista',
    layout: 'fluid',
})

const route = useRoute()
const { data: documentalista } = await useFetch(`/api/documentalistas/${route.params.documentalista}`)
</script>|