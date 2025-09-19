<template>
    <div ref="chartContainer" with="500" height="500" class="flex justify-center"></div>
</template>

<script>
    import * as d3 from 'd3';
    import cloud from 'd3-cloud';

    export default {
        async mounted() {
            let words = [
                "Noticias",
                "Editar",
                "Festival",
                "Película",
                "Cine",
                "Documental",
                "Mujeres",
                "Cineteca",
                "Mujer",
                "Historia"
            ];

            const fontFamily = "sans-serif";
            const fontScale = 40;
            const padding = 3;
            const height = 500;
            const width = 700;
            const rotate = d => Math.random() > 0.5 ? Math.random() * 0 : 90;

            var data = d3.rollups(
                words,
                (group) => group.length,
                (w) => w
            )
            .sort(([, a], [, b]) => d3.descending(a, b))
            .slice(0, 250)
            .map(([text, value]) => ({ text, value }));

            const colorScale = d3.scaleOrdinal()
            .domain([0, 1])
            .range(['white', 'black']);

            const svg = d3
                .select(this.$refs.chartContainer)
                .append("svg")
                .attr("height", height) // Altura del texto
                .attr("width", width) // Ancho del texto
                .attr("font-family", fontFamily) // Fuente del texto
                .attr("text-anchor", "middle") // Alinear el texto
                .attr("cursor", "pointer") // Se agrega cursor
                .on("click", (d) => console.log("Redireccion: ", d.srcElement.innerHTML)) // Agregar funcion de click
                .on("mouseover", (d) => console.log("Hover: ", d)) // Agregar funcion de hover

            const w_cloud = cloud()
            .size([width, height])
            .words(data.map((d) => Object.create(d)))
            .padding(padding)
            .rotate(rotate)
            .font(fontFamily)
            .fontSize((d) => Math.random(10, 10) * fontScale)
            .on("word", ({ size, x, y, rotate, text }) => {
            svg
                .append("text")
                .attr("font-size", size) // Tamaño de la palabra
                .attr("transform", `translate(${x},${y}) rotate(${rotate})`) // Posicion de la palabra
                .text(text) // Texto
                .attr("fill", d => colorScale(Math.random())) // Cambiar color de las palabras
            })
            w_cloud.start();
        }
    }
</script>