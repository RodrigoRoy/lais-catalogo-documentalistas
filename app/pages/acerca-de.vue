<template>
    <div class="bg-primary-700 pb-16">
        <UContainer>
            <h2 class="text-xl sm:text-2xl font-bold text-center uppercase mb-2 pt-16 pb-4">
                Acerca del catálogo
            </h2>
        
            <p class="font-normal text-justify mb-4">
                En México, la participación de las mujeres en el cine se incrementó a partir de los años sesenta y se profundizó en la siguiente década a raíz de tres convergencias: la creación de las escuelas de cine, la posibilidad de acceder a formatos de filmación más económicos como el 16 mm y el Super 8, y el uso que hicieron los colectivos políticos del medio cinematográfico como herramienta de lucha.
            </p>
            <p class="font-normal text-justify mb-4">
                El Colectivo Cine Mujer fue un referente de cine feminista del que en su momento se escribió (para bien y para mal), y que posteriormente ha motivado varios estudios. además de los trabajos enfocados en las figuras de algunas de las realizadoras. En 2021 un grupo de investigadoras e investigadores de diversas instituciones e independientes, que convergimos en el Seminario Interinstitucional sobre Documental e Investigación, impulsado por el Laboratorio Audiovisual de Investigación Social del Instituto Mora, comenzamos a investigar los documentales hechos por mujeres entre 1970 y 1985. Aunque encontramos diversos estudios del tema, identificamos que existe una escasa representación de las mujeres en la historia del documental, una carencia de filmografías y una dificultad para acceder a sus películas.
            </p>
            <p class="font-normal text-justify mb-4">
                En una primera etapa de la investigación nos avocamos a la creación de fuentes de investigación a partir de entrevistas para historias de vida, proceso que incluyó sentarnos a mirar junto con ellas sus fotografías, documentos y películas. Fue en ese proceso que su filmografía comenzó a aflorar; sin embargo, no fue sencillo lograr ver sus películas debido a que en la mayoría de los casos ellas no las resguardaban, y a que en muchas ocasiones no poseían los derechos para poder obtener una copia pese a su autoría. Además, el cambio del soporte del cine al video (en principio analógico y posteriormente digital), disminuyó las posibilidades de acceder a copias para poder hacer investigación.
            </p>
            <p class="font-normal text-justify">
                Consideramos que un mecanismo para subsanar la carencia de conocimiento sobre estos trabajos podría ser un catálogo web de acceso abierto, que visibilice tanto a las mujeres documentalistas del periodo como su obra. Este Catálogo reúne semblanzas, listados de filmografía, galerías fotográficas y fichas técnicas de los documentales (realizados a partir de visionados, para los cuales una parte considerable requirió digitalización), así como comentarios hechos por el equipo de investigación. Aunque no se colocan los documentales por motivos de derechos de autor, se compila información sobre su contenido, dejando ver la manera en la que estas mujeres contribuyeron a mirar y hacer ver la realidad social que les atravesó. Además de las semblanzas de las documentalistas, encontrarán fichas dedicadas a Guadalupe Ferrer y Teresa Carvajal, preservadoras cuyo amplio conocimiento del periodo y amor por el cine ha sido central para acceder a muchas de estas obras.
            </p>
            <p class="font-normal text-justify">
                Es preciso aclarar que de manera excepcional este catálogo alberga obras fuera del periodo en las que participaron: Martha Colmenares, como parte de la Comisión de relaciones de la Asamblea de Autoridades Zapotecas y Chinantecas de la Sierra, Teófila Palafox, Bertha Navarro y Trinidad Langarica. El primer caso es relevante por tratarse de obras colectivas del primer colectivo de video indígena del país, piezas que a la fecha no cuentan con un respaldo fuera de la comunidad y que conforman un archivo audiovisual que se comienza a ser organizado. El segundo caso por tratarse de la obra de la única tejedora ikoots que siguió produciendo cine luego del Primer taller de cine indígena (INI, 1985), Teófila Palafox. El tercero, debido a que, al tratarse de obras clandestinas, los Comunicados del C.N.H. de 1968 no acreditaron a su editora, Bertha Navarro; un hallazgo de la investigación relevante, además, por tratarse del primer acercamiento de Navarro al documental. Finalmente, en el último caso, porque el trabajo personal de Trinidad Langarica como camarógrafa y realizadora se encuentra disperso, aunado a que al tratarse de piezas institucionales carecen de créditos, por lo que consideramos que, de no catalogarse ahora, más tarde su catalogación y digitalización sería más difícil o podría perderse la referencia a su colaboración.
            </p>
            <p class="font-normal text-justify">
                Por último, resta señalar que este esfuerzo no hubiera sido posible sin la colaboración de las propias Mujeres Documentalistas, quienes nos han compartido su tiempo, sus recuerdos, reflexiones y cariño. Pero tampoco sin los archivos que generosamente nos abrieron las puertas y dieron facilidades para lograr las digitalizaciones y visionados necesarios. El Catálogo es una obra inconclusa gracias a la gran producción en la que participaron las mujeres. Queda pendiente seguir rastreando, digitalizar, catalogar y comentar más obras, a las que esperamos acceder algún día de manera libre y gratuita.
            </p>
        </UContainer>
    </div>

    <div class="bg-neutral-950">
        <UContainer>
            <h2 class="text-xl sm:text-2xl font-bold text-center uppercase mb-2 pt-16 pb-4">
                Equipo de investigación
            </h2>

            <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-3 pb-16">
                <div v-for="persona in investigacion" class="relative group">
                    <NuxtImg :src="`/investigacion/${persona.imagen}`" />
                    <div class="absolute top-0 bg-linear-to-b from-neutral-950/90 to-transparent p-2 w-full">
                        <p class="text-sm">
                            {{ persona.nombre }}
                        </p>
                    </div>
                    <div class="absolute hidden sm:block bottom-0 bg-linear-to-t from-neutral-950/90 to-transparent p-2 w-full" >
                        <p class="text-xs font-light opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                            {{ persona.semblanza }}
                        </p>
                    </div>
                </div>
            </div>
        </UContainer>
    </div>

    <div class="bg-beige text-neutral-950 pb-8">
        <NuxtImg src="/collage2a.png" class="float-right top-5 w-full sm:max-w-160 mb-6 sm:mb-0" />
        <UContainer>
            <h2 class="text-lg sm:text-2xl font-bold text-center uppercase mb-2 pt-8 pb-4">
                Créditos
            </h2>
    
            <p class="mb-4">
                Este trabajo de investigación se hizo <strong>de la mano de</strong> Alejandra Islas, Beatriz Mira, Bertha Navarro, Dana Rotberg, Gabriela Espinoza, Guadalupe Sánchez, Guadalupe Ferrer, Guadalupe Escandón, Justina Escandón, Juana Canseco, Josefina Morales, Maricarmen de Lara, Martha Colmenares, Maru Tamés (†), Laura Iñigo, Olivia Carrión (†), Penny Simpson, Rosa Martha Fernández, Sonia Fritz, Teófila Palafox, Teresa Carvajal y Trinidad Langarica. 
            </p>
    
            <h3 class="uppercase text-md sm:text-lg font-medium mb-2">
                Investigación
            </h3>

            <p class="mb-4">
                Coordinación: Lilia García Torres
                <br />
                Responsables de digitalización: Felipe Morales Leal y Miguel Ángel García Mani
                <br />
                Asistente de investigación: Miguel Ángel García Mani
            </p>

            <p class="mb-4">
                Investigación colectiva (terceros aportantes): Alejandra González, Alejandro Gracida, Ana Daniela Nahmad, Areli Caballero, David Jurado, Dulce María Andrea Ortega, Eréndira Martínez, Felipe Morales Leal, Fernanda Gómez, Isabella Poppe, Jaime Sánchez, Leilani Noguez, Lilia García, Lourdes Roca, Miguel Ángel García Mani, Norma Sánchez, Teresa Solís y Yerid López.
            </p>

            <p class="mb-4">
                En la investigación también participaron: Thania Ochoa, Álvaro Vázquez, Xiatil González y Karen Rivera.
            </p>

            <p class="mb-4">
                Reprografías: Felipe Morales Leal, Lilia García, Rodrigo Colín, Edgar Aguilar, Fernanda Gómez, Daniela Reyes y Miguel Nava.
            </p>

            <p class="mb-4">
                Colaboraciones de becarias/os y servicio social: Edgar Aguilar Espinoza, Astrid Eilyn Juárez Leal, Martín Mort García y Bertnard Martí León Albarrán.
            </p>

            <h3 class="uppercase text-md sm:text-lg font-medium mb-2">
                Página web <NuxtLink to="https://github.com/rodrigoRoy/lais-catalogo-documentalistas" target="_blank"><UTooltip text="GitHub"><UIcon name="i-lucide-github" class="size-4 ml-1" /></UTooltip></NuxtLink>
            </h3>

            <p class="mb-4">
                Coordinación: Rodrigo Colín
                <br />
                Desarrollo web: Rodrigo Colín, Sergio Amaro Rosas y Eder Samuel Berber Gutiérrez
                <br />
                Diseño gráfico: Marina Corach
                <br />
                Curaduría: Lilia García Torres
                <br />
                Producción audiovisual: Felipe Morales Leal y Edgar Aguilar 
            </p>

            <p class="mb-4">
                Producción: Instituto Mora-LAIS, IMCINE-FOCINE 
            </p>

            <h3 class="uppercase text-md sm:text-lg font-medium mt-6 sm:mt-2 mb-2">
                Fuentes de investigación
            </h3>

            <p class="mb-4">
                <strong>Acervos personales</strong>
                <br />
                Alejandra Islas, Bertha Navarro, Dana Rotberg, archivo Familiar Francisca Palafox, Gabriela Espinoza, Josefina Morales, Guadalupe Ferrer, Guadalupe Sánchez, Maricarmen de Lara, Martha Colmenares, Maru Tamés, Odile Herrenschmidt, Penny Simpson, Olivia Carrión, Rosa Martha Fernández, Teófila Palafox, Trinidad Langarica, Sonia Fritz, Familia Robinson Carrión y Javier Hinojosa.
            </p>

            <p class="mb-4">
                <strong>Acervos institucionales</strong>
                <br />
                <strong>Archivo Paul Leduc</strong>: Valentina Leduc
                <br />
                <strong>Centro de Capacitación Cinematográfica</strong>: Dinorath Ramírez González (Directora General), Claudia Prado Valencia (Subdirectora de Investigación y Divulgación), Brenda Ibañez Toledo (Jefa del Departamento de Acervo y Tráfico). 
                <br />
                <strong>Cineteca Nacional</strong>: Marina Stavenhagen (Directora general), Tania López Espinal (Subdirectora de preservación de acervos), Nataly Rashel Riquelme Barrios (Jefa del departamento de curaduría), Aleheli López Maldonado (Gestión de proyectos de digitalización y restauración),  Jorge Antonio Gutiérrez Flores (Control acceso fílmico),  Juan Pedro Bermúdez Barrera (apoyo control fílmico), Gustavo Fernández Castillo (Revisador técnico),  
                <br />
                <strong>Comisión de Relaciones de la Asamblea de Autoridades Zapotecas y Chinantecas de la Sierra AZACHIS / K-Xhon Video Cine Zapoteca</strong>: Inocencio Mena, Fernando Hernández  
                <br />
                <strong>Dirección General de Actividades Cinematográficas, Filmoteca UNAM</strong>: Antonia Rojas Ávila (Subdirectora de acervos), Cecilia F. Márquez Rodríguez (Jefa del Departamento de Documentación), José Juan Mendoza (videoteca) 
                <br />
                <strong>Dirección General de Culturas Populares, Indígenas y Urbanas</strong>: Mónica Maorenzic (Divulgación de Acervos del CID), Dulce Olivia Reynoso 
                <br />
                <strong>DOCS MX</strong>: Marco A. González (Programación) 
                <br />
                <strong>Escuela Nacional de Artes Cinematográficas, UNAM</strong>: Teresa Carvajal Juárez (Jefa del Área de Acervo Fílmico ENAC-UNAM) 
                <br />
                <strong>Instituto Mexicano de la Cinematografía</strong>: Laura Beatriz Alderete (Directora de Promoción del Cine Mexicano), Mezli Kenya Silva Pacheco (Coordinación de Acervos), Juan José Mora (Revisor técnico) 
                <br />
                <strong>Instituto Nacional de los Pueblos Indígenas</strong>: Octavio Murillo Álvarez de la Cadena (Director de Acervos), Alfredo Ortiz (Biblioteca Juan Rulfo), Silvia Gómez (Fototeca Nacho López), María Elena Franco Rojas, Antonio Rodríguez (Jefe del Departamento de Cine y Video Alfonso Muñoz) 
                <br />
                <strong>Universidad Autónoma Metropolitana, Azcapotzalco</strong>: Juan Ramírez Godínez (Coordinador de Servicios a la Información), Nicolás Pérez Diego (Jefe de la Sección Acervo Audiovisual) 
            </p>

            <p class="mb-4">
                <strong>Agradecimientos</strong>:
                Gabriela Sánchez Gutiérrez (Directora del Instituto Mora), Lourdes Roca (coordinadora Laboratorio Audiovisual de Investigación Social del Instituto Mora), personal de Recursos Materiales y Servicios Generales del Instituto Mora, Miguel Ángel Álvarez Aguilera, Federico Chao Puente, Guillermo Díaz Palafox, Angélica González Morón, Leticia Hernández Castillo, Gonzalo Infante, Nute Kuijin, Atania Díaz Herrenschmidt, Yubán Mena, Sergio Moreno, Juan Sebastián Moreno González, Nahum Leonardo Moreno González, Miguel Necoechea, Sandra Ortega, Sebastián Robinson, Amaranta Robinson, Scott Robinson, Gustavo Rosete, Yaasib Vázquez.
            </p>

            <!-- Logos institucionales -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 place-content-center pt-6" >
                <div v-for="logo in logos" class="text-center">
                    <NuxtImg :src="`/logos/${logo.img}`" :alt="logo.text" class="max-h-20 mx-auto"  />
                </div>
            </div>

            <div class="relative text-center text-xs sm:text-sm mt-6 sm:mt-0 pt-12 pb-6 uppercase">
                <p>
                    Proyecto Realizado con el apoyo del:
                </p>
                <p>
                    <strong>Instituto Mexicano de Cinematografía</strong> a través del programa:
                    <br />
                    <strong>Fomento al Cine Mexicano (FOCINE)</strong>
                </p>
                <NuxtImg src="/logos/09-imcine.png" class="mt-2 mx-auto" />
            </div>
        </UContainer>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'fluid',
    title: 'Acerca del sitio',
    colorMode: 'dark',
})

// Equipo de investigación
const { data: investigacion } = useFetch('/api/investigacion')

// Logos institucionales
const logos = [
    { text: 'Centro de Capacitación Cinematográfica', img: '01-ccc.png'},
    { text: 'Cineteca Nacional', img: '02-cineteca.png'},
    { text: 'Laboratorio de restauración digital Elena Sánchez Valenzuela', img: '03-laboratorio.png'},
    { text: 'Comisión de Relaciones de la Asamblea de Autoridades Zapotecas y Chinantecas de la Sierra AZACHIS / K-Xhon Video Cine Zapoteca', img: '04-azachis.png'},
    { text: 'Dirección General de Actividades Cinematográficas, Filmoteca UNAM', img: '05-filmoteca.png'},
    { text: 'Dirección General de Culturas Populares, Indígenas y Urbanas', img: '06-culturas-populares.png'},
    { text: 'DOCS MX', img: '07-docsmx.png'},
    { text: 'Escuela Nacional de Artes Cinematográficas, UNAM', img: '08-enac.png'},
    // { text: 'Instituto Mexicano de la Cinematografía', img: '09-imcine.png'},
    { text: 'Instituto Nacional de los Pueblos Indígenas', img: '10-inpi.png'},
    { text: 'Universidad Autónoma Metropolitana, Azcapotzalco', img: '11-uam.png'},
    { text: 'Coordinación de Servicios de Información', img: '12-cosei.png'},
    { text: 'Instituto Mora, Laboratorio Audiovisual de Investigación Social', img: '13-mora-lais.png'},
]
</script>

<style scoped>
/* Fuente tipográfica (Google Fonts con Nuxt Fonts) */
div{
    font-family: "Be Vietnam Pro", Roboto, sans-serif;
}
</style>