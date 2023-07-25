FROM node:16-alpine
WORKDIR /app/server
COPY /package*.json ./

RUN npm install
COPY ./ /app/server/
CMD [ "npm" ,"run","dev"]