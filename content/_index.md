+++
+++

<p style="width: 100%; margin: 0 auto; text-align: right; padding-right: 2em;">
engineer at <a href="https://www.prisma.io">prisma</a>;
twitter <a href="https://twitter.com/_tomhoule">@_tomhoule</a>;
github <a href="https://github.com/tomhoule">@tomhoule</a>
</div>

<script>
    var target = document.querySelector("main")

    var mkCanvas = function() {
        var canvas = document.createElement("canvas")

        canvas.width = target.offsetWidth

        // Draw stuff
        var context = canvas.getContext("2d")
        context.beginPath()

        var radius = Math.max(canvas.width / 40, 10)
        var step = 2.4 * radius // distance between centers of two adjacent circles
        var xOffset = step
        var yOffset = step
        var vertices = []

        canvas.height = 3.5 * step;
        
        while (yOffset < canvas.height) {
            while (xOffset < canvas.width - step) {
                context.moveTo(xOffset + radius, yOffset)
                // context.arc(xOffset, yOffset, radius, 0, 2 * Math.PI, false)
                
                var verticesCount = Math.floor(Math.random() * 7) + 3
                vertices.length = 0 // clear
                
                for (var i = 0 ; i < verticesCount ; i += 1) {
                    var angle = Math.random() * 2 * Math.PI
                    var y = Math.sin(angle) * radius
                    var x = Math.cos(angle) * radius
                    
                    vertices.push([xOffset + x, yOffset + y, angle])
                    
                }
                
                vertices.sort(function (a, b) { return a[2] < b[2] ? -1 : 1 })
                
                context.moveTo(vertices[0][0], vertices[0][1])
                vertices.forEach(function (vertex) {
                    context.lineTo(vertex[0], vertex[1])
                })
                context.lineTo(vertices[0][0], vertices[0][1])
                
                xOffset += step
            }

            xOffset = step
            yOffset += step
        }
        
        context.strokeStyle = "#111"
        context.stroke()

        return canvas;
    }

    target.prepend(mkCanvas());
    target.append(mkCanvas());

</script>
