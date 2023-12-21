const users = [{
        "email": "rubronegro@gmail.com",
        "password": "00000000"
    },
    {
        "email": "gabigol@gmail.com",
        "password": "12345678"
    }]
    function db(){
        return users;
    }
    function usuários(email, senha){
        let users = db();
        let user = users.find( user =>  user.email === email && user.senha === senha);
    if(user !== undefined) {
        return true;
    }
    else{
        return false;
    }
    function db(){
        return users;
    }
}
function login(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(isUser(email, senha)) {
        window.location.href = "dashboard.html"
    }
    else{
        alert("Login ou Senha Incorretos !!");
    }
}
