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
      var propertyType = document.getElementById('propertyType').value;
      var minPrice = document.getElementById('minPrice').value;
      var maxPrice = document.getElementById('maxPrice').value;

      var filteredProperties = properties.filter(function (property) {
        return (!propertyType || property.type === propertyType) &&
          (!minPrice || property.price >= minPrice) &&
          (!maxPrice || property.price <= maxPrice);
      });

      displayProperties(filteredProperties);
    }

    // Display function
    function displayProperties(properties) {
      console.log(properties); // Log the properties to the console
      var propertyList = document.getElementById('propertyList');
      propertyList.innerHTML = '';

      if (properties.length === 0) {
        propertyList.innerHTML = '<p>No properties found.</p>';
      } else {
        properties.forEach(function (property) {
          var propertyItem = document.createElement('li');
          propertyItem.innerHTML = `
          <div class="property-box">
          <img src="${property.image}" alt="Property Image" class="property-image">
          <div class="property-info">
          <p>ID: ${property.id}</p>
          <p>Type: ${property.type}</p>
          <p>Address: ${property.address}</p>
          <p>Price: $${property.price}</p>
          <p>Rooms: ${property.rooms}</p>
          </div>
          </div>
          <hr>`;
          propertyList.appendChild(propertyItem);
        });
      }
    }
  })
  .catch(error => console.error('Error fetching data:', error));
