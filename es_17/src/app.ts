import express from "express";
import "express-async-errors";
import cors from "cors";

import prisma from "./lib/prisma/client";

import {
  validate,
  validationErrorMiddleware,
  planetSchema,
  PlanetData,
} from "./lib/validation";

const corsOptions = { origin: "http://localhost:8080" };

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
//GET /planets - Retrieve all planets
app.get("/planets", async (req, res) => {
  const planets = await prisma.planet.findMany();

  res.json(planets);
});

//GET /planets/:id - Retrieve a specific planet
app.get("/planets/:id(\\d+)", async (req, res, next) => {
  const planetId = Number(req.params.id);

  const planet = await prisma.planet.findUnique({
    where: { id: planetId },
  });

  if (!planet) {
    res.status(404);
    return next(`Cannot GET /planets/${planetId}`);
  }

  res.json(planet);
});

//POST /planets - Create a new planet
app.post("/planets", validate({ body: planetSchema }), async (req, res) => {
  const planetData: PlanetData = req.body;

  const planet = await prisma.planet.create({
    data: planetData,
  });

  res.status(201).json(planet);
});

//PUT /planets/:id - Replace an existing planet
app.put(
  "/planets/:id(\\d+)",
  validate({ body: planetSchema }),
  async (req, res, next) => {
    const planetId = Number(req.params.id);
    const planetData: PlanetData = req.body;

    try {
      const planet = await prisma.planet.update({
        where: { id: planetId },
        data: planetData,
      });

      res.status(200).json(planet);
    } catch (error) {
      res.status(404);
      next(`Cannot PUT /planets/${planetId}`);
    }
  }
);

//DELETE /planets/:id - Delete a planets
app.delete("/planets/:id(\\d+)", async (req, res, next) => {
  const planetId = Number(req.params.id);

  try {
    await prisma.planet.delete({
      where: { id: planetId },
    });

    res.status(204).end();
  } catch (error) {
    res.status(404);
    next(`Cannot DELETE /planets/${planetId}`);
  }
});

app.use(validationErrorMiddleware);

export default app;
