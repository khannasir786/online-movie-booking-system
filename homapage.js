function start()
{
    var a = prompt("Welcome! Please Enter Your Name.");
    if(a!=""){
        document.getElementById("write").innerHTML = "Hello "+a + "! ";
        document.getElementById("write").style.fontSize = "15px";
    }
    else{
        document.getElementById("write").innerHTML = "Hello Guest!"
    }
    var A  =  document.getElementsByClassName("main");
    var B = document.getElementById("slidebox");
    var C = document.getElementsByClassName("slide");
    
}

function uploaddata()
{
    var username = document.getElementById("username");
    var password = document.getElementById("pass");
    var A = document.forms[0].user.value;
    var B  = document.forms[0].code.value;
    if(username.value == "")
        {
            alert("nothing can be left blank");
            username.focus();
            username.style.border = "1px solid red";
            return false;
        }
    else if(password.value.length<8)
        {
            alert("Password cannot be less than 8 characters");
            password.focus();
            password.style.border = "1px solid red";
            return false;
        }
     if(A == "adarsh@gmail.com"&& B =="12345678")
        {
            var s = confirm("Logged in successfully. Do you want to continue...");
            if(s == true)
                {
                   window.open('newmovies.html');
                }
            else{
                alert("sorry!");
            }
            
        }
    else
        {
           alert("Sorry! username or pasword didn't matched.");  
        }
}
function changecolor(x)
{
   document.getElementsByClassName("fa material-icons").style.color = "blue";
}

function displaydebit()
            {
                document.getElementById("debitpay").classList.toggle("active");
            }

function displaydiv()
            {
                document.getElementById("creditpay").classList.toggle("active");
            }
function ci()
            {
                document.getElementsByClassName("cinema").classList.toggle("active");
            }

function displaynet()
            {
                document.getElementById("netbanking").classList.toggle("active");
            }

function done()
{
    var confirmation  =confirm("Are you sure want to continue");
    if(confirmation==true)
        {
            document.getElementById("payment").innerHTML = "payment done successfully";
        }
}
 function about()
         {
             alert("Sorry! This movie is not available.");
         }
function check()
{
    var x = document.forms[0].code1.value;
    var y = document.forms[0].code2.value;
    if(x==y)
        {
            var say = confirm("Account successfully created! click ok to continue...");
            document.getElementById("")
            return true;
        }
    else{
        alert("Sorry! Password didn't matched.");
        x.focus();
        x.style.border =  "1px solid red";
        return false;
    }
}

function open()
{
    var a  = document.getElementById("city").value;
}


function showImage(on){
        document.getElementById("all").style.backgroundImage = "url("+on.src+")";
    
    }
function undo(){
            document.getElementById('all').style.backgroundImage = "";
        }