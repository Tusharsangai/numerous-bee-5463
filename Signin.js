
function siginUp(){
    console.log("siginup");
    let obj={
         Name:document.querySelector("#name").value,
         Email:document.querySelector("#email").value,
         Password:document.querySelector("#password").value,
         ReEnterPassword:document.querySelector("#re-enterpassword").value,
    }
   if(obj.Name=="" || obj.Email=="" || obj.Password=="" || obj.ReEnterPassword==""){
         alert("All Fields are mandatory");
   }else{
    alert("Sign In Successfully");
    window.location.href="index/index.html"
   }
   
};
