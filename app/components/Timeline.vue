<template>
    <div class="touch-pan-x -webkit-overflow-scrolling-touch timeline-wrapper overflow-x-hidden hover:overflow-x-scroll onTouchMove:overflow-x-scroll">
        <div class="flex flex-nowrap">
            <UTimeline :orientation="isMobile ? 'vertical' : 'horizontal'" :items="items" class="w-full" color="neutral" />
        </div>
    </div>
</template>

<script setup>
// Propiedades esperadas del componente
const props = defineProps({
    data: { type: [Object], required: true } // lista con los datos a mostrar (documentalistas)
})

import moment from 'moment' // formato rápido de fechas

// renombramiento de propiedades
const newItems = props.data.map((documentalista) => {
    return {
        date: moment(documentalista.fechaNacimiento).format('YYYY'),
        title: documentalista.nombre,
        description: documentalista.description,
        avatar: {
            src: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
        }
    }
})
// agregar reactividad a nueva lista de objetos para timeline
const items = ref(newItems)


// Comprobación de dispositivos móviles
let isMobile = ref(false);
if(window !== undefined){
    isMobile.value = window.innerWidth < 768
    window.addEventListener('resize', () => {
        isMobile.value = window.innerWidth < 768
    })
}

</script>