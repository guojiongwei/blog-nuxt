FROM node:12
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm run build
EXPOSE 445
ENTRYPOINT ["npm", "run", "start"]

