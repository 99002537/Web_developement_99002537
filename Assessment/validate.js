function validate()
{
    if(document.getElementById("username").value==""){
        alert("Enter User name");
        document.f1.user.focus();
    }else if(document.getElementById("pword").value==""){
        alert("Enter password");   
        document.f1.pw.focus();
    }
    else if(valpass()){
        alert("Enter correct Password");
        document.f1.pw.focus();
    }
    else if(document.getElementById("mail").value==""){
        alert("Enter your Email ID");
        document.f1.mail1.focus();}
    else if(properemail()){
            alert("Enter a valid email");
            document.f1.mail1.focus();
        }
    else if(document.getElementById("num").value==""){
        alert("Enter Phone Number");
        document.f1.phonenumber.focus();
    }
    else{
        checkUser();
     } 
    }
function valpass(){
    
    var string1 = document.getElementById("pword").value; 
    // if (string1.match(/[a-z]/g) && string1.match(/[A-Z]/g) && string1.match(( /[^a-zA-Z\d]/g) && string1.length >= 5)(/[0-9]/g) && string1.match())
        return false;

    // else 
    //     return true; 

}
    
   function checkUser(){
    var name1 = [];
       var name = document.getElementById("user").value;
        var f = 0;
        var len=name1.length();
        for(var i = 0; i<len; i++)
        if(len>=5&&len<=15){
        {
            if (name==name1[i]){
            alert("This name already exist, please enter some other name");
            f = 0;
            break;
        }
            if (f == 1){
            name.push(user);
            alert("Registration is complete");
            document.f1.submit();
        } 
   }
}
else{
    alert("Enter valid user name");
}
}