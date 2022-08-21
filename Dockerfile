FROM node:12
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm run build
EXPOSE 444
ENTRYPOINT ["npm", "run", "start"]

