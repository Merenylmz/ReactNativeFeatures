import * as SQLite from "expo-sqlite";

let database;

// Veritabanını başlat
const init = () => {
  return new Promise(async (resolve, reject) => {
    try {
      database = await SQLite.openDatabaseAsync("placessss.db");

      await database.execAsync(`
        CREATE TABLE IF NOT EXISTS placessss (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT,
          imageUri TEXT,
          lat REAL,
          lng REAL
        )
      `);

      resolve("Veritabanı hazır!");
    } catch (err) {
      reject("Veritabanı başlatılamadı: " + err);
    }
  });
};

// Veri ekle
export const insert = (place) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Database", database);
      console.log("Place", place);
      if (!database) {
        await init(); // Veritabanı hazır değilse başlat
      }

      if (!place?.title || !place?.imageUri || !place?.location) {
        return reject("Eksik veri: title, imageUri veya location yok");
      }


      const result = await database.execAsync(
        `INSERT INTO placessss (title, imageUri, lat, lng) VALUES (?, ?, ?, ?)`,
        [
          place.title,
          place.imageUri,
          place.location.latitude,
          place.location.longitude,
        ]
      );
      resolve(result);
    } catch (err) {
      reject("Veri eklenemedi: " + err);
    }
  });
};

// Veri çek
export const fetch = () => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!database) {
        await init();
      }

      const result = await database.execAsync(`SELECT * FROM placessss`);
      const rows = result.rows;
      const data = [];

      for (let i = 0; i < rows.length; i++) {
        data.push(rows.item(i));
      }

      resolve(data);
    } catch (err) {
      reject("Veri çekilemedi: " + err);
    }
  });
};

export default init;