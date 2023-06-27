import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('Vädersökdb.db');

class DbUtils {
  static initDB() {
    return new Promise((resolve, reject) => {
      db.transaction((transaction) => {
        transaction.executeSql(
          `CREATE TABLE IF NOT EXISTS history (
            id INTEGER PRIMARY KEY NOT NULL,
            cityname TEXT DEFAULT ''
          )`,
          [],
          (tx, res) => resolve(res),
          (tx, err) => reject(err)
        );
      });
    });
  }

  static historyS() {
    return new Promise((resolve, reject) => {
      db.transaction((transaction) => {
        transaction.executeSql(
          `pragma table_info('history')`,
          [],
          (tx, res) => resolve(res),
          (tx, err) => reject(err)
        );
      });
    });
  }

  static insert(history) {
    return new Promise((resolve, reject) => {
      db.transaction((transaction) => {
        transaction.executeSql(
          `INSERT INTO history (cityname)
          VALUES (?)`,
          [history.cityname],
          (tx, res) => resolve(res),
          (tx, err) => reject(err)
        );
      });
    });
  }

  static clearTable() {
    return new Promise((resolve, reject) => {
      db.transaction((transaction) => {
        transaction.executeSql(
          `DELETE FROM history`,
          [],
          (tx, res) => resolve(res),
          (tx, err) => reject(err)
        );
      });
    });
  }
}

export default DbUtils;