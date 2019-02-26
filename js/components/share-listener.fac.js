(function(){
    'use strict';

    angular
        .module('Portfolio')
        .factory('ShareListener', ["$mdToast", function($mdToast) {
            const copyToClipboard = function(str) {
                const el = document.createElement('textarea');
                el.value = str;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
                // show Toast message
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Link copied to clipboard!')
                    .hideDelay(2000)      
                );
            };

            function listener($event) {
                $event.preventDefault();
                //cancel bubble
                let _this = $event.currentTarget;
                if (navigator.share) {
                    navigator.share({
                        title: 'CharisTheo',
                        text: _this.children[0].textContent,
                        url: _this.href,
                    })
                    .then(() => console.log('Successful share'))
                    .catch((error) => console.log('Error sharing', error));
                } else {
                    // No share API found!
                    // copy link to clipboard
                    copyToClipboard(_this.href);
                }
                $event.cancelBubble = true; // prevent the card from toggling
            }

            return {
                listener: listener,
                copyToClipboard: copyToClipboard
            }
        }]);
}());