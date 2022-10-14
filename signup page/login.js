document.querySelector("#btn").addEventListener("click",call);
var person=JSON.parse(localStorage.getItem("array"));
function call(){
   event.preventDefault();
    var mail=document.getElementById("mail").value;
    var password=document.getElementById("password").value;

   let element=person.find(item => item.mail===mail&& item.password===password );
   
   if(element===undefined){
      document.getElementById("ull").style.display="contents";
      document.getElementById("adjust").style.display="contents";
      document.getElementById("logp").style.display="contents";
      document.getElementById("logimage").style.display="contents";
   }else{
    alert("succesfull");
   }
}