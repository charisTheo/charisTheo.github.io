(function(){
    'use strict';

    angular
        .module('Portfolio')
        .factory('ShareListener', function() {
            const copyToClipboard = function(str) {
                const el = document.createElement('textarea');
                el.value = str;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
            };

            function listener(event) {
                event.preventDefault();
                let _this = this;
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
            }

            return {
                listener: listener,
                copyToClipboard: copyToClipboard
            }
        });

    

}());