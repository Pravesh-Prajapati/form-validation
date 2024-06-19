function save() {
    let username= document.getElementById("username").value;
    let email= document.getElementById("email").value;
    let passsword= document.getElementById("password").value;
    let confirmPasssword= document.getElementById("confirm-password").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (username == "") {
        let res1 = document.getElementById("para1");
        res1.innerHTML="Username required" 
    }
    else if (email=="" ) {
        let res2 = document.getElementById("para2");
        res2.innerHTML="Email cannot blank";
    }
    else if (!emailRegex.test(email)) {
        let res2 = document.getElementById("para2");
        res2.innerHTML="Enter proper Email"; 
    } 
    else if ((passsword=="")) {
      let res3 = document.getElementById("para3");
     res3.innerHTML="Enter valid password";
    }
    else if (passsword.length<6 || passsword.length>16) {
        let res3 = document.getElementById("para3");
        res3.innerHTML=" must contain 6 character";
    }
   else if(confirmPasssword != passsword) {
        let res4 = document.getElementById("para4");
        res4.innerHTML="Password must be same";
        res4.style.color="red";
    }
    else{
        let res4 = document.getElementById("para4");
        res4.innerHTML=" login success";
        res4.style.color="green";
        window.location.replace("submit.html"); 
    } 
}