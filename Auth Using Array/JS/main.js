function myFunction(){
    var firstName= document.getElementById("firstname").value
    var surName= document.getElementById("surname").value
    var birthday= document.getElementById("birthday").value
    var email= document.getElementById("email").value
    var password= document.getElementById("password").value
    var confrirmPassword= document.getElementById("confrirmPassword").value
    
    if(firstName===""||surName===""||birthday===""||email===""||password===""||confrirmPassword===""){
        alert("Invalid Input");
    }else{
        if(email.includes('@')){
            if(
                password===confrirmPassword){birthday= birthday.replace(/-/g,'');
                var year=Number(birthday.substr(0,4));
                var month= Number(birthday.substr(4,2));
                var day= Number(birthday.substr(6,2));
                var today= new Date();
                var age= today.getFullYear()-year;
                if(today.getMonth()< month || (today.getMonth()== month && today.getDate()<day)){
                    age--;
                }
                     AuthArray = [firstName,surName,age,email,password,confrirmPassword]  
                                         console.log(AuthArray)
                                alert("Success");}else{
                                    alert("Passwords do not match")
                                }
        }else{
            alert("Invalid Email")
        }
        }
}

