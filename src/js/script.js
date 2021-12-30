window.onload = function()
{
    let login_enter = document.getElementById('login_enter');
    
    login_enter.onclick = function()
    {
        var login = document.getElementById('login').value;
        var password = document.getElementById('password').value;
        localStorage.setItem('mail', login);
        localStorage.setItem('pass', password)
        window.open("new.html");
    }
}