//responsive navbar starts here
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}
//responsive navbar ends here


//parallax effect starts here
window.addEventListener('scroll', function() {
    let scrolled = window.scrollY;
    let parallax = document.querySelector('#hero-container');
    parallax.style.backgroundPositionY = -(scrolled * 1.8) + 'px'; 
  });
//parallax effect ends here