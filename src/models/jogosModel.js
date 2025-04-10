import prisma from "../../prisma/prisma.js";

class JogoModel {
  // Obter todos os jogos
  async findAll() {
    const jogos = await prisma.jogo.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(jogos);

    return jogos;
  }

  // Obter um jogo pelo ID
  async findById(id) {
    const jogo = await prisma.jogo.findUnique({
      where: {
        id: Number(id),
      },
    });

    return jogo;
  }

  // Criar um novo jogo
  async create(title, price, releaseYear, developer, genres, platforms, imageUrl) {
    const newJogo = await prisma.jogo.create({
      data: {
        title,
        price,
        releaseYear,
        developer,
        genres,
        platforms,
        imageUrl,
      },
    });

    return newJogo;
  }

  // Atualizar um jogo
  async update(id, title, price, releaseYear, developer, genres, platforms, imageUrl) {
    const jogo = await this.findById(id);

    if (!jogo) {
      return null;
    }

    // Atualize o jogo existente com os novos dados
    const data = {};
    if (title !== undefined) {
      data.title = title;
    }
    if (price !== undefined) {
      data.price = price;
    }
    if (releaseYear !== undefined) {
      data.releaseYear = releaseYear;
    }
    if (developer !== undefined) {
      data.developer = developer;
    }
    if (genres !== undefined) {
      data.genres = genres;
    }
    if (platforms !== undefined) {
      data.platforms = platforms;
    }
    if (imageUrl !== undefined) {
      data.imageUrl = imageUrl;
    }

    const jogoUpdated = await prisma.jogo.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return jogoUpdated;
  }

  // Remover um jogo
  async delete(id) {
    const jogo = await this.findById(id);

    if (!jogo) {
      return null;
    }

    await prisma.jogo.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new JogoModel();