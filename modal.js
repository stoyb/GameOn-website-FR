              /* DOM Elements */
              
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeModalBtn = document.querySelectorAll(".close");
const contentModal = document.querySelector(".content"); 
const btnSubmit = document.querySelector(".btn-submit");
const form = document.querySelector(".myForm");
              
                              /* Functions */ 
              
// Hamburger navbar mobile device            
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
  x.className += " responsive";
  } else {
  x.className = "topnav";
  }
}
              
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
              
// Close modal 
function closeModal() {
  modalbg.style.display = "none";
}
              
                            /* Call functions */
              
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
              
// Close modal with the button x
closeModalBtn.forEach((closebtn) => closebtn.addEventListener("click", closeModal));
              
// Close modal with the shadow without propagrate the click event to the modal content
modalbg.addEventListener('click', closeModal);
contentModal.addEventListener('click', (e) => {
  e.stopPropagation();
});
              
              
                                      /* Validation  data */
              
              
              
                                /* DOM Elements Validation data */
const modalbgValidate = document.querySelector(".bground-validate");
const closeModalContentValidate = document.querySelector('.content-validate');
const closeModalBtnValidate = document.querySelector('.close-validate');
const closeBtnValidate = document.querySelector(".close-btn-validate");
              
              
                                /* Functions Validation data */ 
              
// The validate modal appears and the fomular modal disappears                  
function modalValidate() {
  modalbgValidate.style.display = "block";
  modalbg.style.display = "none";
}
              
// Validate the submit and sends error messages 
function validate(e) {
  e.preventDefault();
  let formFirst = document.forms["reserve"]["first"].value;
  let formLast = document.forms["reserve"]["last"].value;
  let formEmail = document.forms["reserve"]["email"].value;
  let checkEmail =  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/
  let formDate = document.forms["reserve"]["birthdate"].value; 
  let formQuantity = document.forms["reserve"]["quantity"].value; 
  let checkRadio = document.forms["reserve"]["location"]; 
  let checkbox = document.getElementById('checkbox1');
  let errorFirst = document.getElementById('error-1');
  let errorLast = document.getElementById('error-2');
  let errorEmail = document.getElementById('error-3');
  let errorDate = document.getElementById('error-4');
  let errorQuantity = document.getElementById('error-5');
  let errorRadio = document.getElementById('error-6');
  let errorBox = document.getElementById('error-7');
  let error = false; 
                
  if (formFirst.length < 2 ) {
    error = true;
    errorFirst.style.display = "block";
    } else {
    errorFirst.style.display = "none";
  }
  if (formLast.length < 2 ) {
    error = true;
    errorLast.style.display = "block";
    } else {
    errorLast.style.display = "none";
  }
  if (checkEmail.exec(formEmail) == null) {
    error = true;
    errorEmail.style.display = "block";
    } else {
    errorEmail.style.display = "none";
  }
  if (formDate == "" ) {
    error = true;
    errorDate.style.display = "block";
    } else {
    errorDate.style.display = "none";
  }
  if (formQuantity == "" ) {
    error = true;
    errorQuantity.style.display = "block";
    } else {
    errorQuantity.style.display = "none";
  }     
  if (!checkRadio[0].checked && !checkRadio[1].checked && !checkRadio[2].checked &&!checkRadio[3].checked && !checkRadio[4].checked && !checkRadio[5].checked) {
    error = true;
    errorRadio.style.display = "block";
    } else {
    errorRadio.style.display = "none";
  }
  if (!checkbox.checked) {
    error = true;
    errorBox.style.display = "block";
    } else {
    errorBox.style.display = "none";
  }
  if (!error)  {
    modalValidate();
  }
}
              


// Close the validate modal and refresh the page 
function closeModalValidate() {
  modalbgValidate.style.display = "none";
  window.location.reload();
}

/* Call functions Validate */

// Close the validate modal with the button x
closeModalBtnValidate.addEventListener('click', closeModalValidate);

// Close the validate modal with the shadow
modalbgValidate.addEventListener('click', closeModalValidate);
closeModalContentValidate.addEventListener('click', (e) =>
e.stopPropagation());

// Close the validate modal with the button "Close"
closeBtnValidate.addEventListener('click', closeModalValidate);

// Call function validate for form
form.addEventListener('submit', validate);
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              