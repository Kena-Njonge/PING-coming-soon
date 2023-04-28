
function send(){
    var email = document.getElementById("email-box").value;
    var success = document.getElementById("success");
    var failure1 = document.getElementById("failure-a");
    var failure2 = document.getElementById("failure-b");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email==""){
        failure2.style.display = "block";
        failure1.style.display = "none";
        success.style.display = "none";
        console.log("fail2");
        return;
    }else{
    if (email.match(validRegex)) {
        failure2.style.display = "none";
        failure1.style.display = "none";
        success.style.display = "block";
        console.log("win");
        return;
    } else {
        failure2.style.display = "none";
        failure1.style.display = "block";
        success.style.display = "none";
        console.log("fail1");
        return;

    }
}
}
