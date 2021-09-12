+++
+++

<script>
    var canvas = document.createElement("canvas")
    var target = document.querySelector("main")

    canvas.width = target.offsetWidth
    canvas.height = target.offsetWidth // make a square

    target.appendChild(canvas)

    // Draw stuff
    var context = canvas.getContext("2d")
    context.beginPath()

    var radius = Math.max(canvas.width / 40, 10)
    var step = 2.4 * radius // distance between centers of two adjacent circles
    var xOffset = step
    var yOffset = step
    var vertices = []
    
    while (yOffset < canvas.height - step) {
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
</script>
