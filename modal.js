function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalBtn = document.querySelectorAll(".close");
const contentModal = document.querySelector(".content"); 
const btnSubmit = document.querySelector(".btn-submit");
const modalbgValidate = document.querySelector(".bground-valid");
const closeBtn = document.querySelector(".close-btn");
const form = document.querySelector(".myForm");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal 
function closeModal() {
  modalbg.style.display = "none";
}

// Close modal with the button x
closeModalBtn.forEach((closebtn) => closebtn.addEventListener("click", closeModal));
// Close modal with the shadow without propagrate the click event to the modal content
modalbg.addEventListener('click', closeModal);
contentModal.addEventListener('click', (e) => {
  e.stopPropagation();
});


function modalValidate() {
  modalbgValidate.style.display = "block";
  modalbg.style.display = "none";
}

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

  function preventSubmit(e) {
    e.preventDefault();
    btnSubmit.addEventListener('click', modalValidate);
  }
  form.addEventListener('submit', preventSubmit);
  
  function closeModalValidate() {
    modalbgValidate.style.display = "none";
    window.location.reload();
  }

  const closeModalContentValidate = document.querySelector('.content-valid');
  const closeModalBtnValidate = document.querySelector('.close-valid');
  closeModalBtnValidate.addEventListener('click', closeModalValidate);
  modalbgValidate.addEventListener('click', closeModalValidate);
  closeModalContentValidate.addEventListener('click', (e) =>
    e.stopPropagation());
  closeBtn.addEventListener('click', closeModalValidate);
















