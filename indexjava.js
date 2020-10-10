
function valid()
{

var user = document.getElementById("logname").value;
var passw= document.getElementById("logpass");

var exact= "shshigh";

if(passw.value!==exact)
    {

        alert("PASSWORD A DIKLO");
        return false;
            

    }
    else
    {
        true;
        alert("WELCOME  "+user+" TO THE SCHOOL"); 
        
    }
}

