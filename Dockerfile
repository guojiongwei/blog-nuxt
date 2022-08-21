FROM node:12
COPY . /blog
WORKDIR /blog
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm run build
EXPOSE 445
ENTRYPOINT ["npm", "run", "start"]

