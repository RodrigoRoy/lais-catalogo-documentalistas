<template>
    <h2 class="text-2xl font-bold text-center uppercase mt-8 mb-2">
        {{ title }}
    </h2>

    <p v-if="props.subtitle" class="text-sm font-light text-center uppercase mb-12">
        {{ subtitle }}
    </p>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
    }
})
</script>