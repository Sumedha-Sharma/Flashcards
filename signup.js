$("#SU").click(function(){
  $("p").css("color", "red");
  var alertBox = document.getElementsByTagName("p");
  var user = document.getElementById("UN").length;
  if(user < 4){
    alertBox[0].innerHTML = "Username must be atleast 4 characters long";
  }
  var email = $("#mail").val();
  var patt1 = /@/;
  var patt2 = /\.com|\.in/;
  if(!(patt1.test(email)) || !(patt2.test(email))){
    alertBox[1].innerHTML = "Invalid Email!"
  }
  var pass = $("#pass").val();
  var cPass = $("#confirmPass").val();
  if(pass != cPass){
    alertBox[2].html("Passwords do not match!");
    alertBox[3].html("Passwords do not match!");
  }
})