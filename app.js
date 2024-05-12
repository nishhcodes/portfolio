//parallax effect starts here
window.addEventListener('scroll', function() {
  let scrolled = window.scrollY;
  let parallax = document.querySelector('#hero-container');
  parallax.style.backgroundPositionY = -(scrolled * 1.3) + 'px'; 
})
//parallax effect ends here
window.addEventListener('scroll',reveal);
function reveal() {
    let reveals = document.querySelectorAll('.reveal');
    for(let i=0; i<reveals.length; i++) {
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}





// (() => {
//   const openNav = document.querySelector(".open-menu");
//   const closeNav = document.querySelector(".close-menu");
//   const navMenu = document.querySelector(".nav-links-container");
//   const mediaSize = 992;
//   let dropdownMenuBranch = null;

//   openNav.addEventListener("click", toggleMenu)
//   closeNav.addEventListener("click", toggleMenu)

//   function toggleMenu() {
//     navMenu.classList.toggle("open");
//   }

//   navMenu.addEventListener("click",(event) => {

//     if (event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
//       event.preventDefault();
//       dropdownMenuBranch = event.target.parentElement;
//     }
//     if(dropdownMenuBranch.classList.contains("active")) {
//       collapseDroppedMenu();
//     }
//     else {
//       if (navMenu.querySelector(".dropdown-menu-branch.active")) {
//         collapseDroppedMenu();
//       }
//     }
//     dropdownMenuBranch.classList.add("active");
//     const dropdownMenu = dropdownMenuBranch.querySelector(".dropdown-menu");
//     dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
//   });

//   function collapseDroppedMenu() {
//     navMenu.querySelector(".dropdown-menu-branch.active .dropdown-menu").removeAttribute("style");
//     navMenu.querySelector(".dropdown-menu-branch.active").classList.remove("active");

//   }
// })();

// (() => {
//   const openNav = document.querySelector(".open-menu");
//   const closeNav = document.querySelector(".close-menu");
//   const navMenu = document.querySelector(".nav-links-container");
//   const mediaSize = 992;
//   let dropdownMenuBranch; // Declare dropdownMenuBranch here

//   openNav.addEventListener("click", toggleMenu);
//   closeNav.addEventListener("click", toggleMenu);

//   function toggleMenu() {
//     navMenu.classList.toggle("open");
//   }

//   navMenu.addEventListener("click", (event) => {
//     if (event.target.hasAttribute("data-toggle") && window.innerWidth <= mediaSize) {
//       event.preventDefault();
//       dropdownMenuBranch = event.target.parentElement; // Assign value to dropdownMenuBranch
//     }

//     if (dropdownMenuBranch && dropdownMenuBranch.classList.contains("active")) {
//       collapseDroppedMenu();
//     } else {
//       if (navMenu.querySelector(".dropdown-menu-branch.active")) {
//         collapseDroppedMenu();
//       }
//     }

//     if (dropdownMenuBranch) { // Check if dropdownMenuBranch is defined before accessing it
//       dropdownMenuBranch.classList.add("active");
//       const dropdownMenu = dropdownMenuBranch.querySelector(".dropdown-menu");
//       dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
//     }
//   });

//   function collapseDroppedMenu() {
//     navMenu.querySelector(".dropdown-menu-branch.active .dropdown-menu").removeAttribute("style");
//     navMenu.querySelector(".dropdown-menu-branch.active").classList.remove("active");
//   }
// })();

// function closeSidebar() {
//   const sidebar = document.querySelector('.nav-links-conatiner');
//   sidebar.style.display = 'none';
// }



