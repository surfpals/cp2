var L;
window.onload = function() {
  L.mapquest.key = 'NvHvr9Su77imvKnvrUbmQCrR0H2zpDXJ';
  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [53.480759, -2.242631],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });
  layers: L.mapquest.tileLayer('map')
  map.addControl(L.mapquest.control({ position: 'bottomright' }));
  L.marker([53.480759, -2.242631], {
    icon: L.mapquest.icons.marker({
      primaryColor: '#22407F',
      secondaryColor: '#3B5998',
      shadow: true,
      size: 'md',
      symbol: 'A'
    })
  })
  .bindPopup('This is Manchester!')
  .addTo(map);
}
