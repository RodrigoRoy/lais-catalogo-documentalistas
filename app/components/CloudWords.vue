<template>
    <div ref="chartContainer" with="500" height="500" class="flex justify-center"></div>
</template>

<script>
    import * as d3 from 'd3';
    import cloud from 'd3-cloud';

    export default {
        mounted() {
            const words = [
                'Documental',
                "Mujeres",
                "Cine",
                "LAIS",
                "Cineteca",
                "Documentalistas",
                "Documentales",
            ];

            const fontFamily = "sans-serif";
            const fontScale = 25;
            const padding = 0;
            const height = 500;
            const width = 700;
            const rotate = () => 0; // () => (~~(Math.random() * 6) - 3) * 30

            var data = d3.rollups(
                words,
                (group) => group.length,
                (w) => w
            )
            .sort(([, a], [, b]) => d3.descending(a, b))
            .slice(0, 250)
            .map(([text, value]) => ({ text, value }));

            const svg = d3
                .select(this.$refs.chartContainer)
                .append("svg")
                .attr("height", height) // Altura del texto
                .attr("width", width) // Ancho del texto
                .attr("font-family", fontFamily) // Fuente del texto
                .attr("text-anchor", "middle") // Alinear el texto
                .attr("fill", "white") // Cambiar color de las palabras
                .on("click", (d) => console.log("Redireccion: ", d.srcElement.innerHTML)); // Agregar funcion de click

            const w_cloud = cloud()
            .size([width, height])
            .words(data.map((d) => Object.create(d)))
            .padding(padding)
            .rotate(rotate)
            .font(fontFamily)
            .fontSize((d) => Math.sqrt(d.value) * fontScale)
            .on("word", ({ size, x, y, rotate, text }) => {
            svg
                .append("text")
                .attr("font-size", size) // Tamaño de la palabra
                .attr("transform", `translate(${x},${y}) rotate(${rotate})`) // Posicion de la palabra
                .text(text); // Texto
            })
            w_cloud.start();
        }
    }
</script>