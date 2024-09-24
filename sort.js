function sortProducts() 
{
    const sortValue = document.getElementById('sort').value;
    const productsContainer = document.getElementById('Products');
    const productCards = Array.from(productsContainer.getElementsByClassName('card'));

    productCards.sort((a, b) => {
        let aValue, bValue;

        if (sortValue.includes('price')) {
            // Get price from data attribute and convert to number
            aValue = parseFloat(a.getAttribute('data-price'));
            bValue = parseFloat(b.getAttribute('data-price'));
        } else {
            // Get name from data attribute
            aValue = a.getAttribute('data-name').toLowerCase();
            bValue = b.getAttribute('data-name').toLowerCase();
        }

        if (sortValue.includes('asc')) {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });

    // Clear and re-append sorted product cards
    productsContainer.innerHTML = '';
    productCards.forEach(card => productsContainer.appendChild(card));
}
