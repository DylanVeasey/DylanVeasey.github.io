window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("NavBarScroll").className = "navbar-nav horizontal-center NavSmall";
  } else {
    document.getElementById("NavBarScroll").className = "navbar-nav horizontal-center NavLarge";
  }
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "110px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementById("main").style.display = "none";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.getElementById("main").style.display = "block";
   
}




