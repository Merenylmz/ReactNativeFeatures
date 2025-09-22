class Place {
    constructor(title, imageUri, address, location) {
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.location = location; // {lat: 0.54551, lng: 1.45165}
        this.id = new Date.toString() + Math.random().toString()
    }
}