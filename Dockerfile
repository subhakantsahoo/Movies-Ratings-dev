FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install --legacy-peer-deps --ignore-scripts

COPY . .
ENV PORT=3000
ENV MONGO_URI=mongodb://mongo:27017/mydatabase
EXPOSE 3000
CMD ["node", "index.js"]
