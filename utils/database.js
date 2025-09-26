import * as SQLite from "expo-sqlite";

const database = SQLite.openDatabaseSync("placeDb.db");
import {Place} from "../models/place";

// Veritabanını başlat
const init = () => {
  return database.runAsync(`CREATE TABLE IF NOT EXISTS placetable (
    id INTEGER PRIMARY KEY NOT NULL,
    title TEXT NOT NULL,
    imageUri TEXT NOT NULL,
    lat REAL NOT NULL,
    lng REAL NOT NULL
  )`);
};

// Veri ekle
export const insert = (place) => {
  
  return database.runAsync(
    `
        INSERT INTO placetable (title, imageUri, lat, lng)
        VALUES (?, ?, ?, ?)
    `,
    [
        place.title,
        place.imageUri,
        place.location.latitude,
        place.location.longitude,
    ]
    );
};

// Veri çek
export const fetch = async() => {
  const result = await database.getAllAsync('SELECT * FROM placetable');
 
    const places = [];
 
    for (const dp of result) {
        places.push(
          new Place(
              dp.title,
              dp.imageUri,
              {
                lat: dp.lat,
                lng: dp.lng,
              },
              dp.id
          )
        );
    }
 
    return places;
};

export default init;