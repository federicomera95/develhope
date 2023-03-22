import express from "express";

import prisma from "./lib/prisma/client";

const app = express();

app.use(express.json());

//GET /users - Retrieve all users
app.get("/users", async (req, res) => {
  const users = await prisma.user.findMany();

  res.json(users);
});

export default app;
