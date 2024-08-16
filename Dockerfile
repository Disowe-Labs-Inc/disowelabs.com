FROM node:18
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn
CMD ["yarn", "build"]
COPY . .
EXPOSE 3000
RUN yarn start
