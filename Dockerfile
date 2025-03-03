FROM node:lts

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build TS
RUN npm run build


EXPOSE 3000

CMD ["node", "dist/server.js"]