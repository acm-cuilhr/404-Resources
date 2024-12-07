// script.js
const apiBaseURL = 'http://localhost:3000/api/products';

// Function to fetch and display all products
async function fetchProducts() {
  try {
    const response = await fetch(apiBaseURL);
    const products = await response.json();

    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach((product) => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      productDiv.innerHTML = `
        ${product.name} - $${product.price}
        <div>
          <button onclick="deleteProduct(${product.id})">Delete</button>
          <button onclick="loadProduct(${product.id}, '${product.name}', ${product.price})">Edit</button>
        </div>
      `;
      productList.appendChild(productDiv);
    });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Function to add or update a product
async function addOrUpdateProduct() {
  const id = document.getElementById('productId').value;
  const name = document.getElementById('productName').value;
  const price = document.getElementById('productPrice').value;

  const productData = { name, price: parseFloat(price) };

  try {
    if (id) {
      // Update product if ID is provided
      await fetch(`${apiBaseURL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
    } else {
      // Add new product
      await fetch(apiBaseURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData),
      });
    }
    fetchProducts();
    clearForm();
  } catch (error) {
    console.error('Error adding/updating product:', error);
  }
}

// Function to delete a product by ID
async function deleteProduct(id) {
  try {
    await fetch(`${apiBaseURL}/${id}`, { method: 'DELETE' });
    fetchProducts();
  } catch (error) {
    console.error('Error deleting product:', error);
  }
}

// Function to load product data into the form for editing
function loadProduct(id, name, price) {
  document.getElementById('productId').value = id;
  document.getElementById('productName').value = name;
  document.getElementById('productPrice').value = price;
}

// Function to clear the form
function clearForm() {
  document.getElementById('productId').value = '';
  document.getElementById('productName').value = '';
  document.getElementById('productPrice').value = '';
}
