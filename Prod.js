const filterButtons = document.querySelectorAll("#filter-buttons button");
const filterableCards = document.querySelectorAll("#filterable-cards .card");
// Function to filter cards based on filter buttons
const filterCards = (e) => {
    document.querySelector("#filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");
    filterableCards.forEach(card => {
        // show the card if it matches the clicked filter or show all cards if "all" filter is clicked
        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}
filterButtons.forEach(button => button.addEventListener("click", filterCards));


// Cart Fonction Java Scripts 

document.getElementById('icon-cart').addEventListener('click', function() {
    document.getElementById('cart').classList.add('active');
});

// Function to close the cart
document.getElementById('close-cart').addEventListener('click', function() {
    document.getElementById('cart').classList.remove('active');
});