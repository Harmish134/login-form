function store(){
    
    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var phoneNo = document.getElementById('phoneNo');
    var address = document.getElementById('address');
    var err = document.getElementById('err');
    var errPhone = document.getElementById('errPhone');



    // uiogiugviug 
  
console.log(typeof(phoneNo.value))
passwordCorrect = false;
phoneNoCoreect = false;

    // if(pw.value.length == 0 || pw.value.length > 8 || pw.value.length < 8){
    //     // document.getElementById('msg').innerHTML="hello";
    //     err.style.border = "1px solid red";
    //     err.style.display = "block";
    //     pw.focus();
    // //  alert('please fill your password proper');

    // } else if(pw.value.length == 8) {
    //     err.style.display = "none";
    // }
    // else if(phoneNo.value.length == 0 || phoneNo.value.length > 10 || phoneNo.value.length < 10){
    //     alert('please fill your phone no proper');
    
    // }else if(address.value.length == 0 ||address.value.length > 300){
    //     alert('please fill your address proper');
    
    // }else {
    //     localStorage.setItem('name', name.value);
    //     localStorage.setItem('pw', pw.value);
    //     alert('your account has been created');
    // }
    
    //password
        if(pw.value.length == 8) {
            err.style.display = "none";
            passwordCorrect = true;
        } else {
            err.style.border = "1px solid red";
            err.style.display = "block";
            pw.focus();
            passwordCorrect = false;
        }

        //phone
        if(phoneNo.value.length === 10) {
            errPhone.style.display = 'none';
            phoneNoCoreect = true;
        } else {
            errPhone.style.display = 'block';
            phoneNoCoreect = false;
        }

        if(passwordCorrect && phoneNoCoreect) {
        localStorage.setItem('name', name.value);
         localStorage.setItem('pw', pw.value);
         alert('your account has been created');
     
        }

}

function check(){
    
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
     
    if(userName.value == storedName && userPw.value == storedPw){
        alert('you are logged in.');
    }else {
        alert('Please write username & pass proper.');
    }
}
