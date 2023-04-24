function validateForm() {
    var x = document.forms["myForm"]["username"].value;
    var y = document.forms["myForm"]["password"].value;
    if (x == "" || y == "") {
      alert("Username or Password must be filled out");
      return false;
    }
  }
  