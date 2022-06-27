import * as SQlite from 'expo-sqlite';

const db = SQlite.openDatabase("Vädersökdb.db");

export const initDB = () => {

      return new Promise((resolve, reject) => {

        db.transaction((transaction) => {

             transaction.executeSql(

               `CREATE TABLE IF NOT EXISTS history (
                   id INTEGER PRIMARY KEY NOT NULL,
                   cityname TEXT NOT NULL
               )`, [],
               (_tx, res) => resolve(res),
               (tx, err) => reject(err)

             )
        })
      })
}