'use strict';

class Panorama {
    constructor(mapCanvas, options) {
        this.canvas = mapCanvas;
        this.panorama = null;
        this.raf = null;
        this.init(options);
    }

    init(options) {
        this.panorama = new google.maps.StreetViewPanorama(this.canvas, options);
        return this.panorama;
    }
    
    static create(mapCanvas, options) {
        return new Panorama(mapCanvas, options);
    }
}

function initMap() {
    let mapCanvasEl = document.getElementById('map-canvas');
    let map = Panorama.create(mapCanvasEl, {
        position: {lat: 43.7710239, lng: 11.2522416},
        zoom: 1,
        scrollwheel: false,
        pov: {heading: -20, pitch: -10},
				disableDefaultUI: true
    });
}

initMap();