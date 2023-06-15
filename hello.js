require('dotenv').config()
console.log(`Hello there!!! ${process.env.SECRET}`)
const variables = {
    user:process.env.NODE_ORACLEDB_USER,
    pss:process.env.NODE_ORACLEDB_PASSWORD,
    string:process.env.NODE_ORACLEDB_CONNECTIONSTRING
}

console.log(variables)

console.log(process.env)