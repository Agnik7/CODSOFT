const first_name = document.getElementById('first_name');
const last_name = document.getElementById('last_name');
const register_button = document.getElementById('register');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');
const email = document.getElementById('email');
const mob = document.getElementById('mob');

register_button.addEventListener('click',()=>{
    alert(password.value)
    let full_name = first_name.value + ' ' + last_name.value;
    if(password.value === confirm_password.value)
    {
        axios.post("http://localhost:9000/register_user",{
            name:full_name,
            email: email.value,
            password: password.value
        })
        .then(function(res){
            console.log(res);
            window.location.href='./book.html';
        })
        .catch(err=>{
            console.log(err);
        })
    }
    else
    {
        alert("Passwords don't match!")
    }
});