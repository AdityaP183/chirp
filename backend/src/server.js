import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";

const app = express();

app.get("/", (req, res) => {
	res.send("Hello from the backend!");
});

const startServer = async () => {
	try {
		await connectDB();
		app.listen(ENV.PORT, () => {
			console.log(`Server started on http://localhost:${ENV.PORT}`);
		});
	} catch (error) {
		console.error("Error starting server:", error);
		process.exit(1);
	}
};

startServer();
