<template>
    <!-- Presentación inicial del documental -->
    <div class="w-full" :style="{'background-image': backgroundImage}" style="background-repeat: no-repeat; background-position: center center; background-size: cover;">
        <div class="bg-linear-to-b from-neutral-900/70 via-neutral-950/50 to-neutral-950">
            <div class="min-h-dvh w-5/6 sm:w-3/5 mx-6 sm:mx-12">
                <!-- Título como encabezado -->
                <p class="text-2xl sm:text-3xl pt-6 sm:pt-24 text-neutral-100 font-bold uppercase italic">
                    {{ documental.identificacion.titulo || '' }}
                </p>
                <!-- Autoría / realización -->
                <p class="font-light">
                    {{ documental.identificacion.realizacion || '' }} 
                </p>
                <!-- Fecha y país -->
                <p class="mt-4">
                    <span v-if="documental.identificacion.fecha" class="mr-3"><UIcon name="i-mdi-calendar-blank" class="size-4" /> {{ documental.identificacion.fecha }}</span>
                    <span v-if="documental.identificacion.pais"><UIcon name="i-mdi-map-marker" class="size-4" /> {{ documental.identificacion.pais }}</span>
                </p>
                <!-- Duración e idioma -->
                <p class="mb-4">
                    <span v-if="documental.identificacion.duracion" class="mr-3"><UIcon name="i-mdi-clock-time-three-outline" class="size-4" /> {{ documental.identificacion.duracion }} min.</span>
                    <span v-if="documental.condicionesAccesoUso.idiomaOriginal"><UIcon name="i-mdi-comment-text" class="size-4" /> {{ documental.condicionesAccesoUso.idiomaOriginal || '' }}</span>
                </p>
                <!-- Sinópsis -->
                <p class="my-6">
                    {{ documental.contenidoEstructura.sinopsis || '' }}
                </p>
                <!-- Etiquetas -->
                <!-- <div class="flex justify-between">
                    <div v-if="documental.adicional.etiquetas && documental.adicional.etiquetas.length > 0">
                        <span v-for="etiqueta in documental.adicional.etiquetas">
                            <UBadge v-if="etiqueta != ''" color="transparent" variant="outline" size="md" class="rounded-full mr-2 border border-white">
                                {{ etiqueta }}
                            </UBadge>
                        </span>
                    </div>
                </div> -->
            </div>
        </div>

    </div>

    <!-- Sección para documentalistas -->
    <div v-if="documental.adicional.mujeres && documental.adicional.mujeres.length > 0" class="py-12 bg-primary-700">
        <UContainer>
            <!-- Documentalistas que participaron en el documental -->
            <div v-if="documental.adicional.mujeres && documental.adicional.mujeres.length > 0">
                <p class="text-xl sm:text-2xl text-left uppercase italic text-neutral-100 mb-4">
                    Documentalistas
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-0 mx-20">
                <!-- <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-3"> -->
                    <div v-for="mujer in documental.adicional.mujeres">
                        <DocumentalistaCard :data="mujer.documentalista" />
                    </div>
                </div>
            </div>
        </UContainer>
    </div>

    <!-- Sección para la ficha -->
    <div class="relative py-12 bg-neutral-950 text-neutral-100">
        <NuxtImg src="/icons/icon-blue-5.png" class="absolute right-4 top-2 max-w-15" />
        <NuxtImg src="/icons/icon-white-9.png" class="absolute left-4 bottom-2 max-w-15" />
        <UContainer>
            <p class="text-left text-xl sm:text-2xl uppercase italic my-8">
                Ficha de documentación
            </p>
            <!-- Todas las áreas de documentación -->
            <div class="flex flex-col py-12">
                <div class="columns-1 sm:columns-2">
                    <!-- Repetir cada campo de cada área (excepto "adicional") -->
                     <!-- Nota: template permite usar v-for y v-if a la vez -->
                    <template v-for="(area, keyArea) in documental">
                        <div v-if="areasDocumentacion.includes(keyArea)" class="mb-4 h-auto max-w-full">
                            <p class="text-xl sm:text-lg uppercase italic font-light mb-4">
                                Área de {{ format(keyArea).toLowerCase() }}
                            </p>
                            <p v-for="(campo, keyCampo) in area">
                                <span v-if="campo" class="font-bold">
                                    {{ format(keyCampo) }}:
                                </span>
                                {{ campo }}
                                <!-- Agregar "min." solo para duración, ya que solo es el número entero representado en BD -->
                                <span v-if="keyCampo === 'duracion'"> min.</span>
                            </p>
                        </div>
                    </template>
                </div>
            </div>
        </UContainer>
    </div>
    
    <!-- Sección para el comentario -->
    <div v-if="documental.adicional.comentario?.texto" class="relative py-12 pl-8 bg-beige text-neutral-950">
        <NuxtImg src="/icons/icon-black-0.png" class="absolute right-4 bottom-2 sm:bottom-4 max-w-30 sm:max-w-1/5" />
        <UContainer>
            <p class="text-left text-2xl sm:text-2xl uppercase italic my-8">
                Comentario
            </p>
            <div class="w-4/5 mb-4 space-y-3" v-html="documental.adicional.comentario.texto"></div>

            <!-- Autor/a del comentario: -->
            <div class="mt-4 w-full sm:w-1/2">
                <p v-if="documental.adicional.comentario.fecha" class="text-xs text-neutral-900/60">
                    {{ documental.adicional.comentario.fecha  || '' }}
                </p>
                <p class="text-sm font-semibold uppercase">
                    {{ documental.adicional.comentario.autoria.nombre || '' }}
                </p>
                <p class="text-sm font-light ">
                    {{ documental.adicional.comentario.autoria.semblanza || '' }}
                </p>
            </div>
        </UContainer>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Documental',
    layout: 'fluid',
    colorMode: 'dark',
})

// Para obtener nombre/título del documental desde URL
const route = useRoute()

// Información del documental en base de datos
const { data: documental } = await useFetch(`/api/documental/${route.params.titulo}`)

// Optimized image URL from NuxtImage manually generated: https://image.nuxt.com/usage/use-image
const img = useImage()
const backgroundImage = computed(() => {
    const imgUrl = img(`/documentales/${documental.value.adicional.imagen}`)
    return `url('${imgUrl}')`
})

// Áreas válidas para la ficha de documentación 
const areasDocumentacion = ['identificacion', 'contexto', 'contenidoEstructura', 'condicionesAccesoUso', 'documentacionAsociada', 'notas', 'controlDescripcion',]
</script>