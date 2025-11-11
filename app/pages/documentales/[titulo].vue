<template>
    <!-- Presentación inicial del documental -->
    <div class="w-full" :style="{'background-image': `url(/documentales/${documental.adicional.imagen})`}" style="background-repeat: no-repeat; background-position: center center; background-size: cover;">
        <div class="bg-linear-to-b from-neutral-900/70 via-neutral-950/50 to-neutral-950">
            <div class="min-h-dvh w-5/6 sm:w-3/5 mx-6 sm:mx-12">
                <!-- Título como encabezado -->
                <p class="text-3xl sm:pt-24 text-neutral-100 font-bold uppercase italic">
                    {{ documental.identificacion.titulo || '' }}
                </p>
                <p class="font-light">
                    {{ documental.identificacion.realizacion || '' }}. 
                </p>
                <p class="mt-4">
                    {{ documental.identificacion.pais || '' }}
                    <span v-if="documental.identificacion.pais">, </span>
                    {{ documental.identificacion.fecha || '' }}
                </p>
                <p class="mb-4">
                    <UIcon name="i-mdi-clock-time-three-outline" class="size-4" /> {{ documental.identificacion.duracion || '' }} min.
                    <UIcon name="i-mdi-comment-text" class="size-4 ml-3" /> {{ documental.condicionesAccesoUso.idiomaOriginal || '' }}
                </p>
                <p class="my-6">
                    {{ documental.contenidoEstructura.sinopsis || '' }}
                </p>
                <div class="flex justify-between">
                    <div v-if="documental.adicional.etiquetas && documental.adicional.etiquetas.length > 0">
                        <UBadge v-for="etiqueta in documental.adicional.etiquetas" color="primary" variant="outline" size="md" class="rounded-full mr-2">{{ etiqueta }}</UBadge>
                    </div>
                    <UButton v-if="documental.adicional.urlExterna" variant="soft" size="md" icon="i-mdi-launch" :to="documental.adicional.urlExterna" target="_blank">Ver en línea</UButton>
                </div>
            </div>
        </div>

    </div>

    <!-- Sección para documentalistas -->
    <div v-if="documental.adicional.mujeres && documental.adicional.mujeres.length > 0" class="py-12 bg-primary-700">
        <UContainer>
            <!-- Documentalistas que participaron en el documental -->
            <div v-if="documental.adicional.mujeres && documental.adicional.mujeres.length > 0">
                <p class="text-2xl text-left uppercase italic text-neutral-100 mb-4">
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
    <div class="py-12 bg-neutral-950 text-neutral-100">
        <UContainer>
            <p class="text-left text-2xl uppercase italic my-8">
                Ficha de documentación
            </p>
            <!-- Todas las áreas de documentación -->
            <div class="relative flex flex-col">
                <div class="columns-1 sm:columns-2">
                    <!-- Repetir cada campo de cada área (excepto "adicional") -->
                     <!-- Nota: template permite usar v-for y v-if a la vez -->
                    <template v-for="(area, keyArea) in documental">
                        <div v-if="areasDocumentacion.includes(keyArea)" class="mb-4 h-auto max-w-full">
                            <p class="text-xl uppercase italic font-light mb-4">
                                Área de {{ format(keyArea).toLowerCase() }}
                            </p>
                            <p v-for="(campo, keyCampo) in area">
                                <span v-if="campo" class="font-bold">
                                    {{ format(keyCampo) }}:
                                </span>
                                {{ campo }}
                            </p>
                        </div>
                    </template>
                </div>
            </div>
        </UContainer>
    </div>
    
    <!-- Sección para el comentario -->
    <div v-if="documental.adicional.comentario?.texto" class="py-12 pl-8 bg-beige text-neutral-950">
        <UContainer>
            <p class="text-left text-2xl uppercase italic my-8">
                Comentario
            </p>
            <p class="w-4/5 mb-4 space-y-3" v-html="documental.adicional.comentario.texto"></p>

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
    layout: 'fluid'
})

// Para obtener nombre/título del documental desde URL
const route = useRoute()

// Información del documental en base de datos
const { data: documental } = await useFetch(`/api/documental/${route.params.titulo}`)

// Áreas válidas para la ficha de documentación 
const areasDocumentacion = ['identificacion', 'contexto', 'contenidoEstructura', 'condicionesAccesoUso', 'documentacionAsociada', 'notas', 'controlDescripcion',]
</script>