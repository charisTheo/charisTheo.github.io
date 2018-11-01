(function(){
    'use strict';

    angular
        .module('Portfolio')
        .factory('PerspectiveHoverEffect', function() {
            let container = document.getElementById('projects');
            
            // Mouse
            let mouse = {
                _x: 0,
                _y: 0,
                x: 0,
                y: 0,
                updatePosition: function(event) {
                    let e = event || window.event;
                    this.x = e.clientX - this._x;
                    this.y = (e.clientY - this._y) * -1;
                },
                setOrigin: function(el) {
                    this._x = el.offsetLeft + Math.floor(el.offsetWidth / 2);
                    this._y = el.offsetTop + Math.floor(el.offsetHeight / 2);
                },
                show: function() {
                    return "(" + this.x + ", " + this.y + ")";
                }
            };
            
            // Track the mouse position relative to the center of the container.
            mouse.setOrigin(container);
            
            //-----------------------------------------
            
            let counter = 0;
            let updateRate = 10;
            let isTimeToUpdate = function() {
                return counter++ % updateRate === 0;
            };
            
            //-----------------------------------------   
            let update = function(event, inner) {
                mouse.updatePosition(event);
                let x = (mouse.y / inner.offsetHeight / 2).toFixed(2),
                    y = (mouse.x / inner.offsetWidth / 2).toFixed(2);
                let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
                // TODO: attach styles to elements
                inner.style.transform = style;
                inner.style.webkitTransform = style;
                inner.style.mozTransform = style;
                inner.style.msTransform = style;
                inner.style.oTransform = style;
            };
        
            function MouseLeaveHandler(event) {
                event.target.closest('md-card').style = "";
            }
            function MouseMoveHandler(event) {
                if (isTimeToUpdate()) {
                    update(event, event.target.closest('md-card'));
                }
            }
            function MouseEnterHandler(event) {
                update(event, event.target.closest('md-card'));
            }

            return {
                getHandlers: function(){
                    return {
                        MouseEnterHandler,
                        MouseLeaveHandler,
                        MouseMoveHandler
                    };
                }
            };
        });

}());