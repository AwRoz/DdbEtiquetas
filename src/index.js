require('dotenv').config({path:'../.env'})
const oracledb = require('oracledb')
const dbconfig = require('./dbconfig.js')

let factura = '133745'
let serieFra = 'FE'
let ejercicio = '2023'

async function getFactura(){
    let connection
    try{
        connection = await oracledb.getConnection(dbconfig)
        console.log(`Conexion exitosa: ${connection}`)
        const sql = `SELECT * FROM LIBRA.FACTURAS_VENTAS WHERE NUMERO_FACTURA = '${factura}' AND NUMERO_SERIE = '${serieFra}' AND EJERCICIO = '${ejercicio}'`
        const res = await connection.execute(sql)
        const data = res.rows
        console.log(data)
    }catch(err){
        console.log(`Error en la conexion a la DB: ${err}`)
    }finally{
        if(connection){
            try{
                await connection.close()
            }catch(err){
                console.log(`Error al cerrar conexion: ${err}`)
            }
        }
    }
}

getFactura()