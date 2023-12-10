// Fetch JSON data from properties.json
fetch('bostadlist.json')
  .then(response => response.json())
  .then(data => {
    // Your JSON data
    var properties = data;

    // Display all properties when the page loads
    displayProperties(properties);

    // Search function
    function searchProperties() {
      // ... (unchanged code) ...
    }

    // Function to display properties
    function displayProperties(properties) {
      console.log(properties); // Log the properties to the console
      var propertyList = document.getElementById('propertyList');
      propertyList.innerHTML = '';

      if (properties.length === 0) {
        propertyList.innerHTML = '<p>Inga bostäder hittades.</p>';
      } else {
        properties.forEach(function (property) {
          var propertyItem = document.createElement('li');
          var additionalLabels = '';

          if (property.Hiss) {
            additionalLabels += '<div class="additional-label">Hiss</div>';
          }
          if (property['Balkong/Uteplats']) {
            additionalLabels += '<div class="additional-label-container"><div class="additional-label">Balkong/Uteplats</div></div>';
          }

          propertyItem.innerHTML = `
            <div class="property-box">
              <img src="${property.image}" alt="Bild på bostad" class="property-image">
              <div class="property-info-description">
                <p>${property.Bostadstyp}</p>
                <p>${property.Address}</p>
                <p>${property.Utgångspris} SEK | ${property.Boarea} kvadratmeter | ${property['Antal rum']} rum</p>
                ${additionalLabels}
                <hr>
                <p>${property.Bostadstyp} beläget i ${property.Address} är nu till salu.</p>
                <p>Denna ${property['Antal rum']}-rumslägenhet har en total area på ${property.Boarea} kvadratmeter och erbjuder rymliga vardagsrum. Den har ${property['Balkong/Uteplats'] ? 'en balkong, ' : ''}${property.Hiss ? 'hiss, ' : ''}${property.Förråd ? 'förråd, ' : ''}${property.Parkering ? 'parkering, ' : ''}${property.Innergård ? 'innergård, ' : ''}vilket gör den till ett bekvämt och trivsamt hem. Missa inte chansen att äga denna fastighet byggd ${property.Byggnadsår}. Kontakta oss för mer information och för att boka en visning.</p>
              </div>
            </div>
          `;
          propertyList.appendChild(propertyItem);
        });
      }
    }
  })
  .catch(error => console.error('Fel vid hämtning av data:', error));




/* Logga in page */

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
            window.location.href = 'index.html';
        }, 2000); 

        return false; 
    } else {
        alert('Användarnamn eller lösenord är fel!');
        return false; 
    }
}
  
  


