
export default fadeNavbar;
//NAVBAR
//Opacity of navbar when scrolling
function fadeNavbar(){
window.addEventListener('scroll', function () {
  if (this.window.scrollY > 150) {
    this.document.getElementById('navbar').style.opacity = '0.8';
  } else {
    this.document.getElementById('navbar').style.opacity = '1';
  }
});
}