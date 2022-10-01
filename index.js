function validate() {
    let firstNameInput = document.getElementById("first-name").value;
    let lastNameInput = document.getElementById("last-name").value;
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;
    let confirmpasswordInput = document.getElementById("confirm-password").value;
    let tnCInput = document.getElementById("tnC").checked;
  
    let error = false
   
  
    if (firstNameInput &&
      firstNameInput.length >= 3) {
      document.getElementById("first-name-valid").style.display = "block";
      document.getElementById("first-name-invalid").style.display = "none";
    } else {
      document.getElementById("first-name-invalid").style.display = "block";
      document.getElementById("first-name-valid").style.display = "none";
      error = true
    }
  
    if (lastNameInput &&
      lastNameInput.length >= 3
      ) {
      document.getElementById("last-name-valid").style.display = "block";
      document.getElementById("last-name-invalid").style.display = "none";
    } else {
      document.getElementById("last-name-invalid").style.display = "block";
      document.getElementById("last-name-valid").style.display = "none";
      error = true
    }
  
    // Email
    // - whether exists?
    // - @
    // - .
    // -After last . , there should be atleast 2 characters
    if (
      emailInput &&
      emailInput.includes("@") &&
      emailInput.includes(".") &&
      emailInput.lastIndexOf(".") <= emailInput.length - 2 && 
      emailInput.indexOf('@') !== 0
    ) {
      document.getElementById("email-valid").style.display = "block";
      document.getElementById("email-invalid").style.display = "none";
    } else {
      document.getElementById("email-invalid").style.display = "block";
      document.getElementById("email-valid").style.display = "none";
      error = true
    }
  
    
    if (
        passwordInput &&
        passwordInput.length >= 8 &&
        passwordInput.includes("0 || 1 || 2 || 3 || 4") &&
        passwordInput.includes("$ || # || @")
    ) {
      document.getElementById("password-valid").style.display = "block";
      document.getElementById("password-invalid").style.display = "none";
    } else {
      document.getElementById("password-invalid").style.display = "block";
      document.getElementById("password-valid").style.display = "none";
      error = true
    }
  
    if(confirmpasswordInput.value == passwordInput.value) {
      document.getElementById("confirm-password-valid").style.display = 'block'
      document.getElementById("confirm-password-invalid").style.display = 'none'
    } else {
      document.getElementById("confirm-password-invalid").style.display = 'block'
      document.getElementById("confirm-password-valid").style.display = 'none'
      error = true
    }
  
    if(tnCInput) {
      document.getElementById('tnC-invalid').style.display = 'none'
    } else {
      document.getElementById('tnC-invalid').style.display = 'block'
      error = true
    }
  
    if(!error) {
      alert("Your details have been saved successfully")
      document.getElementById("first-name").value = ''
      document.getElementById("last-name").value = ''
      document.getElementById("email").value = ''
      document.getElementById("password").value = ''
      document.getElementById("confirm-password").value = ''
      document.getElementById("tnC").checked = false
  
      document.getElementById("first-name-valid").style.display = "none";
      document.getElementById("last-name-valid").style.display = "none";
      document.getElementById("email-valid").style.display = "none";
      document.getElementById("password-valid").style.display = "none";
      document.getElementById("confirm-password-valid").style.display = 'none'
  
    }
  }