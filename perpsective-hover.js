const perspectiveItems = document.getElementsByClassName('perspective-item');

for (let perspectiveItem in perspectiveItems) {
    perspectiveItem.on("mousemove", function(event) {
        let a = t.outerWidth()
        , n = t.outerHeight()
        , r = t.offset().left - e.window.scrollLeft()
        , i = t.offset().top - e.window.scrollTop()
        , s = (event.clientX - r) / a
        , l = (event.clientY - i) / n
        , c = 2 * (l - .5)
        , f = (5 - 10 * s).toFixed(2)
        , d = ((10 * l - 5).toFixed(2),
        20 * c);
        TweenLite.to(this, .3, {    // replaced t with this
            scale: 1.07,
            rotationY: f,
            y: d
        })
    }),
    perspectiveItem.on("mouseleave", function(event) {
        TweenLite.to(this, .4, {
            scale: 1,
            rotationX: 0,
            rotationY: 0,
            y: 0
        })
    })
}