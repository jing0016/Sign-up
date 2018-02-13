
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate(e){

    e.preventDefault();

    var emailValid = validateEmail(signupForm.email.value)
    var msg = document.getElementById("warningMessage");

    if(emailValid){
		  msg.style.display = 'none';
      console.log({
			'email': signupForm.email.value,
			'interest': signupForm.interest.value
		});
    }
    else{
		  msg.style.display = 'block';
    }
};

document.signupForm.addEventListener("submit", validate);
