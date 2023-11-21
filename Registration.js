var usernameRegex = /^[a-zA-Z\-]+$/;
var emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
function validation() {
  if (document.Formfill.Username.value == "") {
    document.getElementById("result").innerHTML = "Enter Usename";
    return false;
  } else if (document.Formfill.Username.value.length < 6) {
    document.getElementById("result").innerHTML = "Atleast 6 characters!*";
    return false;
  } else if (!document.Formfill.Username.value.match(usernameRegex)) {
    document.getElementById("result").innerHTML =
      "Only contain a-z A-Z and - !*";
    return false;
  } else if (document.Formfill.email.value == "") {
    document.getElementById("result").innerHTML = "Enter your email!*";
    return false;
  } else if (!document.Formfill.email.value.match(emailRegex)) {
    document.getElementById("result").innerHTML = "Enter valid Email!*";
    return false;
  } else if (document.Formfill.password.value == "") {
    document.getElementById("result").innerHTML = "Enter your password!*";
    return false;
  } else if (!document.Formfill.password.value.match(passwordRegex)) {
    document.getElementById("result").innerHTML =
      "Altleast [a-z],[A-Z],[0-9] length 8!*";
    return false;
  } else if (document.Formfill.cpassword.value == "") {
    document.getElementById("result").innerHTML = "confirm your password!*";
    return false;
  } else if (
    document.Formfill.password.value !== document.Formfill.cpassword.value
  ) {
    document.getElementById("result").innerHTML = "password is not matched!*";
    return false;
  } else if (
    document.Formfill.password.value == document.Formfill.cpassword.value
  ) {
    document.querySelector(".popup").style.visibility = "visible";
    return false;
  }
}
function CloseSlide() {
  location.reload(true);
}
