var myElement = document.getElementById('nav-menu-mobile');
var addButton = document.getElementById('menu');
// localStorage method was inspired by https://www.javascript-coder.com/javascript-form/store-multiple-form-data-in-localstorage-using-javascript/#:~:text=JavaScript%20code%20for%20storing%20form%20data&text=When%20the%20form%20is%20submitted,stores%20it%20back%20in%20LocalStorage.

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

function calculatetotal()
{
  let storedData = JSON.parse(localStorage.getItem('data')) || [];
  let total = 0;

  storedData.forEach(item => { total += item.subtotal || 0;}); //0 

  return total;
}

function updateCart() 
{
  // Calculate and display subtotal
  const total = calculatetotal();
  console.log("Total: ", total);


  //const subtotalElement = document.getElementById('subtotal');
  //subtotalElement.innerText = `Subtotal: ${subtotal}`;
}

function updateCartIndicator() 
{
  let storedData = JSON.parse(localStorage.getItem('data')) || [];
  const cartIndicator = document.getElementById('cart-indicator');

  // Calculate the total number of items in the cart
  const totalItems = storedData.reduce((subtotal, item) => subtotal + item.amount, 0);
  // Update the cart indicator
  cartIndicator.innerText = totalItems.toString();
}

function add(event) {
  var button = event.target;
  var shopItem = button.parentElement;
  const title = shopItem.querySelector(".card-title h1").innerText;
  const price = parseFloat(shopItem.querySelector(".price").innerText.replace(':-', '')); // Parse price as float
  const amount =+ shopItem.querySelector(".count").value; // Convert to number

  const data = 
  {
    title: title,
    price: price,
    amount: amount,
    subtotal: price * amount // Calculate subtotal for the current item
  };

  let storedData = JSON.parse(localStorage.getItem('data')) || [];


  // findIndex method is used here to get an index of an item in the array and checks if obtained "title" variable is in the existing array (item => item.title).
  //It should return -1 if the title is not in the array or it should return (n)th number of index if the obtained "title" is in the array. 
  const ItemIndex = storedData.findIndex(item => item.title === title); //title is used here for searching an item in the array based on the title.

  // If itemIndex is not equal -1, meaning the item is already in the array, it should change the amount and total price of the item.
  if(ItemIndex !== -1)
  {
    storedData[ItemIndex].amount += amount;
    storedData[ItemIndex].subtotal = storedData[ItemIndex].price * storedData[ItemIndex].amount;
  } 
  //or else, meaning the item is not in the array, the non-existing item will push its data into the array
  else
  {
    storedData.push(data);
  }

  localStorage.setItem('data', JSON.stringify(storedData));
  console.log("Stored data: ", storedData);

  updateCartIndicator(); // Update the cart indicator after adding an item
  updateCart(); // Update the cart after adding an item
}

document.addEventListener('DOMContentLoaded', function () {
  
  updateCartIndicator();
  // Retrieve data from localStorage and making it into an array.
  const storedData = JSON.parse(localStorage.getItem('data')) || [];

  // Get the container where you want to display the data
  const cartContent = document.getElementById('cart-content');

  // Check if there is data to display
  if (storedData.length > 0) 
  {
    // Iterate through the stored data and create HTML elements
    storedData.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.classList.add("grid");
      itemElement.setAttribute("id","product");
      itemElement.innerHTML = `
        <h1 class="head">${item.title}</h1>
        <p class="price">${item.price} kr</p>
        <p class="quantity">${item.amount}</p>
        <p class="subtotal">${item.subtotal} kr</p>
      `;
      cartContent.appendChild(itemElement);
    });
  } 

  else 
  {
    // Display a message if there is no data'
    cartContent.innerHTML = '<h1>Your cart is empty</h1>';
  }
  
});

function empty(){
  localStorage.clear();
  location.reload();
}

function checkout(){
  const storedData = JSON.parse(localStorage.getItem('data')) || [];
  const danger = document.getElementById('danger');

  if(storedData.length > 0)
  {
    window.location.href = "/Checkout page/checkout.html";
  }
  else{
    danger.style.display = "block";
  }
  
}

function changeLocation(){
  window.location.href = "/Product/margherita/margherita.html";
}