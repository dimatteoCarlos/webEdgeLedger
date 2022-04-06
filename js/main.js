//GeoLocation
var loc;
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition);

} else { 
  const error=document.getElementById("mapMsg").innerHTML =
  "Geolocation is not supported by this browser.";
  error.style.display='block';
  loc = { lat: 40.361145, lng: -71.057083 };//PRUEBA
}

function showPosition(position) {
  loc = { lat: position.coords.latitude, lng: position.coords.longitude };
  };

// Initialize and add the map
function initMap() {
  // loc for a fixed location
  // loc = { lat: 40.361145, lng: -71.057083 };

  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}
//end of Geolocation


//change opacity of sticky menu when scrolling
// window.addEventListener('scroll',function() {
//   if (window.scrollY > 150){
//     document.querySelector('#navbar').style.opacity=0.8;
//   }else{
//     document.querySelector('#navbar').style.opacity=1;
//   }
// });

window.addEventListener('scroll',function(){
  if(this.window.scrollY>150){
    this.document.getElementById('navbar').style.opacity='0.9';
  }else{
    this.document.getElementById('navbar').style.opacity='1';
  }
})
//end

//validation form oN CONSTRUCTION
// const d=document;

// d.getElementById('name').addEventListener('blur',validateName);
// d.getElementById('email').addEventListener('blur',validateEmail);
// d.getElementById('phone').addEventListener('blur',validatePhone);

// function validateName(e){
//   console.log(e.target.value);
//   const x=d.getElementById('name');
//   const re=/^[A-Za-z]{2,10}$/;
//   console.log((!re.test(x.value));
//   if(!re.test(x.value)){
//     d.querySelector('.error-name').classList.add('invalid');
//   }else{
//     d.querySelector('.error-name').classList.remove('invalid');
//   }
// }
// function validateEmail(){
//   const x=d.getElementById('email');
//   const re=/^([a-zA-z0-9_\-\.]+)@([a-zA-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  
//   const remail=/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm; 
  
//   if(!re.test(x.value)){
//     x.classList.add('is-invalid');
//   }else{
//     x.classList.remove('is-invalid');
//   }
// }

// function validatePhone(){
//   const x=d.getElementById('phone');
//   const re=/^\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}$/;
//   if(!re.test(x.value)){
//     x.classList.add('is-invalid');
//   }else{
//     x.classList.remove('is-invalid');
//   }
// }

// d.getElementById('zipcode').addEventListener('blur',validateZip);
// function validateZip(){
//   const x=d.getElementById('zipcode');
//   const re=/^[0-9]{5}(-[0-9]{4})?$/;
//   if(!re.test(x.value)){
//     x.classList.add('is-invalid');
//   }else{
//     x.classList.remove('is-invalid');
//   }
// }

