FROM node:16-alpine
WORKDIR /server
COPY package*.json /server/

RUN npm install --silent
COPY . /server
CMD [ "npm" ,"run","dev"]