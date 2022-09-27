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
               (tx, res) => resolve(res),
               (tx, err) => reject(err)

             )
        })
      })
}

 export const historyS = () => {

  return new Promise((resolve, reject) => {

    db.transaction((transaction) => {
      transaction.executeSql(
        `pragma table_info('history')`, [],
        (tx, res) => resolve(res),
        (tx, err) => reject(err)
    )
    })
  })
}


export const insert = (history) => {

  return new Promise((resolve, reject) => {

      db.transaction((transaction) => {
          transaction.executeSql(
              `INSERT INTO history (cityname)
              VALUES (?)`, [history.cityname],
              (tx, res) => resolve(res),
              (tx, err) => reject(err)
          )
      })

  })
}



