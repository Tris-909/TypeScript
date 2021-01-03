import { User } from './User';
import { Company } from './Company';

interface MarkerInfo {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    windowInfo: string;
    catchPhrase: string | null;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divID: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divID), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    private triggerAddingMarker(subject: MarkerInfo): void {
        const infoWindow = new google.maps.InfoWindow({
            content: '<h1>' + subject.name +  '</h1>' + '<h3>' + (subject.catchPhrase ? subject.catchPhrase : "")  + '</h3>'  + '<p>' + subject.windowInfo + '</p>' 
        });
        
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: subject.location,
            title: subject.name
        });

        marker.addListener('click', () => {
            infoWindow.open(this.googleMap, marker);
        })
    }

    public addMarkers(subject): void {
        this.triggerAddingMarker(subject);
    }
}