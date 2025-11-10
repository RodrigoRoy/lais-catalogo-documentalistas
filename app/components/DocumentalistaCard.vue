<!-- Representación de una documentalista, usando como referencia el estilo en index.vue -->
<template>
    <div class="relative bg-secondary-700">
        <NuxtLink :to="data.url ? `/${data.url}` : ''">
            <NuxtImg :src="`/documentalistas/${data.url}/${data.url}-0.jpg`" class="object-cover w-full max-h-50" />
            <!-- El nombre está sobre la imagen y posicionada abajo al centro, con fondo ligeramente transparente para legibilidad -->
            <div class="absolute inset-x-0 bottom-0 bg-linear-to-t from-stone-950/90 to-stone-900/0 text-stone-200 uppercase text-sm font-medium text-center p-1">
                {{ data.nombre }}
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
// Toda la información deriva del modelo en base de datos
const props = defineProps({
    data: { type: Object }, //required: true
    // mencion: { type: String }
})
</script>