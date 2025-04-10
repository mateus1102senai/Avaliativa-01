import JogoModel from "./../models/jogosModel.js";

class JogoController {
  // GET /api/jogos
  async getAllJogos(req, res) {
    try {
      const jogos = await JogoModel.findAll();
      res.json(jogos);
    } catch (error) {
      console.error("Erro ao buscar jogos:", error);
      res.status(500).json({ error: "Erro ao buscar jogos" });
    }
  }

  // GET /api/jogos/:id
  async getJogoById(req, res) {
    try {
      const { id } = req.params;

      const jogo = await JogoModel.findById(id);

      if (!jogo) {
        return res.status(404).json({ error: "Jogo não encontrado" });
      }

      res.json(jogo);
    } catch (error) {
      console.error("Erro ao buscar jogo:", error);
      res.status(500).json({ error: "Erro ao buscar jogo" });
    }
  }

  // POST /api/jogos
  async createJogo(req, res) {
    try {
      const {
        title,
        price,
        releaseYear,
        developer,
        genres,
        platforms,
        imageUrl,
      } = req.body;

      if (
        !title ||
        !price ||
        !releaseYear ||
        !developer ||
        !genres ||
        !platforms ||
        !imageUrl
      ) {
        return res
          .status(400)
          .json({ error: "Todos os campos são obrigatórios" });
      }

      const newJogo = await JogoModel.create(
        title,
        price,
        releaseYear,
        developer,
        genres,
        platforms,
        imageUrl
      );

      res.status(201).json(newJogo);
    } catch (error) {
      console.error("Erro ao criar jogo:", error);
      res.status(500).json({ error: "Erro ao criar jogo" });
    }
  }

  // PUT /api/jogos/:id
  async updateJogo(req, res) {
    try {
      const { id } = req.params;
      const {
        title,
        price,
        releaseYear,
        developer,
        genres,
        platforms,
        imageUrl,
      } = req.body;

      const updatedJogo = await JogoModel.update(
        id,
        title,
        price,
        releaseYear,
        developer,
        genres,
        platforms,
        imageUrl
      );

      if (!updatedJogo) {
        return res.status(404).json({ error: "Jogo não encontrado" });
      }

      res.json(updatedJogo);
    } catch (error) {
      console.error("Erro ao atualizar jogo:", error);
      res.status(500).json({ error: "Erro ao atualizar jogo" });
    }
  }

  // DELETE /api/jogos/:id
  async deleteJogo(req, res) {
    try {
      const { id } = req.params;

      const result = await JogoModel.delete(id);

      if (!result) {
        return res.status(404).json({ error: "Jogo não encontrado" });
      }

      res.status(204).end();
    } catch (error) {
      console.error("Erro ao remover jogo:", error);
      res.status(500).json({ error: "Erro ao remover jogo" });
    }
  }
}

export default new JogoController();