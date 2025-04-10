import express from "express";
import JogoController from "../controllers/JogosController.js";

const jogosRouter = express.Router();

// Rotas de Jogos
jogosRouter.get("/", JogoController.getAllJogos);
jogosRouter.get("/:id", JogoController.getJogoById);
jogosRouter.post("/", JogoController.createJogo);
jogosRouter.put("/:id", JogoController.updateJogo);
jogosRouter.delete("/:id", JogoController.deleteJogo);

export default jogosRouter;