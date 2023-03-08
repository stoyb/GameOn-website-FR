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
const closeModalBtn = document.querySelector(".close");
const contentModal = document.querySelector(".content"); 


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
closeModalBtn.addEventListener("click", closeModal);
// Close modal with the shadow without propagrate the click event to the modal content
modalbg.addEventListener('click', closeModal);
contentModal.addEventListener('click', (e) => {
  e.stopPropagation();
});

function validate() {
  let formFirst = document.forms["reserve"]["first"].value;
  let formLast = document.forms["reserve"]["last"].value;
  let radio = document.forms["reserve"]["location"].value;
  let formDate = document.forms["reserve"]["birthdate"].value; 
  let checkbox = document.getElementById('checkbox1');
  
  if (formFirst.length < 2 ) {
    alert('Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
    return false;
  }
  if (formLast.length < 2 ) {
    alert('Veuillez entrer 2 caractères ou plus pour le champ du nom.');
    return false;
  }
  if (!radio.checked ) {
    alert('Vous devez choisir une option.');
    return false;
  }
  if (formDate == "" ) {
    alert("Vous devez entrer votre date de naissance.")
    return false;
  }
  if (!checkbox.checked) {
    alert('Vous devez vérifier que vous acceptez les termes et conditions.');
    return false;
  }

  }















