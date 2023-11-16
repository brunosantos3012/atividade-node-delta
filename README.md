# Atividade - NODE JS

# Sobre o projeto

API restful para gerenciamento de listas de tarefas.

# Como executar o projeto

O projeto tem dois modos de execucao. O primeiro modo é baixando todas as dependencias necessárias para executar e a outra é criando containers Docker. As instrucoes para os dois modos estao abaixo.

## Node Local (windows)
Pré-requisitos:
- Faça download do NODE (v20.9.0) no site oficial https://nodejs.org/en/download
- Faça download do DOCKER DESKTOP no site oficial https://www.docker.com/products/docker-desktop/
- Faça download do GIT no site oficial https://git-scm.com/download/win

```bash
# Clonar repositório
git clone https://github.com/brunosantos3012/atividade-node-delta.git

# E certifique-se de estar na pasta raiz do projeto
exemplo: C:\Users\Bruno\Documents\Projetos\TODOLIST-BACKEND
```

```bash
# instalar dependências
npm install

# iniciar um container docker - MYSQL para banco de dados
docker run --name nomedoseucontainer -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 mysql:5.7 -d
```

```bash
# criar o banco de dados e as tabelas necessarias
- utilize algum software que se conecte com o mysql e execute o comando a baixo. Caso utilize o VSCODE, recomendo a extensao "Database Client"

CRIACAO DO BANCO DE DADOS E TABELAS

CREATE DATABASE IF NOT EXISTS todolist;

USE todolist;

CREATE TABLE IF NOT EXISTS tasks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title LONGTEXT NOT NULL,
    description LONGTEXT NOT NULL,
    created_at VARCHAR(45) NOT NULL,
    update_date VARCHAR(45) NOT NULL,
    done BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    password VARCHAR(45) NOT NULL
);
```

```bash
# na raiz do projeto crie um arquivo chamado ".env" conforme o modelo
PORT=3000
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=todolist
JWT_SECRET=senha

# inicie o projeto
npm run dev
```

```bash
# documentacao é acessada atraves do link
http://www.localhost:3000/api-docs
```

## Docker
Pré-requisitos:
- Faça download do DOCKER DESKTOP no site oficial https://www.docker.com/products/docker-desktop/

```bash
# Clonar repositório
git clone https://github.com/brunosantos3012/atividade-node-delta.git

# E certifique-se de estar na pasta raiz do projeto
exemplo: C:\Users\Bruno\Documents\Projetos\TODOLIST-BACKEND
```

```bash
# na raiz do projeto crie um arquivo chamado ".env" conforme o modelo
PORT=3000
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_ROOT_PASSWORD=root
MYSQL_DATABASE=todolist
JWT_SECRET=senha

# instalar dependências
npm install

# inicie o projeto
docker-compose up -d
```

```bash
# documentacao é acessada atraves do link
http://www.localhost:3000/api-docs
```

# Autor

Bruno Rodrigues

https://www.linkedin.com/in/bruno-santos-566096ba/