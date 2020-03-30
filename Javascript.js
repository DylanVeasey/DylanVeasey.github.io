window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("NavBarScroll").className = "navbar-nav horizontal-center NavSmall";
  } else {
    document.getElementById("NavBarScroll").className = "navbar-nav horizontal-center NavLarge";
  }
}




