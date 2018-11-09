(function(){
    'use strict';

    // TODO:
    angular
        .module('Portfolio')
        .factory('setLabelsPosition', function() {
            function setLabelsPosition() {
                let icons = document.getElementsByClassName('icon-label');
                let angularIcons = angular.element(icons);
                console.log(angularIcons);
                for (let i = 0; i < icons.length; i++) {
                    let dimensions = icons[i].getBoundingClientRect();
                    console.log(window.innerWidth);
                    console.log(dimensions);
                    if (window.innerWidth - dimensions.right < dimensions.width) {
                        icons[i].style.right = '20px';
                    } else {
                        icons[i].style.left = '20px';
                    }
                    console.log(icons[i].style);
                }

            }
            return {
                setPosition: function() {return setLabelsPosition}
            }
        });

}());