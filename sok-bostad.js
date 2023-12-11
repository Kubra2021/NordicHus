// Fetch JSON data from properties.json
fetch('bostadlist.json')
  .then(response => response.json())
  .then(data => {
    // Your JSON data
    var properties = data;

    // Display all properties when the page loads
    displayProperties(properties);

    // Function to display properties
    function displayProperties(properties) {
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

    // Search function
    function searchProperties() {
      // Get filter values
      var city = document.querySelector('select[name="city"]').value;
      var type = document.querySelector('select[name="type"]').value;
      var rum = document.querySelector('select[name="rum"]').value;
      var boarea = document.querySelector('select[name="boarea"]').value;
      var pris = document.querySelector('select[name="pris"]').value;

      // Apply filters
      var filteredProperties = properties.filter(function (property) {
        return (!city || property.City.toLowerCase() === city.toLowerCase()) &&
          (!type || property.Bostadstyp.toLowerCase() === type.toLowerCase()) &&
          (!rum || property['Antal rum'] >= rum) &&
          (!boarea || property.Boarea >= boarea) &&
          (!pris || property.Utgångspris <= pris);
      });

      // Display filtered properties
      displayProperties(filteredProperties);
    }

    // Sorting function
    function updateSorting() {
      var sortCriteria = document.getElementById('sortCriteria').value;

      switch (sortCriteria) {
        case 'price-increase':
          properties.sort(function (a, b) {
            return a.Utgångspris - b.Utgångspris;
          });
          break;
        case 'price-decrease':
          properties.sort(function (a, b) {
            return b.Utgångspris - a.Utgångspris;
          });
          break;
        case 'new-old':
          properties.sort(function (a, b) {
            return a.Byggnadsår - b.Byggnadsår;
          });
          break;
        case 'old-new':
          properties.sort(function (a, b) {
            return b.Byggnadsår - a.Byggnadsår;
          });
          break;
        // Add more cases for other sorting criteria if needed
      }

      // Display the sorted properties
      displayProperties(properties);
    }
  })
  .catch(error => console.error('Fel vid hämtning av data:', error));
