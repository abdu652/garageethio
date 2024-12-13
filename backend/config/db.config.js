import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();
console.log(process.env.DB_NAME);
const dbConfig = {
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD+"##",
	database: process.env.DB_NAME,
};

const pool = mysql.createPool(dbConfig);

// Function to check database connection
async function testConnection() {
	try {
		const connection = await pool.getConnection(); // Get a connection from the pool
		console.log("Database is connected successfully!");
		connection.release(); // Release the connection back to the pool
	} catch (err) {
		console.error("Failed to connect to the database:", err.message);
	}
}

// Call the test function
testConnection();

async function query(sql, params) {
	try {
		const [rows] = await pool.execute(sql, params);
		return rows;
	} catch (err) {
		return err.message;
	}
}

export default query;
