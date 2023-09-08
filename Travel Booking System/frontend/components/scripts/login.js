const login_button = document.getElementById('login_button');
const password = document.getElementById('password');
const email = document.getElementById('email');

login_button.addEventListener('click',()=>{
    axios.post("http://localhost:9000/login_user",{
        email: email.value,
        password: password.value
    })
    .then(function(res){
        alert("Logged In")
        console.log(res);
        window.location.href='./book.html';
    })
    .catch(err=>{
        console.log(err);
    });
    
});