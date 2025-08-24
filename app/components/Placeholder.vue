<!-- Componente para mostrar un espacio sin contenido definido -->
<template>
    <!-- Cuadrícula de puntos con borde punteado -->
    <div class="m-2 rounded-lg outline outline-neutral-800 outline-dashed outline-offset-4" :style="{'height': height + 'px'}">
        <div class="h-full inset-0 w-full bg-transparent bg-[radial-gradient(#666_1px,transparent_1px)] [background-size:16px_16px]"></div>
    </div>
</template>

<script setup>
defineProps({
    height: { type: Number, default: 128 } // altura
})
</script>