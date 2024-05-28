<template>
     <canvas ref="canvas" width="600" height="400"></canvas>
</template>
               
<script>
export default {
    mounted() {
        this.drawFlag();
    },
    methods: {
        drawFlag() {
            const canvas = this.$refs.canvas;
            const context = canvas.getContext('2d');

            const topVertices = [
                { x: 50, y: 50 },   
                { x: 550, y: 30 },  
                { x: 500, y: 200 }, 
                { x: 100, y: 180 }  
            ];

            const bottomVertices = [
                { x: 100, y: 180 },
                { x: 500, y: 200 },
                { x: 570, y: 370 },
                { x: 30, y: 350 }  
            ];

            const drawPolygon = (vertices, fillColor) => {
                context.beginPath();
                context.moveTo(vertices[0].x, vertices[0].y);
                for (let i = 1; i < vertices.length; i++) {
                    context.lineTo(vertices[i].x, vertices[i].y);
                }
                context.closePath();
                context.fillStyle = fillColor;
                context.fill();
            };

            drawPolygon(topVertices, '#0057B7'); 
            drawPolygon(bottomVertices, '#FFD700'); 
        }
    }
}
</script>