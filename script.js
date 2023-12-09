document.addEventListener('DOMContentLoaded', function () {
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
 
  
});


