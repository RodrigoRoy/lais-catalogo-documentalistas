<template>
    <!-- Sección de presentación del proyecto -->
    <div class="relative text-center h-dvh bg-beige ">
        <div class="z-0">
            <NuxtImg src="collage1a.png" class="absolute left-0 bottom-0 max-w-1/3" />
            <NuxtImg src="collage1b.png" class="absolute right-0 bottom-0 max-w-1/2" />
            <NuxtImg src="collage2b.png" class="absolute right-0 top-0 max-w-1/2" />
        </div>

        <div class="absolute w-2/3 top-4 left-1/2 -translate-x-1/2 py-20 z-10">
            <p class="text-xl sm:text-3xl font-bold text-neutral-950 uppercase bg-beige pt-2">
                Catálogo Mujeres Documentalistas en México <br />(1970-1985)
            </p>
            <p class="text-lg font-light px-12 text-neutral-950 bg-beige pb-2 pt-4">
                Reúne a realizadoras, camarógrafas, sonidistas, editoras, guionistas, fotógrafas, productoras, animadoras, etc., que participaron en el quehacer documental en dicho periodo. A todas ellas les llamamos Mujeres Documentalistas.
            </p>
    
            <!-- <UButton class="mt-18 uppercase font-light text-secondary-800 z-30 bg-beige" variant="link" color="secondary" >Ver catálogo</UButton> -->
        </div>
    </div>
    
    <!-- Presentación de las documentalistas del catálogo -->
    <div class="relative bg-neutral-950 pb-12">
        <div class="relative py-12 ml-18">
            <p class="text-left text-xl sm:text-2xl font-bold text-collage uppercase">
                Documentalistas
            </p>
            <NuxtImg src="/icons/icon-white-4.png" class="max-w-12" />
            <NuxtImg src="/icons/icon-white-8.png" class="absolute right-4 top-6 max-w-20" />
        </div>
        
        <!-- Mosaico con los retratos y nombres de la documentalistas principales -->
        <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 mx-20">
            <div v-for="documentalista in documentalistas">
                <div class="relative bg-secondary-700 hover:border-2 hover:border-secondary-800">
                    <NuxtLink :to="`/${documentalista.url}`">
                        <NuxtImg :src="`/documentalistas/${documentalista.url}/${documentalista.url}-0.jpg`" class="object-cover w-full max-h-50"></NuxtImg>
                        <!-- El nombre está sobre la imagen y posicionada abajo al centro, con fondo ligeramente transparente para legibilidad -->
                        <div class="absolute inset-x-0 bottom-0 bg-linear-to-t from-stone-950/90 to-stone-900/0 text-stone-200 uppercase text-xs sm:text-sm font-medium text-center p-1">
                            {{ documentalista.nombre }}
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </div>
        
        <div class="absolute right-16 bottom-4 flex">
            <NuxtImg src="/icons/icon-red-2.png" class="max-w-12 mr-2" /><NuxtImg src="/icons/icon-red-3.png" class="max-w-12" />
        </div>
    </div>
    
    <!-- Sección de opiniones del proyecto -->
    <!-- <div class="bg-beige text-neutral-950 pb-12">
        <div class="pt-12 pb-6 ml-18">
            <p class="text-left text-xl sm:text-2xl font-bold text-collage uppercase ">
                Opiniones
            </p>
        </div>
        
        <UMarquee :overlay="false" class="py-8" :ui="{ root: '[--duration:120s]'}" >
            <div class="flex flex-row w-full">
                <div v-for="opinion in opiniones" class="relative grow-7 text-center max-w-full sm:w-1/3 mx-4">
                    <UIcon name="i-lucide-quote" class="absolute left-0 size-8 text-neutral-950/20" />
                    <p class="mb-2">
                        {{ opinion.texto }}
                    </p>
                    <p class="text-xs font-bold text-neutral-950/70 ">
                        {{ opinion.nombre || '' }}
                    </p>
                    <p class="text-xs font-light italic text-neutral-950/30">
                        {{ moment(opinion.fecha).format('DD/MM/YYYY')  || '' }}
                    </p>

                </div>
            </div>
        </UMarquee>

        <UContainer class="relative">
            <div class="absolute right-4">
                <p>
                    <UIcon name="i-lucide-message-square-text" class="left-0 size-4 text-neutral-950 mr-2" />Comparte tu <ULink to="https://forms.cloud.microsoft/r/68Q9LhNEau" target="_blank" class="text-primary-700 hover:text-primary-900">opinión del Catálogo</ULink>
                </p>
            </div>
        </UContainer>
    </div> -->

    <!-- Números y cifras del proyecto -->
    <!-- <div class="text-center h-120">
        <p class="text-2xl font-bold text-primary-700 uppercase py-12">
            Documentalistas en cifras
        </p>

        <div class="flex justify-evenly text-xl">
            <div>
                <p v-for="dato in cifras.totales" class="font-light my-2">
                    <span class="text-3xl">{{ dato.number }}</span> {{ dato.text }}
                </p>
            </div>

            <div>
                <p v-for="dato in cifras.actividad" class="font-light my-2">
                    <span class="text-3xl">{{ dato.number }}</span> {{ dato.text }}
                </p>
            </div>
        </div>
    </div> -->

    <!-- Nube de palabras con los temas que abordan los documentales -->
    <!-- <div class="relative text-center bg-beige ">
        <p class="text-2xl font-bold text-neutral-950 uppercase py-12 hidden">
            Nube de palabras
        </p>

        <CloudWords class="py-18" />
        
        <div class="absolute right-8 bottom-0 flex">
            <NuxtImg src="/icons/icon-black-7.png" class="max-w-12" />
        </div>
    </div> -->
</template>

<script setup>
definePageMeta({
    layout: 'fluid', // ancho total sin margenes
    title: 'Catálogo Mujeres Documentalistas en México (1970-1985)',
    colorMode: 'dark',
})

// import moment from 'moment'

// Documentalistas principales, petición en base de datos
const { data:documentalistas } = await useFetch('/api/documentalistas', {method: 'get', query: {sortBy: 'nombre', principales: 'true'}})

// Opiniones sobre el proyecto
// const { data: opiniones } = await useFetch('/api/opiniones')

// Números y crifras del proyecto
// const cifras = {
//     totales: [
//         {text: 'documentalistas', number: '26'},
//         {text: 'colectivos', number: '6'},
//         {text: 'documentales', number: '128'},
//         {text: 'horas de película', number: '250'},
//     ],
//     actividad: [
//         {text: 'realizadoras', number: '20'},
//         {text: 'editoras', number: '12'},
//         {text: 'camarógrafas', number: '17'},
//         {text: 'sonidistas', number: '4'},
//         {text: 'fotógrafas', number: '15'},
//         {text: 'animadoras', number: '2'},
//     ],
// }
</script>

<style scoped>
/* Fuente tipográfica (Google Fonts con Nuxt Fonts) */
div{
    font-family: "Be Vietnam Pro", Roboto, sans-serif;
}
</style>