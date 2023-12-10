
function goToPage(page) {
  console.log("Go to " + page);
}

function goToLoginPage() {
    console.log("Go to Login page");
}

function scrollDown() {
    const mainContent = document.querySelector("index");
    mainContent.scrollIntoView({ behavior: "smooth" });
  }
 
var kullaniciBilgileri = [
    { Användarnamn: 'Alex', Lösenord: '12345' },
    { Användarnamn: 'Camilla', Lösenord: '12345'}
];

document.addEventListener("DOMContentLoaded", function () {
    var loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function () {
        loginUser();
    });
});
