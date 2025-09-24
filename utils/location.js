const GOOGLE_API_KEY = "AIzaSyDNZl9QtnMF3gTNQtHtjuOUmxUMl5XDbQE";

const getMapPreview = (lat, lng) =>{
    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
    return mapPreviewUrl;
};

export const getAddress = async(lat, lng) =>{
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) {
        throw new Error("Please Check GeoCoding API");
    }
    const data = await res.json();
    const address = data.result[0].formatted_address
    return address;
}
export default getMapPreview;