from node:20

workdir /nestjs

copy package.json .

RUN yarn config set network-timeout 3000000

RUN yarn install

COPY prisma ./prisma/
RUN yarn prisma generate

COPY . .

RUN yarn build

EXPOSE 8080

CMD [ "yarn","start:prod"]