(function () {
  function loadMap(elemId, lat, lng, zoom, title, url) {
    var mapCanvas = document.getElementById(elemId);
    var position = new google.maps.LatLng(lat, lng);
    var mapOptions = {
      center: position,
      zoom: zoom,
      scaleControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      zoomControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
      position: position,
      map: map,
      title: title,
      url: url
    });

    google.maps.event.addListener(marker, 'click', function() {
      window.open(marker.url,'_blank');
    });
  };

  function initialize() {
    loadMap('mapcanvas1',
            15.823569, 74.495181,
            13, 'Foundary Cluster, Udyam Bhag, Belgaum',
            'https://www.google.co.in/maps/place/M+%26+M+India+Products,+4,+Udyambag,+Belgaum,+Karnataka+590008/@15.8234925,74.4952816,17z/');

    loadMap('mapcanvas2',
            12.975071, 77.60026,
            13, 'Bowring Institute, Belgaum',
            'https://www.google.co.in/maps/place/Bowring+Institute/@12.975071,77.60026,17z/');
  };

  $(document).ready(initialize);


}());
