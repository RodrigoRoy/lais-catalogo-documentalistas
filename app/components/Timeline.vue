<template>
    <div class="touch-pan-x -webkit-overflow-scrolling-touch timeline-wrapper overflow-x-hidden hover:overflow-x-scroll onTouchMove:overflow-x-scroll">
        <div class="flex flex-nowrap">
            <!-- <div v-for="(item, index) in items" :key="index" class="mr-4 relative">
                <UTimeline orientation="horizontal" :default-value="1" :items="[item]" class="w-full">
                    <template #item="{ item }">
                        <div class="flex flex-row">
                            <img :src="item.image" alt="Image" class="w-20 h-20 mr-4" />
                            
                            <div>
                                <h2>{{ item.title }}</h2>
                                <p>{{ item.description }}</p>
                            </div>
                        </div>
                    </template>
                </UTimeline>
            </div> -->
            <UTimeline orientation="horizontal" :items="items" class="w-full" />
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
</script>