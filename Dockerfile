FROM node:20.9.0

WORKDIR /app

COPY package-lock.json /app
COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3333

CMD [ "npm", "run", "dev" ]