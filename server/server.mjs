import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import records from "./routes/record.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use("/record", records);

//start the Express server
app.listen(PORT, () => {
  console.log("Server is running on port: ${PORT}");
});
