require('dotenv').config({path:'./.env'})
const dbConfig = require('./dbconfig.js')
const oracledb = require('oracledb')

async function consultarDocumento(serie,numero){
    let connection
    try{
        connection = await oracledb.getConnection(dbConfig)
        console.log('Connection Successful')
        const sql = `SELECT * FROM LIBRA.FACTURAS_VENTAS WHERE NUMERO_SERIE = '${serie}' AND NUMERO_FACTURA = '${numero}' AND ROWNUM =1 ORDER BY FECHA_FACTURA DESC`
        console.log(sql)
        const res = await connection.execute(sql)
        console.log(res.rows)
    }catch(err){
        console.warn(`Error en la consulta sql: ${err}`)
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

// consultarDocumento('FE','123')
// initializeOracleDB()

// async function agregaDocumentosCola(){
//     const serieDoc = document.querySelector('input[name="docType"]:checked')
//     const numeroDoc = document.querySelector('#numeroDocumento')
//     if(serieDoc !== null && serieDoc.value !== '' && numeroDoc !== null && numeroDoc.value !== ''){
//         try{
//             let connection
//             console.log('conectando...');
//             connection = await oracledb.getConnection(dbConfig)
//             console.log('Connection Successful')
//             const sql = `SELECT * FROM LIBRA.FACTURAS_VENTAS WHERE NUMERO_SERIE = '${serieDoc.value}' AND NUMERO_FACTURA = '${numeroDoc.value}' AND ROWNUM =1 ORDER BY FECHA_FACTURA DESC`
//             console.log(sql)
//             const res = await connection.execute(sql)
//             console.log(res.rows)
//         }catch(err){
//             console.warn(`Error en la consulta o conexion: ${err}`)
//         }finally{
//             if(connection){
//                 try{
//                     await connection.close()
//                 }catch(err){
//                     console.log(`Error al finalizar la conexion con la DB: ${err}`)
//                 }
//             }
//         }
//     }else{
//         alert('Debe seleccionar un tipo y numero de documento');
//     }
// }

// agregaDocumentosCola()
