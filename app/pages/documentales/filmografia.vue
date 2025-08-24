<template>
    <h2 class="text-2xl font-bold text-center uppercase mt-8 mb-6 text-primary">
        Filmografía
    </h2>

    <p class="text-sm font-normal text-center">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor.
    </p>

    <!-- Filtros y ordenamiento -->
    <div class="sm:flex sm:justify-between my-8">
        <!-- Lado izquierdo -->
        <div>
            <USelect v-model="tema" :items="temas" icon="i-mdi-movie-open-outline" size="md" placeholder="Temática" class="w-48 mb-2 mr-1 sm:mr-4" />
            <USelect v-model="year" :items="years" icon="i-mdi-calendar-blank" size="md" placeholder="Año" class="w-48 mb-2 mr-1 sm:mr-4" />
            <USelect v-model="documentalista" :items="documentalistas" icon="i-mdi-face-woman" size="md" placeholder="Documentalista" class="w-48" />
        </div>

        <!-- Lado derecho -->
        <div>
            <URadioGroup v-model="sort" :items="sortOptions" size="md" orientation="horizontal" default-value="Cronológico" class="mt-4 sm:mt-0" />
        </div>
    </div>

    <!-- Lista de documentales según filtros y ordenamiento -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-3">
        <div  v-for="value in 120">
            <DocumentalCard />
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    title: 'Filmografía',
})

// Variables para el filtrado de documentales
const tema = ref('')
const temas = ref(['Trabajo doméstico', 'Educación', 'Pueblos originarios', 'Diversidad sexual', 'Alimentación', 'Despojo territorial', 'Naturaleza', 'Luchas campesinas', 'Derechos de la mujer'])
const year = ref('')
const years = ref(['1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985'])
const documentalista = ref('')
const documentalistas = ref(['Alejandra Islas', 'Ana Diez Díaz', 'Angeles Necoechea', 'Beatriz Mira Andreu', 'Bertha Navarro', 'Carolina Fernández', 'Dana Rotberg', 'Gabriela Espinoza', 'Gloria Ribé', 'Guadalupe Sánchez Sosa', 'Guita Schyfter Lepar', 'Josefina Morales', 'Lourdes Portillo', 'Luisa Isabela Riley Rodríguez', 'Marcela Fernández Violante', 'Margarita Suzan Prieto', 'María del Carmen de Lara ', 'Martha Colmenares', 'Maru Tamés', 'Odile Herrenschmidt', 'Olivia Carrión', 'Rosa Martha Fernández', 'Sonia Fritz', 'Trinidad Langarica'])

// Variables para el ordenamiento de documentales
const sort = ref('Cronológico')
const sortOptions = ref(['Cronológico', 'Alfabético'])
</script>