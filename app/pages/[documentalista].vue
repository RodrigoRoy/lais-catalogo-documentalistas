<template>
    <!-- Presentación inicial de la documentalista -->
    <div :class="`bg-[url(/documentalistas/${route.params.documentalista}/${documentalista.imagen})]`">
        <div class="bg-linear-to-b from-stone-900/70 via-neutral-900/50 to-stone-900">
            <div class="h-dvh w-5/6 sm:w-3/5 mx-6 sm:mx-12">
                <p class="text-3xl sm:pt-24 text-primary">
                    {{ documentalista.nombre }}
                </p>
                <p v-if="documentalista.colectivos" class="font-light">
                    Participó en: {{ documentalista.colectivos }}
                </p>
                <p class="my-6">
                    {{ documentalista.semblanza }}
                </p>
                <div>
                    <UButton v-if="documentalista.clipVideo" variant="soft" size="md" icon="i-mdi-youtube" :to="documentalista.clipVideo" target="_blank">Seminario Bitácora</UButton>
                </div>
            </div>
        </div>
    </div>
    
    <UContainer>
        <!-- Galería de fotos (de archivo y producción) -->
        <!-- El diseño se inspira de las fotos tipo Polaroid -->
        <div class="my-8">
            <p class="text-center text-2xl text-primary mb-4 uppercase">
                Galería
            </p>
            <div class="columns-1 sm:columns-2 md:columns-4 space-y-4">
                <UCard v-for="foto in documentalista.galeria" variant="subtle" class="bg-white text-black rounded-none shadow-lg/40 dark:shadow-primary-50 dark:shadow-lg/30">
                    <NuxtImg :src="`/documentalistas/${route.params.documentalista}/${foto.imagen}`" :alt="foto.descripcion" class="object-cover w-full max-h-40" />
                    <div class="text-xs text-justify p-2">
                        {{ foto.descripcion }}
                    </div>
                </UCard>
            </div>
        </div>

        <!-- Documentalistas que participaron en el documental -->
        <div class="text-center">
            <p class="text-2xl text-primary mb-4 uppercase">
                Documentales
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3">
                <div v-for="documental in documentalista.documentales">
                    <DocumentalCard :data="documental" />
                </div>
            </div>
        </div>
    </UContainer>
</template>

<script setup>
definePageMeta({
    title: 'Documentalista',
    layout: 'fluid',
})

const route = useRoute()
const { data:documentalista } = await useFetch(`/api/documentalistas/${route.params.documentalista}`)

// Ejemplo de información recibida de la base de datos
// const data = reactive({
//     nombre: 'Guadalupe Sánchez Sosa',
//     nombreCompleto: 'Guadalupe Sánchez Sosa',
//     url: 'guadalupe-sanchez',
//     fechaNacimiento: new Date('1955-01-01'),
//     fechaDefuncion: null,
//     semblanza: 'Artista visual egresada de “San Carlos” hoy Facultad de Artes y Diseño. Formó parte del Colectivo Cine Mujer. Ha realizado obra en documental, animación, dirección de arte en cine e ilustración. Ganó el Ariel como directora de arte con Perfume de Violetas y Pantalla de cristal con Bajo los Escombros. Forma parte del Sistema Nacional de Creadores. Su Cortometraje animado Niño de mis Ojos y el largometraje documental La Primera Sonrisa han participado en múltiples festivales nacionales e internacionales. Actualmente impulsa la salida de su último largometraje documental Mi Piel Oculta, que aborda la historia corporal de cuatro mujeres y un joven trans, más allá de lo femenino y lo masculino, es un encuentro con la otredad donde surgen experiencias compartidas que nos confrontan con la belleza, los prejuicios, los estereotipos y las violencias que les acechan. Se ha entregado en busca de su propia expresión, vinculada siempre a los niños, las mujeres y la educación en valores y derechos.',
//     mencionResponsabilidad: 'Animación',
//     documentales: [
//         {
//             identificacion: {
//                 titulo: '¿Y si eres mujer?',
//                 fecha: '1976',
//             },
//             adicional: {
//                 imagen: 'https://picsum.photos/seed/picsum/300/200'
//             }
//         },
//         {
//             identificacion: {
//                 titulo: 'Xantolo, fiesta de todos los santos',
//                 fecha: '1974',
//                 pais: 'México',
//                 duracion: 28,
//                 realizacion: 'Grupo Cine Labor, Olivia Carrión, Epigmenio Ibarra, Gonzalo Infante, Scott S. Robinson',
//             },
//             contenidoEstructura: {
//                 sinopsis: 'Documental que explora la celebración del Xantolo en la región de la Huasteca, México, destacando el sincretismo religioso entre los pueblos indígenas nahua y tepehua de Chicontepec, Veracruz. El filme muestra los rituales, música y danza que honran a los difuntos y celebran la vida durante esta festividad arraigada en la identidad cultural de la Huasteca.',
//             },
//             condicionesAccesoUso: {
//                 idiomaOriginal: 'Náhuatl y castellano. Huichol (doblaje disponible)',
//                 subtitulaje: 'Castellano',
//                 color: 'Color',
//                 soporteOriginal: '16 mm',
//             },
//             adicional: {
//                 imagen: 'https://picsum.photos/seed/picsum/300/200',
//                 mujeres: [
//                     {
//                         documentalista: {
//                             nombre: 'Alejandra Islas',
//                             nombreCompleto: 'Alejandra Islas Caro',
//                             url: 'alejandra-islas',
//                             imagen: 'https://picsum.photos/id/82/200/300',
//                         },
//                         mencionResponsabilidad: 'Dirección',
//                     },
//                     {
//                         documentalista: {
//                             nombre: 'Beatriz Mira',
//                             url: 'beatriz-mira',
//                             imagen: 'https://picsum.photos/id/82/200/300',
//                         },
//                         mencionResponsabilidad: 'Guión',
//                     }
//                 ],
//                 etiquetas: ['Pueblos originarios', 'Tradiciones', 'Cultura'],
//                 url: 'xantolo-fiesta-de-todos-los-santos',
//             },
//         },
//     ],
//     colectivos: 'Colectivo Cine Mujer',
//     imagen: 'https://picsum.photos/id/82/200/300',
//     clipVideo: 'https://youtube.com',
//     galeria: [
//         {
//             imagen: 'https://picsum.photos/id/83/400/300',
//             descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
//         },
//         {
//             imagen: 'https://picsum.photos/id/84/300/450',
//             descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
//         },
//         {
//             imagen: 'https://picsum.photos/id/85/350/300',
//             descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
//         },
//         {
//             imagen: 'https://picsum.photos/id/98/300/400',
//             descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
//         },
//         {
//             imagen: 'https://picsum.photos/id/87/450/300',
//             descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
//         },
//         {
//             imagen: 'https://picsum.photos/id/88/350/400',
//             descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
//         },
//         {
//             imagen: 'https://picsum.photos/id/89/400/350',
//             descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
//         },
//         {
//             imagen: 'https://picsum.photos/id/90/400/300',
//             descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
//         },
//     ],
// })
</script>|