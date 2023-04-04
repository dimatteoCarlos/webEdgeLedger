import fadeNavbar from './fade-navbar.js';
import contactFormValidation from './form-validation.js';

//----------------//
const d = document;
d.addEventListener('DOMContentLoaded', (e) => {
  fadeNavbar();
  contactFormValidation();
});
