//Form Validation Module
const d = document;

export default function contactFormValidation() {
  const formData = d.querySelector('form.contact-form');

  //Get all the required elements of form
  const requiredInputs = d.querySelectorAll('form.contact-form [required]');
  //for each required input insert a span element
  requiredInputs.forEach((x) => {
    const warnMsg = d.createElement('span');
    warnMsg.classList.add(x.name + '-err', 'contact-form-error', 'none');
    warnMsg.textContent = x.title;
    x.insertAdjacentElement('afterend', warnMsg);
  });
}

//Get the values entered
d.addEventListener('keyup', (e) => {
  //when entered value is required
  if (e.target.matches('.contact-form [required]')) {
    let inputElem = e.target,
      pattern = e.target.pattern || inputElem.dataset.pattern;

  //Validate when pattern exists
    if (pattern && inputElem.value!=="") {
      let regExp = new RegExp(pattern);

      const errIsActive = !regExp.exec(inputElem.value);

      const classElemToChange = inputElem.name + '-err';
      //change the class is-active
      return errIsActive
      ? d.querySelector(`.${classElemToChange}`).classList.add('is-active')
     : d.querySelector(`.${classElemToChange}`).classList.remove('is-active')
   
    }
    //if no pattern exist but field is required
    if (!pattern) {
      console.log('no hay patron');
      return inputElem.value===''
      ? d.querySelector(`.${classElemToChange}`).classList.add('is-active')
     : d.querySelector(`.${classElemToChange}`).classList.remove('is-active')
    }
  }
});

