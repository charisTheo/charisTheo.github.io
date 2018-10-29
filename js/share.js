let shareButtons = document.getElementsByClassName("share-button");

for (let shareButton of shareButtons) {
    shareButton.addEventListener("click", function(event) {
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
    });
}

const copyToClipboard = function(str) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};