<!-- Representación breve de una documentalista, similar a un elemento Card -->
<template>
    <div class="pb-2h-61 relative">
        <!-- Fotografía con link -->
        <NuxtLink :to="props?.data?.documentalista?.url ? `/${props.data.documentalista.url}` : '/'">
            <img :src="props?.data?.documentalista?.imagen || 'https://picsum.photos/id/82/200/300'" class="rounded-t-lg rounded-lg outline-solid outline-1 outline-neutral-500/20 hover:outline-neutral-200">
        </NuxtLink>
        
        <!-- Texto básico / mínimo -->
        <div class="relative bottom-0 left-0 transition duration-300 ease-in-out">
            <p class="text-base font-semibold text-neutral mx-2 my-1">
                {{ props?.data?.documentalista?.nombre || '' }}
            </p>
            <p class="text-md font-light text-neutral mx-2 -mt-1 mb-1">
                {{ props?.data?.mencionResponsabilidad || '' }}
            </p>
        </div>
    </div>
</template>

<script setup>
// Toda la información deriva del modelo en base de datos
const props = defineProps({
    data: { type: Object } //required: true
})
</script>