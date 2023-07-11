require('dotenv').config({path:'./.env'})
const oracledb = require('oracledb')
const dbConfig = require('./dbconfig.js')

async function connectToLibra(){
    let connection
    try{
        connection = await oracledb.getConnection(dbConfig)
        console.log('Connection Successful')
    }catch(err){
        console.log(`Error al connectar a DB: ${err}`)
    }finally{
        if(connection){
            try{
                await connection.close()
            }catch(err){
                console.log(`Error al finalizar la conexion con la DB: ${err}`)
            }
        }
    }
}

connectToLibra()