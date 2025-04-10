1. Configuração do Prisma

. Instalou o Prisma e o cliente Prisma com os comandos:

npm install prisma @prisma/client
npx prisma init

. Configurou o arquivo .env para usar o banco de dados SQLite:

DATABASE_URL="file:./dev.db"

. Criou o arquivo schema.prisma e definiu os modelos Task e Jogo.




2. Modelagem de Dados
No arquivo schema.prisma, definiu o modelo Jogo com os seguintes campos:

id: Identificador único.
title: Nome do jogo.
price: Preço do jogo.
releaseYear: Ano de lançamento.
developer: Desenvolvedor do jogo.
genres: Gêneros do jogo.
platforms: Plataformas disponíveis.
imageUrl: URL da imagem do jogo.
createdAt e updatedAt: Datas de criação e atualização.




3. Migrações do Prisma

. Criou e aplicou migrações para gerar as tabelas no banco de dados:

npx prisma migrate dev --name init




4. Implementação do Modelo jogosModel.js

. Criou o arquivo jogosModel.js para interagir com o banco de dados usando o Prisma.

. Implementou métodos como:

findAll: Retorna todos os jogos.
findById: Retorna um jogo específico pelo ID.
create: Cria um novo jogo.
update: Atualiza um jogo existente.
delete: Remove um jogo pelo ID.



5. Implementação do Controlador JogosController.js

. Criou o arquivo JogosController.js para gerenciar as requisições HTTP.

. Implementou os métodos:
getAllJogos: Retorna todos os jogos.
getJogoById: Retorna um jogo específico pelo ID.
createJogo: Cria um novo jogo.
updateJogo: Atualiza um jogo existente.
deleteJogo: Remove um jogo pelo 

. Adicionou tratamento de erros com try/catch para lidar com falhas nas operações.




6. Configuração das Rotas

. Criou o arquivo jogosRoutes.js para definir as rotas da API relacionadas aos jogos.

. Configurou as rotas:

GET /jogos: Retorna todos os jogos.
GET /jogos/:id: Retorna um jogo específico pelo ID.
POST /jogos: Cria um novo jogo.
PUT /jogos/:id: Atualiza um jogo existente.
DELETE /jogos/:id: Remove um jogo pelo ID.




7. Configuração do Servidor

. Configurou o servidor no arquivo server.js:
Usou o Express para criar a API.
Configurou o middleware express.json() para lidar com JSON no corpo das requisições.
Adicionou as rotas de jogos com app.use("/jogos", jogoRoutes).




8. Solução de Problemas

. Erro EADDRINUSE: Resolveu o problema de porta em uso identificando e encerrando processos que ocupavam a porta ou alterando a porta no código.

. Erro ERR_MODULE_NOT_FOUND: Corrigiu problemas de importação ajustando os caminhos e verificando a existência dos arquivos.

. Erro 500: Identificou e corrigiu problemas no modelo schema.prisma, como o campo platforms que estava incorretamente nomeado como plataforms.



9. Testes e Dados de Exemplo

. Criou exemplos de objetos JSON para testar a rota POST /jogos e adicionar jogos ao banco de dados.



10. Documentação

. Atualizou o arquivo README.md com instruções detalhadas sobre:

Configuração do Prisma.
Criação de modelos e migrações.
Configuração do servidor e rotas.
Passos para executar o projeto após clonar o repositório.

