function openMenu() {
    var y = document.getElementById("sideMenu");

    if (y.style.display === "none")
    {
      y.style.display = "block";
    } 
    
    else {
      y.style.display = "none";
    }
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeMenu() {
    document.getElementById("SideBar").style.width = "0";
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
