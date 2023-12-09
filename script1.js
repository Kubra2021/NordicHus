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
        propertyList.innerHTML = '<p>No properties found.</p>';
      } else {
        properties.forEach(function (property) {
          var propertyItem = document.createElement('li');
          var additionalLabels = '';

          if (property.elevator) {
            additionalLabels += '<div class="additional-label">Elevator</div>';
          }

          if (property.balcony) {
            additionalLabels += '<div class="additional-label-container"><div class="additional-label">Balcony</div></div>';
          }

          propertyItem.innerHTML = `
        <div class="property-box">
          <img src="${property.image}" alt="Property Image" class="property-image">
          <div class="property-info-description">
            <p>${property.type}</p>
            <p>${property.address}</p>
            <p>${property.price} SEK | ${property.area} sq. ft. | ${property.rooms} Rooms</p>
            ${additionalLabels}
            <hr>
            <p>${property.type === 'House' ? 'House' : 'Apartment'} located in ${property.address} is now available for sale.</p>
            <p>This ${property.rooms}-bedroom property has a total area of ${property.area} square feet, offering spacious living areas. It features ${property.balcony ? 'a balcony, ' : ''}${property.elevator ? 'an elevator, ' : ''}${property.storage ? 'storage, ' : ''}${property.parking ? 'parking, ' : ''}${property.courtyard ? 'a courtyard, ' : ''}making it a convenient and comfortable home. Don't miss the opportunity to own this property built in ${property.year}. Contact us for more details and to schedule a viewing.</p>
          </div>
        </div>
      `;
          propertyList.appendChild(propertyItem);
        });
      }
    }


  })
  .catch(error => console.error('Error fetching data:', error));
