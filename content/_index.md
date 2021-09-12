+++
title = "Tom Houle's homepage"
+++

<script>
    var target = document.querySelector(".main-and-footer")
    var canvas = document.createElement("canvas")
    canvas.width = target.offsetWidth
    canvas.height = window.innerHeight * 0.99
    // target.replaceChildren(canvas)
    target.appendChild(canvas)
    var context = canvas.getContext("2d")

    // Fill background
    context.fillStyle = "antiquewhite"
    context.fillRect(0, 0, canvas.width, canvas.height)
    
    // Draw stuff
    context.fillStyle = "tomato"
    context.strokeStyle = "tomato"
    var middleWidth = canvas.width / 2
    var middleHeight = canvas.height / 2
    var radius = Math.min(canvas.width / 2, canvas.height / 2)

    
    context.beginPath()
    var radius = canvas.width / 40
    var wavelength = 2 * radius
    
    // Loop variables
    var xOffset = 3 * radius
    var yOffset = xOffset
    
    while (yOffset < canvas.height - (3 * radius)) {
        while (xOffset < canvas.width - wavelength) {
            context.moveTo(xOffset + radius, yOffset)
            context.arc(xOffset, yOffset, radius, 0, 2 * Math.PI, false)
            
            var firstAngle = Math.random() * 2 * Math.PI
            // sin(firstAngle) = y / radius
            // y = sin(firstAngle) * radius
            var y = Math.sin(firstAngle) * radius
            // cos(firstAngle) = x / radius
            // x = cos(firstAngle) * radius
            var x = Math.cos(firstAngle) * radius

            context.moveTo(xOffset + x, yOffset + y)
            
            context.arc(xOffset + x, yOffset +y, radius / 4, 0, 2*Math.PI, false)
            
            xOffset += 2.4 * radius
        }

        xOffset = 1.5 * wavelength
        yOffset += 2.4 * radius

    }
    
    context.stroke()

    // Draw a circle
    // context.arc(middleWidth, middleHeight, 0.9 * radius, 0, 2 * Math.PI, false)
    // context.fill

</script>


> _Quiche (/ˈkiːʃ/ KEESH) is a French tart consisting of pastry crust filled
with savoury custard and pieces of cheese, meat, seafood or vegetables. The
best-known variant is quiche Lorraine, which includes lardons or bacon. Quiche
can be served hot or cold. It is popular
worldwide._[¹](https://en.wikipedia.org/wiki/Quiche)

Now you know. You were probably looking for the [blog](/post).
