<template>
    <!-- Sección de presentación del proyecto -->
    <div class="text-center h-dvh">
        <p class="text-3xl font-bold text-primary-400 uppercase py-20">
            Catálogo Mujeres Documentalistas en México <br />(1970-1985)
        </p>

        <p class="text-lg font-light px-12">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
        </p>

        <UButton class="mt-24">Ver catálogo</UButton>
    </div>

    <!-- Presentación de las documentalistas del catálogo -->
    <div class="text-center bg-neutral-400/15 h-dvh">
        <p class="text-2xl font-bold text-primary-400 uppercase py-12">
            Documentalistas
        </p>

        <Placeholder :height="650" />
    </div>

    <!-- Números y cifras del proyecto -->
    <div class="text-center h-120">
        <p class="text-2xl font-bold text-primary-400 uppercase py-12">
            Documentalistas en cifras
        </p>

        <div class="flex justify-evenly text-xl">
            <div>
                <p v-for="dato in cifras.totales" class="font-light my-2">
                    <span class="text-3xl">{{ dato.number }}</span> {{ dato.text }}
                </p>
            </div>

            <div>
                <p v-for="dato in cifras.actividad" class="font-light my-2">
                    <span class="text-3xl">{{ dato.number }}</span> {{ dato.text }}
                </p>
            </div>
        </div>
    </div>

    <!-- Nube de palabras con los temas que abordan los documentales -->
    <div class="text-center bg-neutral-400/15 h-dvh">
        <p class="text-2xl font-bold text-primary-400 uppercase py-12">
            Nube de palabras
        </p>

        <!-- <Placeholder :height="650" /> -->

        <CloudWords />
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'fluid', // ancho total sin margenes
    title: 'Catálogo Mujeres Documentalistas en México (1970-1985)'
})

// Números y crifras del proyecto
const cifras = {
    totales: [
        {text: 'documentalistas', number: '26'},
        {text: 'colectivos', number: '6'},
        {text: 'documentales', number: '128'},
        {text: 'horas de película', number: '250'},
    ],
    actividad: [
        {text: 'realizadoras', number: '20'},
        {text: 'editoras', number: '12'},
        {text: 'camarógrafas', number: '17'},
        {text: 'sonidistas', number: '4'},
        {text: 'fotógrafas', number: '15'},
        {text: 'animadoras', number: '2'},
    ],
}
</script>
words