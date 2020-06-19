## Messages App - Backend

The backend was built using Node.js, GrapgQL and many other packages.

### Stack

- Node.js & Javascript
- GraphQL APIs & Express.js
- MongoDB database & Mongoose.js ODM
- JWT Authentication & Password-Hashing with bcrypt
- File uploads with Multer

### Quick Start

1. Run `cp .env.sample .env` to create the config file.
    > **NOTE:** Please make the proper changes in this file if needed.

2. Run `docker-compose up --build` to setup a quick database. _** You can skip this step if you don't want to use Docker._

    > **IMPORTANT:** Before running above command, make sure you have [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed. * It runs the **docker-compose.yml** file.

3. Run `npm i` to install package dependencies.

4. Run `npm run start:dev` for starting the server.
