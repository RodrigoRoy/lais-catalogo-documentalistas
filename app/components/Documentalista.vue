<!-- Fotografía con nombre y enlace de la documentalista para mostrar en página principal -->
<template>
    <div class="relative bg-secondary-700 opacity-100 sm:opacity-70 hover:opacity-100 transition-opacity duration-500 hover:border-4 hover:border-secondary-800">
        <NuxtLink :to="`/${data.url}`">
            <NuxtImg v-if="data.imagen" :src="`/documentalistas/${data.url}/${data.imagen}`" class="object-cover w-full max-h-50"></NuxtImg>
            <!-- El nombre está sobre la imagen y posicionada abajo al centro, con fondo ligeramente transparente para legibilidad -->
            <div class="absolute inset-x-0 bottom-0 bg-linear-to-t from-stone-950/90 to-stone-900/0 text-neutral-100 uppercase text-xs sm:text-sm font-medium text-center p-1">
                {{ data.nombre }}
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
// Información de la documentalista
// @see server/models/documentalista.schema.js
// @see server/api/documentalistas/shortlist.get.js
const props = defineProps({
    data: { type: Object, required: true },
})
</script>