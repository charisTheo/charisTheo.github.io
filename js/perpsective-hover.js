(function() {
    // Init
    let container = document.getElementById('perspective-parent');
    let inners = document.getElementsByClassName('perspective-item');
  
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
      setOrigin: function(e) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
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
        mouse.updatePosition(event, inner);
        let x = (mouse.y / inner.offsetHeight / 2).toFixed(2),
            y = (mouse.x / inner.offsetWidth / 2).toFixed(2);
        let style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTransform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
    };

    function MouseLeaveHandler() {
        this.style = "";
    }
    function MouseMoveHandler() {
        if (isTimeToUpdate()) {
            update(event, this);
        }
    }
    function MouseEnterHandler() {
        update(event, this);
    }

    const cardToggles = document.getElementsByClassName('card-toggle');

    for (let cardToggle of cardToggles) {
        cardToggle.addEventListener("click", function(event) {
            event.preventDefault();
            let inner = this.parentElement;
            inner.classList.toggle('toggle');
            // if is open
            if (inner.classList.contains('toggle')) {
                // remove perspective style to align card correctly
                container.style.perspective = 'none';
                // remove event listeners
                this.style = "";
                this.removeEventListener('mouseenter', MouseEnterHandler);
                this.removeEventListener('mousemove', MouseMoveHandler);
            } else {
                container.style.perspective = '25px';
                inner.addEventListener('mouseleave', MouseLeaveHandler);
                inner.addEventListener('mousemove', MouseMoveHandler);
                inner.addEventListener('mouseenter', MouseEnterHandler);
            }
        });
    }

    for (let inner of inners) {
        inner.addEventListener('mouseleave', MouseLeaveHandler);
        inner.addEventListener('mousemove', MouseMoveHandler);
        inner.addEventListener('mouseenter', MouseEnterHandler);
    }    
})();