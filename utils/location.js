const GOOGLE_API_KEY = "GOOGLE_API_KEY";

const getMapPreview = (lat, lng) =>{
    const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
    return mapPreviewUrl;
};

export default getMapPreview;