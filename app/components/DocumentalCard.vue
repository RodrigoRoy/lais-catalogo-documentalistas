<!-- Representación mínima de un documental, similar a un elemento Card -->
<template>
    <div class="pb-2h-61 relative rounded-lg outline-solid outline-1 outline-neutral-500/20 hover:outline-neutral-200 group hover:h-fit">
        <!-- Portada -->
        <img src="https://picsum.photos/seed/picsum/300/200" class="rounded-t-lg">
        
        <!-- Texto básico / mínimo -->
        <div class="relative bottom-0 left-0">
            <p class="text-base font-semibold text-neutral mx-2 my-1">
                Título del documental
            </p>
            <p class="text-sm font-light text-neutral mx-2 -mt-2 mb-1">
                Autor/a, País, Año
            </p>
        </div>

        <div class="pb-6 descripcion hidden group-hover:block transition duration-500 ease-in-out">
            <UButton class="mx-2 my-2" color="neutral" variant="outline">Detalles</UButton>   
            <p class="text-sm font-bold text-neutral mx-2 my-2">
                Sinopsis
            </p>
            <p class="text-xs font-light text-neutral mx-2 -mt-2 mb-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum, justo vel condimentum tincidunt, arcu tortor dictum lacus, eu ultricies ex dui et lorem. Nulla iaculis, mauris at porta auctor, lacus dui ullamcorper tortor, eget ornare lacus augue a massa. Nulla tempor sit amet nisl auctor accumsan. Nulla efficitur ultrices leo nec cursus. Duis dignissim, urna in porttitor convallis, risus sapien accumsan nibh, ac porta sem neque nec nisl. Fusce commodo dolor non neque porta consequat.
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