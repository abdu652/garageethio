import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const password = process.env.DB_PASSWORD+"##";
export const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password,
	database: "evangadi",
});

async function createConnection() {
	try {
		await db.connect();
		console.log("database is connected.");
	} catch (err) {
		console.log("database is not connected.");
	}
}

export default createConnection;
