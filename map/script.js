'use strict';

new google.maps.StreetViewPanorama(document.getElementById('map-canvas'), {
    position: {lat: 43.7687996, lng: 11.2532749},
    pov: {heading: 0, pitch: 0},
    zoom: 1,
    disableDefaultUI: true,
    scrollwheel: true,
    showRoadLabels: false,
    // motionTracking: false,
    // motionTrackingControl: false,
});

const observer = new MutationObserver(mutations => {
  mutations.forEach(({ addedNodes }) => {
      addedNodes.forEach(node => {
        if (node.innerText && node.innerText.indexOf('For development purposes only') >= 0) node.style.display = 'none';
        if (typeof node.querySelector === 'function' && node.querySelector('.dismissButton')) node.style.display = 'none';
      });
  })
});
observer.observe(document.querySelector('.container'), {
    childList: true,
    subtree: true,
    attributes: true,
});
