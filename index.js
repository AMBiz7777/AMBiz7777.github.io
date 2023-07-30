function filterProducts() {
  const searchInput = document.querySelector('.search-box input');
  const filterValue = searchInput.value.toLowerCase();
  const products = document.querySelectorAll('.product');
  let matchFound = false;

  products.forEach((product) => {
    const productName = product.querySelector('.product-name p').textContent.toLowerCase();
    if (productName.includes(filterValue)) {
      product.style.display = 'block';
      matchFound = true;
    } else {
      product.style.display = 'none';
    }
  });

  const NothingFound = document.getElementById('NothingFound');
  if (matchFound) {
    NothingFound.style.display = 'none';
  } else {
    NothingFound.style.display = 'block';
  }
}

// ... (your existing JavaScript content) ...

// Show the popup when the user visits the website
window.addEventListener('load', () => {
  const popupOverlay = document.getElementById('popupOverlay');
  popupOverlay.style.display = 'block';
});

// Close the popup when the X button is clicked
const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', () => {
  const popupOverlay = document.getElementById('popupOverlay');
  popupOverlay.style.display = 'none';
});
