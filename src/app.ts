import express, { Application } from "express";
const app: Application = express();
app.use(express.json());
app.get("/", (req, res) => {
  console.log(res.send("Welcome to Prisma Blog Application API"));
});

export default app;
