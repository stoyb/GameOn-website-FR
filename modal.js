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
function validate() {
  let formFirst = document.forms["reserve"]["first"].value;
  let formLast = document.forms["reserve"]["last"].value;
  let formDate = document.forms["reserve"]["birthdate"].value; 
  let checkbox = document.getElementById('checkbox1');
  
  if (formFirst.length < 2 ) {
    alert('Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
    return false;
  }
  else if (formLast.length < 2 ) {
    alert('Veuillez entrer 2 caractères ou plus pour le champ du nom.');
    return false;
  }
  else if (formDate == "" ) {
    alert("Vous devez entrer votre date de naissance.")
    return false;
  }
  else if (!checkbox.checked) {
    alert('Vous devez vérifier que vous acceptez les termes et conditions.');
    return false;
  } 
  else {
  return modalValidate();
  }
}

// Prevent the submit function for the button linked to the formular
function preventSubmit(e) {
  e.preventDefault();
  btnSubmit.addEventListener('click', modalValidate);
}

// Close the validate modal and refresh the page 
function closeModalValidate() {
  modalbgValidate.style.display = "none";
  window.location.reload();
}

                  /* Call functions Validate */

// Prevent formular's submit
form.addEventListener('submit', preventSubmit); 

// Close the validate modal with the button x
closeModalBtnValidate.addEventListener('click', closeModalValidate);

// Close the validate modal with the shadow
modalbgValidate.addEventListener('click', closeModalValidate);
closeModalContentValidate.addEventListener('click', (e) =>
  e.stopPropagation());

// Close the validate modal with the button "Close"
closeBtnValidate.addEventListener('click', closeModalValidate);
















