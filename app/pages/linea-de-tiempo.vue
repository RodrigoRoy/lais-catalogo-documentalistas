<template>
    <h2 class="text-2xl font-bold text-center uppercase mt-8 mb-2">
        Linea de tiempo
    </h2>

    <p class="text-sm font-light text-center uppercase mb-12">
        Documentales y eventos más relevantes
    </p>

    <p class="text-sm font-normal text-justify">{{ loremIpsum }}</p>
    <Timeline :data="documentalistas" class="mt-8" />
</template>

<script setup>
definePageMeta({
    title: 'Línea del tiempo - Mujeres Documentalistas en México',
})

// Información de documentalistas
const { data:documentalistas } = await useFetch('/api/documentalistas', {query: {sortBy: 'fechaNacimiento'}})

// Texto de prueba
const loremIpsum = ref('Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.\n\nLorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.\n\nLorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.')
</script>