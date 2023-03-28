import express, { Router } from "express";
import "express-async-errors";

import prisma from "../lib/prisma/client";

import { validate, planetSchema, PlanetData } from "../lib/validation";

import { initMulterMiddleware } from "../lib/middleware/multer";

const upload = initMulterMiddleware();

const router = Router();

router.get("/", async (req, res) => {
  const planets = await prisma.planet.findMany();

  res.json(planets);
});

//GET /planets/:id - Retrieve a specific planet
router.get("/:id(\\d+)", async (req, res, next) => {
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
router.post("/", validate({ body: planetSchema }), async (req, res) => {
  const planetData: PlanetData = req.body;

  const planet = await prisma.planet.create({
    data: planetData,
  });

  res.status(201).json(planet);
});

//PUT /planets/:id - Replace an existing planet
router.put(
  "/:id(\\d+)",
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
router.delete("/:id(\\d+)", async (req, res, next) => {
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

router.post(
  "/:id(\\d+)/photo",
  upload.single("photo"),
  async (req, res, next) => {
    if (!req.file) {
      res.status(400);
      return next("No photo file uploaded.");
    }

    const photoFileName = req.file.filename;

    res.status(201).json({ photoFileName });
  }
);

router.use("/photos", express.static("uploads"));

export default router;
