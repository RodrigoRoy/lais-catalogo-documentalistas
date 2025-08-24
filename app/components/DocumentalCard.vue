<!-- Representación mínima de un documental, similar a un elemento Card -->
<template>
    <div class="relative rounded-lg outline-solid outline-1 outline-neutral-500/20 hover:outline-neutral-200">
        <!-- Portada -->
        <img src="https://picsum.photos/seed/picsum/300/200" class="rounded-lg">
        
        <!-- Texto básico / mínimo -->
        <div class="absolute bottom-0 left-0">
            <p class="text-base font-semibold text-neutral mx-2 my-1">
                Título del documental
            </p>
            <p class="text-sm font-light text-neutral mx-2 -mt-2 mb-1">
                Autor/a, País, Año
            </p>
        </div>
    </div>
</template>

<script setup>
// Toda la información deriva del modelo en base de datos
defineProps({
    data: { type: Object } //required: true
})
</script>