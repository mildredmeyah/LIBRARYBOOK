
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const signupForm = document.querySelector("Register")
const loginsubmit = document.querySelector("input.login")
const signupsubmit = document.querySelector("input.signup")
const password = document.querySelector("input.password")



document.querySelector("button .fa-user").onclick= ()=>{
  loginForm.classList.toggle('active');
 }
 document.querySelector("button .fa-user").onclick= ()=>{
  loginForm.classList.remove('active');
 }
 

signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
  
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});
loginsubmit.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
  alert("you have logged in ")
});
signupsubmit.onclick = (()=>{
  signupForm.style.marginLeft = "-50%";
  signupText.style.marginLeft = "-50%";
  alert("account has been created  ")
});


window.onscroll =() =>{
  if (window.onload> 80) {
   document.querySelector(".header .header1").classList.add('actve');
  }else{
   document.querySelector(".header .header1").classList.remove('actve');

  }
}


var wrapper = document.getElementById('id01');


window.onclick = function(event) {
if (event.target == wrapper) {
wrapper.style.display = "none";
}
}
        