const nameInput = document.getElementById("username")
const emailInput = document.getElementById("Email")
const passwordInput = document.getElementById("Password")
const confirmPasswordInput = document.getElementById("confirmPassword")
const form = document.getElementById("signupForm")
let userdata = {}

const loginbtn = document.getElementById("login")


nameInput.addEventListener("blur",(e)=>{
   if(e.target.value !=null){
    userdata.name = e.target.value
    console.log(userdata);
    localStorage.setItem("name", e.target.value)
   }
})
emailInput.addEventListener("blur",(e)=>{
    if(e.target.value !=null){
     userdata.email = e.target.value
     localStorage.setItem("email", e.target.value)
     console.log(userdata);
    }
 })
passwordInput.addEventListener("blur",(e)=>{
    if(e.target.value !=null){
     userdata.passwordInput = e.target.value
     localStorage.setItem("password", e.target.value)
     console.log(userdata);
    }
 })

confirmPasswordInput.addEventListener("blur",(e)=>{
    if(e.target.value !=null){
     userdata.confirmPassword = e.target.value
     localStorage.setItem("confirmPassword", e.target.value)
     if(passwordInput.value != confirmPasswordInput.value){
      alert("password does not match")
      return
   }
     
    }
 })



 // generation access token
let  tokenGeneration = ()=>{

      let string ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456790@#$%"
      let token =""
      for (let i = 1; i <= 16; i++) {
         char = Math.floor(Math.random()*66+1)
         token+=string.charAt(char)
      }

      return token
 }

 form.addEventListener("submit",(e)=>{
   e.preventDefault()



   // saving the data to local storage


   


    // checking if the password mathes 
if(passwordInput.value != confirmPasswordInput.value){
   alert("password does not match")
   return
}


// storing the token in local storage 


     // Redirect to the profile page
  window.location.href = 'home.html';

 })


 let token = tokenGeneration()
localStorage.setItem("token",token)
console.log(token);