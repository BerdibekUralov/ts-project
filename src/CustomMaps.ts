// Instructions to other classes how be an arguments for "addMarker"
interface Mappable {
    location: {
        lat: number,
        lng: number,
    };
    markerContent(): string
}

export class CustomMaps {
    googleMap: google.maps.Map;
    
    constructor(selector: string) {
        this.googleMap = new google.maps.Map(document.getElementById(selector), {
            zoom: 2,
            center: {
                lat: 0,
                lng: 0,
            }
        })
    }

    addMarker(mappable: Mappable): void {
        new google.maps.Marker({
            map : this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng,
            }
        });
        addEventListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });
            infoWindow.open(this.googleMap)
        })
    }
}