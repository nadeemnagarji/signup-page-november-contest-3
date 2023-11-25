const user = document.getElementById("userFullName")
const email = document.getElementById("userEmail")
const password = document.getElementById("userPassword")
const token = document.getElementById("Token")
const logoutBtn = document.getElementById("logout")


user.innerText = `Full Name : ${localStorage.getItem("name")}`
email.innerText = `Email : ${localStorage.getItem("email")}`
password.innerText = `Password : ${localStorage.getItem("password")}`
token.innerText = `Token : ${localStorage.getItem("token")}`
console.log(user.innerText);



logoutBtn.addEventListener("click",()=>{
    localStorage.clear()
    window.location.href = 'index.html';
})