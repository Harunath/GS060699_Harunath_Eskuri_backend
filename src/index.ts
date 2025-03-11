import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import storeRouter from "./routes/storeRouter";
import skuRouter from "./routes/skuRouter";
import planningRouter from "./routes/planningRouter";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/store", storeRouter);
app.use("/api/sku", skuRouter);
app.use("/api/planning", planningRouter);

app.get("/", (req, res) => {
	res.json({ message: "GSynergy" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
