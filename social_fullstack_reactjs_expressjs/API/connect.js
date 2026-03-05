import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "168.144.41.175",
    user: "root",
    password: "1234",
    database: "mydevify_social",
    port: "3306"
}) 