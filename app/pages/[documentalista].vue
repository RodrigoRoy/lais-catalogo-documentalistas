<template>
    <!-- Presentación inicial de la documentalista -->
    <div class="w-full" :style="{'background-image': `url(/documentalistas/${documentalista.url}/${documentalista.imagen})`}" style="background-repeat: no-repeat; background-size: cover;">
        <div class="bg-linear-to-b from-neutral-900/70 via-neutral-950/50 to-neutral-950">
            <div class="min-h-dvh w-5/6 sm:w-3/5 mx-6 sm:mx-12">
                <!-- Nombre como encabezado -->
                <p class="text-2xl sm:text-3xl pt-6 sm:pt-24 text-neutral-100 font-bold uppercase">
                    {{ documentalista.nombre }}
                </p>

                <!-- Actividades que realizó -->
                <p v-if="documentalista.mencionResponsabilidad" class="text-sm font-light">
                    {{ documentalista.mencionResponsabilidad }}
                </p>

                <!-- Colectivos donde participó -->
                <p v-if="documentalista.colectivos" class="font-medium mt-4">
                    Participó en: {{ documentalista.colectivos }}
                </p>

                <!-- Semblanza -->
                <p v-if="documentalista.semblanzaHTML" v-html="documentalista.semblanzaHTML" class="my-6 space-y-3"></p>

                <!-- Participación en Seminario Bitácora -->
                <!-- <div v-if="documentalista.clipVideo">
                    <UButton variant="soft" size="md" icon="i-mdi-youtube" :to="documentalista.clipVideo" target="_blank">Seminario Bitácora</UButton>
                </div> -->
            </div>
        </div>
    </div>
    
    <!-- Video clip de presentación -->
    <div v-if="documentalista.clipVideo" class="py-8 bg-neutral-950 text-neutral-100 text-center">
        <UContainer>
            <div class="flex justify-center items-center content-center  ">
                <video controls :poster="`/videos/${documentalista.url}.jpg`" class="max-w-2/3 center" >
                    <source :src="`/videos/${documentalista.clipVideo}`" type="video/mp4" />
                    <p>Tu navegador no soporta la reproducción del video pero puedes <a :href="`/videos/${documentalista.clipVideo}`" :download="`/videos/${documentalista.clipVideo}`">descargar el video</a></p>
                </video>
            </div>
        </UContainer>
    </div>

    <!-- Galería de fotos -->
    <div v-if="documentalista.galeria && documentalista.galeria.length > 0" class="relative py-12 bg-beige text-neutral-950">
        <NuxtImg src="/icons/icon-black-3.png" class="absolute right-4 top-6 max-w-20" />
        <NuxtImg src="brocha.png" class="absolute right-4 bottom-0 max-w-50 sm:max-w-70" />
        <UContainer>
            <p class="text-center text-xl sm:text-2xl uppercase italic my-8">
                Galería
            </p>
    
            <!-- Masonry style: no se dejan espacios en blanco entre imagenes -->
            <div class="columns-1 sm:columns-2 space-y-4 justify-center items-center content-center ">
                <div v-for="foto in documentalista.galeria" class="relative">
                    <!-- Fotografía -->
                    <NuxtImg :src="`/documentalistas/${route.params.documentalista}/${foto.imagen}`" :alt="foto.descripcion" class="center w-3/4" style="display: block; margin-left: auto; margin-right: auto;" />
                    <!-- Pie de fotografía -->
                    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 bg-linear-to-t from-neutral-950/90 to-transparent text-neutral-200 text-xs font-light text-justify px-2 pt-6 pb-2">
                        {{ foto.descripcion }}
                    </div>
                </div>
            </div>
        </UContainer>
    </div>

    <!-- Documentales donde participó -->
    <div v-if="documentalista.documentales && documentalista.documentales.length > 0" class="relative py-12 bg-neutral-950 text-neutral-100">
        <NuxtImg src="/icons/icon-white-6.png" class="absolute right-4 bottom-4 max-w-20" />
        <UContainer>
            <p class="text-left text-xl sm:text-2xl uppercase italic my-8">
                Documentales
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-2">
                <div v-for="documental in documentalista.documentales">
                    <DocumentalCard :data="documental" />
                </div>
            </div>
        </UContainer>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Documentalista',
    layout: 'fluid',
    colorMode: 'dark',
})

const route = useRoute()
const { data: documentalista } = await useFetch(`/api/documentalistas/${route.params.documentalista}`)
</script>

<style scoped>
/* Fuente tipográfica (Google Fonts con Nuxt Fonts) */
div{
    font-family: "Be Vietnam Pro", Roboto, sans-serif;
}
</style>