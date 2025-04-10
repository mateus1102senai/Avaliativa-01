import express from "express";
import jogoRoutes from "./routes/jogosRoutes.js";
const app = express();
const port = 5000;
app.use(express.json());
app.use("/jogos", jogoRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
