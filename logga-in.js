var mäklareinfo = [
  { Användarnamn: 'Alex',    Lösenord: '12345' },
  { Användarnamn: 'Camilla', Lösenord: '12345' },
  { Användarnamn: 'Eva',     Lösenord: '12345' },
  { Användarnamn: 'Kalle',   Lösenord: '12345' },
  { Användarnamn: 'Joseph',  Lösenord: '12345' },
    
  
];

document.addEventListener("DOMContentLoaded", function () {
    var loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function () {
        loginUser();
    });
});

function loginUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    var user = mäklareinfo.find(function (user) {
        return user.Användarnamn === username && user.Lösenord === password;
    });

    if (user) {
        alert('Välkommen, ' + username + '!');

        var userInfo = document.getElementById('userInfo');
        userInfo.innerHTML = 'Välkommen, ' + username + '!';
        userInfo.classList.remove('hidden');

        setTimeout(function () {
            window.location.href = 'huvusida.html';
        }, 2000); 

        return false; 
    } else {
        alert('Användarnamn eller lösenord är fel!');
        return false; 
    }
}
  