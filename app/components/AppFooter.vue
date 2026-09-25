<template>
    <UFooter class="bg-primary-700 py-4">
        <template #left>
            <div class="text-xs text-center sm:text-left">
                Este sitio está bajo una licencia de Creative Commons Reconocimiento-NoComercial 4.0 Internacional.
                <!-- <br />  -->
                <!-- <em>Este Catálogo en línea tiene fines educativos y culturales, no persigue fines de lucro. Los contenidos son manifestaciones de libre expresión y no reflejan una postura institucional.</em> -->
                <NuxtImg src="https://licensebuttons.net/l/by-nc/4.0/88x31.png" class="block mx-auto md:mx-0" />
            </div>
        </template>

        <UNavigationMenu :items="items" color="neutral" variant="link" class="hidden sm:block" />

        <template #right>
            <UButton icon="i-lucide-globe" color="neutral" variant="link" to="https://lais.mora.edu.mx/" target="_blank" aria-label="Sitio web"></UButton>
            <UButton icon="ri-facebook-circle-line" color="neutral" variant="link" to="https://www.facebook.com/LAIS.InstitutoMora" target="_blank" aria-label="Facebook"></UButton>
            <UButton icon="ri-instagram-line" color="neutral" variant="link" to="https://www.instagram.com/lais.im/" target="_blank" aria-label="Instagram"></UButton>
            <UButton icon="ri-youtube-line" color="neutral" variant="link" to="https://www.youtube.com/user/laismora" target="_blank" aria-label="YouTube"></UButton>
            <UButton icon="ri-github-fill" color="neutral" variant="link" to="https://github.com/rodrigoRoy/lais-catalogo-documentalistas" target="_blank" aria-label="GitHub"></UButton>
        </template>
    </UFooter>
</template>

<script setup>
// Opciones de navegación
const items = [
  {
    label: 'Acerca del catálogo',
    to: { path:'/acerca-de', hash: '#catalogo' },
  },
  {
    label: 'Equipo de investigación',
    to: { path:'/acerca-de', hash: '#investigacion' },
  },
  {
    label: 'Créditos',
    to: { path:'/acerca-de', hash: '#creditos' },
  },
  {
    label: 'Forma de citar',
    to: { path:'/acerca-de', hash: '#citar' },
  }
]
</script>