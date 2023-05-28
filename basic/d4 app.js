// function hello(name){
//     // var element = document.getElementById('para');
//     // element.innerHtml ="Hello," + name;
//     // element.innerHTML overrides the content of the selected html
//     console.log("Hello,"+ name);
//     // alert("hello",+name);
// }
//     hello("javascript");
var btn=document.getElementById('submitBtn');
btn.addEventListener('click',function(){
   
      
        let fullname= document.getElementById('name');
        let email=document.getElementById('useremail');
       let password= document.getElementById('userpassword');
            let gnder=  document.getElementById('gender');
         let agree=   document.getElementById('agree');
         let verify=document.getElementById('verify');
    // }  validation process
    if(fullname.value==''){
document.getElementById('nameErr').innerHTML="please enter valid name";

    }
    else if(fullname.value.length <=5){
            document.getElementById('nameErr').innerHTML="please enter valid name";
        }else{
            document.getElementById('nameErr').innerHTML="please enter valid name";
        }
    }
    });
