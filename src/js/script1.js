window.onload = function()
{
    var pass = localStorage.getItem('pass');
    var login = localStorage.getItem('mail');
    document.getElementById('log').style.content = "Login:\t" + login;
    document.getElementById('pass').style.content = "Password:\t" + pass;
}