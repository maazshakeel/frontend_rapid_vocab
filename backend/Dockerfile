FROM node:17.6.0

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "app.ts"]
CMD [ "ts-node-dev", "--respawn ", "--transpile-only", "src/app.ts" ]
