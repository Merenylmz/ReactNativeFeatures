export class Place {
    constructor(title, imageUri, location) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = location.address && location.address;
        this.location = location; // {lat: 0.54551, lng: 1.45165}
        this.id = Math.random().toString()
    }
}
