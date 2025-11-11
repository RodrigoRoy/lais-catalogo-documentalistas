<!-- Representación mínima de un documental, similar a un elemento Card -->
<template>
    <NuxtLink :to="`/documentales/${data.adicional.url}`">
        <div class="relative group">
            <!-- Imagen de portada y título (sobre imagen con fondo degradado) -->
            <div class="relative z-10">
                <NuxtImg :src="`/documentales/${data.adicional.imagen}` || 'https://picsum.photos/seed/picsum/300/200'" class="max-h-60" />
                <!-- TO DO: Fotogramas de documentales -->
                <!-- <NuxtImg :src="'https://picsum.photos/seed/picsum/300/200'" class="max-h-60" /> -->
                <div class="absolute bottom-0 left-0 bg-linear-to-t from-neutral-950/90 to-transparent p-2 text-neutral-100 w-full">
                    <p class="uppercase text-sm">
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
            <div class="absolute bottom-0 translate-y-full text-xs bg-neutral-950 text-neutral-100 w-full px-2 pb-1 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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

// Ejemplo de información recibida de la base de datos
// Aŕeas y campos comentados indican que no son datos necesarios para crear la vista
// const data = reactive({
//     identificacion: {
//         // codigoReferencia: 'MXIM-AV-21-1-7',
//         titulo: 'Xantolo, fiesta de todos los santos',
//         fecha: '1974',
//         pais: 'México',
//         duracion: 28,
//         realizacion: 'Grupo Cine Labor, Olivia Carrión, Epigmenio Ibarra, Gonzalo Infante, Scott S. Robinson',
//         // guion: 'Epigmenio Ibarra',
//         // otrosColaboracion: 'Colabora Dirección General de Educación Audiovisual, S.E.P., Agradecimientos a SEP Habitantes de Alahualtitla, Veracruz, Centro Coordinador Nahua Tepehua. Remasterizado por Armando Hernández G.'
//     },
//     // contexto: {
//     //     entidadProductora: 'Instituto Nacional Indigenista y Universidad Autónoma Metropolitana- Iztapalapa ',
//     //     produccion: 'Grupo Cine Labor',
//     //     historiaInstitucional: '"El Instituto Nacional Indigenista (INI) fue creado en 1948 para abordar los rezagos sociales de los pueblos indígenas en México. En 2003, se estableció la Comisión Nacional para el Desarrollo de los Pueblos Indígenas (CDI) en su lugar. Esta nueva institución tenía la responsabilidad de coordinar y evaluar la acción pública para beneficiar a los pueblos indígenas. Para 2012, México había avanzado en la aceptación y comprensión de la diversidad cultural y lingüística, lo que se reflejaba en un marco jurídico más inclusivo y en herramientas administrativas para impulsar un desarrollo con identidad para los pueblos indígenas. Tanto el INI como la CDI han contribuido al diseño institucional y las formas de trabajo actuales en la atención a los pueblos indígenas en México. La Universidad Autónoma Metropolitana (UAM) se establece en un momento de cambios educativos en México, influenciados por movimientos sociales y estudiantiles. Fundada durante el sexenio de Luis Echeverría Álvarez, la UAM busca innovar en la educación superior. Bajo la dirección del Arquitecto Pedro Ramírez Vázquez, se estructura en tres unidades: Azcapotzalco, Iztapalapa y Xochimilco. La unidad Iztapalapa, la más completa, comienza su construcción en 1973 y se planifica en seis etapas. A lo largo de los años, se expande y desarrolla, incorporando nuevos espacios y tecnologías. En el 2003, se suma el predio "El Gallito", ampliando aún más su infraestructura.',
//     //     resenaBiografica: 'El Grupo Cine Labor fue una cooperativa de cineastas mexicanos fundada en 1963 por jóvenes cineastas que buscaban crear una cinematografía independiente y comprometida socialmente. Se destacó por su enfoque en el cine documental y su participación activa en movimientos sociales y políticos de la época. El grupo produjo numerosos documentales sobre temas sociales, políticos y culturales de México, abordando cuestiones como la lucha obrera, los movimientos estudiantiles, la vida indígena y la realidad urbana.',
//     // },
//     contenidoEstructura: {
//         sinopsis: 'Documental que explora la celebración del Xantolo en la región de la Huasteca, México, destacando el sincretismo religioso entre los pueblos indígenas nahua y tepehua de Chicontepec, Veracruz. El filme muestra los rituales, música y danza que honran a los difuntos y celebran la vida durante esta festividad arraigada en la identidad cultural de la Huasteca.',
//         // descriptorOnomastico: 'Instituto Nacional Indigenista',
//         // descriptorToponimico: 'Veracruz, Huasteca veracruzana, Chicontepec',
//         // fuentes: 'Grabación en campo, testimonios orales',
//         // recursos: 'Elementos audiovisuales narrativos, musicalización, narración en off',
//     },
//     condicionesAccesoUso: {
//         idiomaOriginal: 'Náhuatl y castellano. Huichol (doblaje disponible)',
//         subtitulaje: 'Castellano',
//         color: 'Color',
//         soporteOriginal: '16 mm',
//     },
//     // notas: {
//     //     notas: 'El audio del video colgado en YouTube es muy malo, por lo que se pierden muchas palabras'
//     // },
//     // controlDescripcion: {
//     //     nombreCatalogacion: 'María Fernanda Gómez Zamora',
//     //     fechaDescripcion: '13 de marzo de 2024',
//     // },
//     adicional: {
//         imagen: 'https://picsum.photos/seed/picsum/300/200',
//         mujeres: [
//             {
//                 documentalista: {
//                     nombre: 'Alejandra Islas',
//                     nombreCompleto: 'Alejandra Islas Caro',
//                     url: 'alejandra-islas',
//                     imagen: 'https://picsum.photos/id/82/200/300',
//                 },
//                 mencionResponsabilidad: 'Dirección',
//             },
//             {
//                 documentalista: {
//                     nombre: 'Beatriz Mira',
//                     url: 'beatriz-mira',
//                     imagen: 'https://picsum.photos/id/82/200/300',
//                 },
//                 mencionResponsabilidad: 'Guión',
//             }
//         ],
//         etiquetas: ['Pueblos originarios', 'Tradiciones', 'Cultura'],
//         url: 'xantolo-fiesta-de-todos-los-santos',
//         // urlExterna: 'https://youtube.com',
//         // comentario: { 
//         //     texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod est eget pharetra euismod. Integer pharetra id eros vitae rutrum. Curabitur dui ipsum, aliquet eu metus vitae, tincidunt sodales lectus. Phasellus volutpat dui sit amet quam varius, sed lacinia tellus imperdiet. Aenean erat leo, semper ut dictum at, auctor et lectus. Donec blandit lectus at interdum tempor. Quisque imperdiet, nibh non vulputate cursus, est ex commodo dolor, iaculis lacinia sapien orci eget erat. Proin viverra, erat vitae luctus porttitor, ante erat malesuada neque, a lobortis ligula odio vitae sapien. Nunc tincidunt suscipit dignissim. Morbi non neque efficitur, laoreet erat quis, vehicula eros. In hac habitasse platea dictumst. Nunc quis odio sollicitudin, porttitor urna lobortis, venenatis velit. Suspendisse finibus varius purus, sit amet fermentum libero gravida sed. Pellentesque non metus in leo consectetur scelerisque non posuere diam. Donec condimentum metus neque, at ultrices erat interdum non. Phasellus varius gravida rutrum. Phasellus non dignissim sapien. Nullam vehicula urna metus, ut rhoncus purus faucibus ac. Mauris semper elit orci, at facilisis risus aliquet malesuada. Praesent turpis dui, fringilla ac pharetra et, finibus nec quam. Nulla at tortor nec risus placerat efficitur. Vestibulum ut ante at diam blandit elementum. Aenean placerat a eros vitae ullamcorper. Morbi molestie tempor velit sit amet ultrices. Duis tempor dictum hendrerit. Vivamus lobortis enim a massa consectetur dignissim. Praesent non posuere odio. Vestibulum suscipit elit in nunc imperdiet, id fringilla velit ornare. Donec eleifend sit amet ante sed congue. Morbi quis porttitor tortor. Nullam fermentum vel tortor mattis commodo. Phasellus sit amet semper mauris, quis ultricies nulla. Pellentesque pharetra venenatis dolor, et elementum eros porttitor eget. Morbi imperdiet pellentesque arcu, ut tincidunt lectus semper non. Praesent malesuada, metus at tincidunt suscipit, est erat malesuada justo, at luctus lorem risus in dui. Nulla vestibulum ullamcorper mattis. Nullam viverra sem a augue blandit, at lobortis elit volutpat. Pellentesque quis luctus nisl, sit amet facilisis nisl. Integer tempus euismod dui elementum blandit. Duis eget quam eget purus laoreet tempor vitae quis quam. Pellentesque non rutrum ante. In ac aliquam massa. Ut sagittis dictum ante. Ut venenatis, justo nec condimentum ultrices, sem dui semper diam, sed mattis risus purus gravida velit. Duis suscipit gravida ligula. Donec auctor tristique ante, nec mattis quam ornare eget. Proin consequat condimentum purus ac placerat. Etiam ac tellus vel leo hendrerit faucibus in in est. Sed pulvinar eget enim egestas euismod. Praesent non mattis augue, vitae malesuada erat. Maecenas bibendum, augue a viverra semper, ex risus sagittis lorem, iaculis ultricies odio mi id sapien. Duis ultricies condimentum augue, id faucibus est consequat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
//         //     autoria: 'Phasellus Euismod',
//         //     fecha: '29 de agosto de 2025',
//         //     semblanza: 'Praesent non mattis augue, vitae malesuada erat. Maecenas bibendum, augue a viverra semper, ex risus sagittis lorem, iaculis ultricies odio mi id sapien. Duis ultricies condimentum augue, id faucibus est consequat in.',
//         // },
//     },
// })
</script>

<style scoped>
/* Fuente tipográfica (Google Fonts con Nuxt Fonts) */
div{
    font-family: "Be Vietnam Pro", Roboto, sans-serif;
}
</style>