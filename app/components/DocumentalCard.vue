<!-- Representación mínima de un documental, similar a un elemento Card -->
<template>
    <NuxtLink :to="`/documentales/${data.adicional.url}`">
        <div class="relative group">
            <!-- Imagen de portada y título (sobre imagen con fondo degradado) -->
            <div class="relative z-10">
                <NuxtImg :src="data.adicional.imagen ? `/documentales/${data.adicional.imagen}` : '/documental.jpg'" class="h-50 w-full" />
                <div class="absolute bottom-0 left-0 bg-linear-to-t from-neutral-950/90 to-transparent p-2 text-neutral-100 w-full">
                    <p class="uppercase text-xs sm:text-sm">
                        {{ data.identificacion.titulo || '' }}
                    </p>
                </div>
            </div>
    
            <div class="text-xs bg-neutral-950 text-neutral-100 px-2 pb-1 z-10">
                <p class="line-clamp-1 font-extralight mb-1">
                    {{ data.identificacion.pais || '' }} {{ data.identificacion.fecha || '' }}
                </p>
                <p class="line-clamp-1">
                    {{ data.identificacion.realizacion || '' }}
                </p>
            </div>
            
            <!-- Recuadro con más información al pasar el cursor encima -->
            <div v-if="data.contenidoEstructura.sinopsis && data.identificacion.duracion && data.condicionesAccesoUso.idiomaOriginal" class="absolute bottom-0 translate-y-full text-xs bg-neutral-950 text-neutral-100 w-full px-2 pb-1 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p v-if="data.identificacion.duracion || data.condicionesAccesoUso.idiomaOriginal" class="mb-2 font-light">
                    {{ data.identificacion.duracion ? `${data.identificacion.duracion} min.` : '' }}
                    {{ data.condicionesAccesoUso.idiomaOriginal || '' }}
                </p>
                <p class="line-clamp-5">
                    {{ data.contenidoEstructura.sinopsis || '' }}
                </p>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
// Toda la información deriva del modelo en base de datos
defineProps({
    data: { type: Object } //required: true
})
</script>

<style scoped>
/* Fuente tipográfica (Google Fonts con Nuxt Fonts) */
div{
    font-family: "Be Vietnam Pro", Roboto, sans-serif;
}
</style>