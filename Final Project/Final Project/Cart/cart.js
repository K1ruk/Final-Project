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



var mytitle = localStorage.getItem("title");

document.getElementById("newTitle").textContent = mytitle; 

console.log(mytitle);