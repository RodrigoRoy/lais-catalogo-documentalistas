<!-- Representación de una documentalista, usando como referencia el estilo en index.vue -->
<template>
    <div v-if="data.imagen" class="relative bg-secondary-700">
        <NuxtLink :to="data.url ? `/${data.url}` : ''">
            <NuxtImg v-if="data.imagen" quality="30" sizes="300px sm:400px" format="webp" :src="`/documentalistas/${data.url}/${data.imagen}`" class="object-cover w-full" />
            <!-- El nombre está sobre la imagen y posicionada abajo al centro, con fondo ligeramente transparente para legibilidad -->
            <div class="absolute inset-x-0 bottom-0 bg-linear-to-t from-stone-950/90 to-stone-900/0 text-stone-200 uppercase text-sm font-medium text-center p-1">
                {{ data.nombre }}
                <span v-if="data.mencionResponsabilidad" class="normal-case text-xs font-light">
                    <br />
                    {{ data.mencionResponsabilidad }}
                </span>
            </div>
        </NuxtLink>
    </div>

    <!-- En caso de no tener imagen, únicamente mostrar nombre -->
    <div v-else class="relative bg-secondary-700 max-h-12 my-8">
        <NuxtLink :to="`/${data.url}`">
            <div class="absolute inset-x-0 bottom-0 text-neutral-100 uppercase text-md sm:text-lg font-medium text-center p-1">
                {{ data.nombre }}
            </div>
        </NuxtLink>
    </div>
</template>

<script setup>
// Toda la información deriva del modelo en base de datos
const props = defineProps({
    data: { type: Object, required: true },
})
</script>