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
 
function testInput(condition, errorMessage, error) {
  if (condition) {
    error = true; 
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
  }
  return error
} 
// Validate the submit and sends error messages 
function validate(e) {
  e.preventDefault();
  let formFirst = document.forms["reserve"]["first"].value;
  let formLast = document.forms["reserve"]["last"].value;
  let checkName = /^[a-zA-Z ]+$/;
  let formEmail = document.forms["reserve"]["email"].value;
  let checkEmail =  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
  let formDate = document.forms["reserve"]["birthdate"]; 
  let formQuantity = document.forms["reserve"]["quantity"].value; 
  let checkRadio = document.forms["reserve"]["location"]; 
  let checkbox = document.getElementById('checkbox1');
  let errorFirst1 = document.getElementById('error-1-1');
  let errorFirst2 = document.getElementById('error-1-2');
  let errorLast1 = document.getElementById('error-2-1');
  let errorLast2 = document.getElementById('error-2-2');
  let errorEmail = document.getElementById('error-3');
  let errorDate1 = document.getElementById('error-4-1');
  let errorDate2 = document.getElementById('error-4-2');
  let errorQuantity = document.getElementById('error-5');
  let errorRadio = document.getElementById('error-6');
  let errorBox = document.getElementById('error-7');
  let error = false; 
  let dateNaissance = formDate.value;
  let aujourdhui = new Date();
  let anneeMin = aujourdhui.getFullYear() - 100;
  let anneeMax = aujourdhui.getFullYear() - 18;
  let dateNaissanceObj = new Date(dateNaissance);

const listErrorsForm = [ 
  [formFirst.length < 2, errorFirst1],
  [checkName.exec(formFirst) == null, errorFirst2],
  [formLast.length < 2, errorLast1],
  [checkName.exec(formLast) == null, errorLast2],
  [checkEmail.exec(formEmail) == null, errorEmail],
  [dateNaissanceObj.getFullYear() < anneeMin || dateNaissanceObj.getFullYear() > anneeMax, errorDate1],
  [formDate.value == "" , errorDate2],
  [formQuantity == "" , errorQuantity],
  [!checkRadio[0].checked && !checkRadio[1].checked && !checkRadio[2].checked &&!checkRadio[3].checked && !checkRadio[4].checked && !checkRadio[5].checked, errorRadio],
  [!checkbox.checked, errorBox]
]
listErrorsForm.forEach((errorForm)=> {
  error = testInput(errorForm[0], errorForm[1], error)
}) 

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
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              