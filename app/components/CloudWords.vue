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

            var fontFamily = "sans-serif";
            var fontScale = 25;
            var padding = 0;
            var height = 500;
            var width = 700;
            const rotate = () => 0; // () => (~~(Math.random() * 6) - 3) * 30

            var data = d3
                .rollups(
                words,
                (group) => group.length,
                (w) => w
                )
                .sort(([, a], [, b]) => d3.descending(a, b))
                .slice(0, 250)
                .map(([text, value]) => ({ text, value }));
            console.log(data);

            const svg = d3
                .select(this.$refs.chartContainer)
                .append("svg")
                .attr("height", height)
                .attr("width", width)
                .attr("font-family", fontFamily)
                .attr("text-anchor", "middle")
                .attr("fill", "white");

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
                    .attr("font-size", size)
                    .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
                    .attr("color", "white")
                    .text(text);
                });

            w_cloud.start();
        }
    }
</script>