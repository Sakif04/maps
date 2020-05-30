
var map;
var markers = [];
var infoWindow;

function initMap() {
    let themeType = 'Dark Theme'
    var losAngeles = {
        lat: 34.063380,
        lng: -118.358080
    }
    var lightTheme = [
        { elementType: 'geometry', stylers: [{ color: '#ebe3cd' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#523735' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#f5f1e6' }] },
        {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#c9b2a6' }]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#dcd2be' }]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#ae9e90' }]
        },
        {
            featureType: 'landscape.natural',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#93817c' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry.fill',
            stylers: [{ color: '#a5b076' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#447530' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#f5f1e6' }]
        },
        {
            featureType: 'road.arterial',
            elementType: 'geometry',
            stylers: [{ color: '#fdfcf8' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#f8c967' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#e9bc62' }]
        },
        {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry',
            stylers: [{ color: '#e98d58' }]
        },
        {
            featureType: 'road.highway.controlled_access',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#db8555' }]
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#806b63' }]
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
        },
        {
            featureType: 'transit.line',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#8f7d77' }]
        },
        {
            featureType: 'transit.line',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#ebe3cd' }]
        },
        {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{ color: '#dfd2ae' }]
        },
        {
            featureType: 'water',
            elementType: 'geometry.fill',
            stylers: [{ color: '#b9d3c2' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#92998d' }]
        }
    ]
    var darkTheme = [
        { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
        { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
        {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#263c3f' }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#6b9a76' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#38414e' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#212a37' }]
        },
        {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#9ca5b3' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{ color: '#746855' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#1f2835' }]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#f3d19c' }]
        },
        {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#2f3948' }]
        },
        {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#d59563' }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#17263c' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#515c6d' }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#17263c' }]
        }
    ]
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 30,
        style: lightTheme, mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                'styled_map']
        }
    })
    var themebutton = document.querySelector('.theme');
    themebutton.innerHTML = themeType;
    let isLight = true;
    themebutton.addEventListener('click', () => {
        if (isLight) {
            themebutton.classList.remove("light")
            themebutton.classList.add('dark')
            map.setOptions({ styles: darkTheme })
            isLight = false;
            themeType = 'Light Theme'; themebutton.innerHTML = themeType;
        } else {
            themebutton.classList.remove("dark")
            themebutton.classList.add('light')
            map.setOptions({ styles: lightTheme })
            isLight = true; themeType = 'Dark Theme'; themebutton.innerHTML = themeType;
        }
    })

    infoWindow = new google.maps.InfoWindow();

    displayStores()
    showMarkers()
}
function showMarkers() {
    var bounds = new google.maps.LatLngBounds();
    stores.forEach(function (store, index) {
        var latlng = new google.maps.LatLng(
            store.coordinates.latitude,
            store.coordinates.longitude);
        openStat = store.openStatusText;
        var name = store.name;
        var phone = store.phoneNumber;
        var address = store.addressLines[0];
        bounds.extend(latlng);
        let markerNum = `${index + 1}`;
        createMarker(latlng, name, address, markerNum, openStat, phone);
    })
    map.fitBounds(bounds);
}
var la = {
    lat: 34.063380,
    lng: -118.358080
}
let pos = navigator.geolocation.getCurrentPosition(function (position) {
    var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };
})
function createMarker(latlng, name, address, index, open, phone) {

    var html = `<b class='name'> ${name} </b> <br/> <div class="open-status">${open}</div><br/><div class="address">   <a href="https://www.google.com/maps/dir/?api=1&origin=${pos}&destination=${latlng}"><i class="fas fa-location-arrow"></i></a> ${address}</div><br/><div class='phone'><i class="fas fa-phone-alt"></i>${phone}</div>`;
    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        label: index
    });
    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
    });
    markers.push(marker);
}


function displayStores() {

    let storesHtml = ``;
    stores.forEach((store, index) => {

        storesHtml += `<div div class="store-container" >
            <div class="store-address">
                <span> ${store.addressLines[0]}</span>
                <span> ${store.addressLines[1]}</span>
            </div>
            <div class="serial">
                <span>${index + 1}</span> </div>
            <div class="store-phone-number">356-345-4654</div>
    </div> `

    })
    document.querySelector('.stores-list').innerHTML = storesHtml;
}