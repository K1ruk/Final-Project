var myElement = document.getElementById('nav-menu-mobile');
var addButton = document.getElementById('menu');

// Add an event listener to the menu button
addButton.addEventListener('click', function() {

  // Add both nav-menu-mobile and nav-menu-mobile-active to the existing classes when the button is clicked
  myElement.classList.add('nav-menu-mobile-active');
});


function closeMenu() {
  myElement.classList.remove('nav-menu-mobile-active');
}


function openSearch()
{
  var x = document.getElementById("searchInput");

  if (x.style.display === "none")
  {
    x.style.display = "inline";
    x.style.transition = "0.4s ease-in-out";
  } 
  
  else {
    x.style.display = "none";
  }
}
function calculateSubtotal() {
  let storedData = JSON.parse(localStorage.getItem('data')) || [];
  let subtotal = 0;

  storedData.forEach(item => {
    subtotal += item.total || 0;
  });

  return subtotal;
}

function updateCart() {
  // Calculate and display subtotal
  const subtotal = calculateSubtotal();
  console.log("Subtotal: ", subtotal);


  //const subtotalElement = document.getElementById('subtotal');
  //subtotalElement.innerText = `Subtotal: ${subtotal}`;
}
function updateCartIndicator() {
  let storedData = JSON.parse(localStorage.getItem('data')) || [];
  const cartIndicator = document.getElementById('cart-indicator');

  // Calculate the total number of items in the cart
  const totalItems = storedData.reduce((total, item) => total + item.amount, 0);

  // Update the cart indicator
  cartIndicator.innerText = totalItems.toString();
}

function add(event) {
  var button = event.target;
  var shopItem = button.parentElement;
  const title = shopItem.querySelector(".card-title h1").innerText;
  const price = parseFloat(shopItem.querySelector(".price").innerText.replace(':-', '')); // Parse price as float
  const amount =+ shopItem.querySelector(".count").value; // Convert to number

  const data = {
    title: title,
    price: price,
    amount: amount,
    total: price * amount // Calculate total for the current item
  };

  let storedData = JSON.parse(localStorage.getItem('data')) || [];

  const existingItemIndex = storedData.findIndex(item => item.title === title);

  if (existingItemIndex !== -1) {
    storedData[existingItemIndex].amount += amount;
    storedData[existingItemIndex].total = storedData[existingItemIndex].price * storedData[existingItemIndex].amount;
  } else {
    storedData.push(data);
  }

  localStorage.setItem('data', JSON.stringify(storedData));

  console.log("Stored data: ", storedData);

  updateCartIndicator(); // Update the cart indicator after adding an item
  updateCart(); // Update the cart after adding an item
}

document.addEventListener('DOMContentLoaded', function () {
  
  // Retrieve data from localStorage and making it into an array.
  const storedData = JSON.parse(localStorage.getItem('data')) || [];

  // Get the container where you want to display the data
  const cartContent = document.getElementById('cart-content');

  // Check if there is data to display
  if (storedData.length > 0) {
    // Iterate through the stored data and create HTML elements
    storedData.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add("grid");
      itemElement.setAttribute("id","product");
      itemElement.innerHTML = `
        <h1>${item.title}</h1>
        <p class="price">${item.price} kr</p>
        <p class="quantity">${item.amount}</p>
        <p class="total">${item.total} kr</p>
      `;
      cartContent.appendChild(itemElement);
    });
  } else {
    // Display a message if there is no data
    cartContent.innerHTML = '<h1>Your cart is empty.</h1>';
  }
});

function empty(){
  localStorage.clear();
  location.reload();
}