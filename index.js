const cardToggles = document.getElementsByClassName('card-toggle');

for (let cardToggle of cardToggles) {
    cardToggle.addEventListener("click", function(event) {
        event.preventDefault();
        this.parentElement.classList.toggle('toggle');
    });
}