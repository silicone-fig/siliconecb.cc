FROM node:20.12.2
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 4173
CMD ["npm", "run", "preview"]
