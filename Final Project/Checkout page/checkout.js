
function calculateSubtotal()
{
  let storedData = JSON.parse(localStorage.getItem('data')) || [];
  let total = 0;

  storedData.forEach(item => { total += item.subtotal || 0;}); //0 

  return total;
}

function updateCart() 
{
  // Calculate and display subtotal
  const total = calculateSubtotal();
  console.log("Total: ", total);


  // const totalElement = document.getElementById('total');
  //totalElement.innerHTML = `Total: ${total}`;
}


document.addEventListener('DOMContentLoaded', function () {
  
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
      const TotalElement = document.createElement("div");
      itemElement.classList.add("grid");
      itemElement.setAttribute("id","product");
      itemElement.innerHTML = `
        <h1 class="headTitle">${item.title}</h1>
        <p class="price">${item.price} kr</p>
        <p class="quantity">${item.amount}</p>
        <p class="subtotal">${item.subtotal} kr</p>
      `;
      TotalElement.innerHTML= `<p class="total" id="total">${item.total} kr</p>`;
      cartContent.appendChild(itemElement);

    });
  } 

  else 
  {
    // Display a message if there is no data'
    cartContent.innerHTML = '<h1>Your cart is empty</h1>';
  }

    updateCart();

});

function Payment(){
    window.location.href = "/Payment/payment.html";
}