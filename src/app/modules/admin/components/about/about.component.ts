import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

declare const L: any;


@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        // if (!navigator.geolocation) {
        //     console.log('Location is not supported!')
        // }
        // navigator.geolocation.getCurrentPosition((position) => {
        //     const coords = position.coords;
        //     const latlon = [coords.latitude, coords.longitude];
        //     console.log(`lat:${position.coords.latitude}, lon:${position.coords.longitude}`);
        //     let map = L.map('map')
        //     map.setView(latlon, 13);
        //     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //         maxZoom: 19,
        //         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        //     }).addTo(map);

        //     // // marker
        //     // let marker = L.marker(latlon).addTo(map);

        //     // // popup
        //     // marker.bindPopup('<b>Hi</b>').openPopup();

        //     // var popup = L.popup()
        //     //     .setLatLng(latlon)
        //     //     .setContent("I am a standalone popup.")
        //     //     .openOn(map);
        // })
        // this.WatchPosition();
        // WatchPosition() {
        //     // let desLat = 0;
        //     // let desLon = 0;
        let map = L.map('map');
        let marker = L.marker;
        let circle = L.circle;
        let zoomed = L.zoomed;
        map.setView([51.5, -0.09], 13);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

            navigator.geolocation.watchPosition(
                (pos) => {
                    const lat = pos.coords.latitude;
                    const lng = pos.coords.longitude;
                    const accuracy = pos.coords.accuracy;
                    console.log(`lat:${pos.coords.latitude}, lon:${pos.coords.longitude}`);
                    if (L.marker) {
                        map.removeLayer(L.marker); //??
                        map.removeLayer(L.circle);
                    }

                    if (marker) {
                        map.removeLayer(marker);//??
                        map.removeLayer(circle);
                    }
                    
                    marker = L.marker([lat, lng]).addTo(map);
                    circle = L.circle([lat, lng], { radius: accuracy }).addTo(map);

                    if (!zoomed) {
                        zoomed = map.fitBounds(circle.getBounds());   
                    }

                    map.setView([lat, lng])
                        
                }, (e) => {
                    if (e.code === 1) {
                        alert("Please allow geolocation access")
                    } else {
                        alert("Cannot get current location!")
                    }
                })
    }


    }

    // (position) => {
    //     console.log(`lat:${position.coords.latitude}, lon:${position.coords.longitude}`);
    //     if (position.coords.latitude === desLat) {
    //         navigator.geolocation.clearWatch(id)
    //     }
    // }, (e) => {
    //     console.log(e);
    // }, {
    // enableHighAccuracy: true,
    // timeout: 5000,
    // maximumAge: 0





    
    // display: any;
    // center: google.maps.LatLngLiteral = {
    //     lat: 22.2736308,
    //     lng: 70.7512555
    // };
    // zoom = 6;

    // //moveMap()

    // moveMap(event: google.maps.MapMouseEvent) {
    //     if (event.latLng != null) this.center = (event.latLng.toJSON());
    // }

    // //move()

    // move(event: google.maps.MapMouseEvent) {
    //     if (event.latLng != null) this.display = event.latLng.toJSON();
    // }
