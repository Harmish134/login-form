function validate () {

    var pass = document.getElementById('pass');
    var upperCaseLetters = /[A-Z]/g;
    var lowerCaseLetters = /[a-z]/g;
    var symbol =  /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    var numbers = ("[0-9].*[0-9].*[0-9].*[0-9]");

    if (pass.value.length >= 8){
        console.log("length is correct");
    }
    else {
        console.log("length is INcorrect");
    }
     if(pass.value.match(upperCaseLetters)){
        console.log("correct")
     }else {
        console.log("wrong")
     }
     if(pass.value.match(lowerCaseLetters)){
        console.log("correct")
     }else {
        console.log("wrong")
     }
     if(pass.value.match(symbol)){
        console.log("symbol is there!")
     }else {
        console.log("Should be one symbol")
     }
     if (pass.value.match(numbers)) {
      console.log("4 digit presents ")
     }else {
      console.log("Atleast Present 4 Digits")
     }
}