FROM  mcr.microsoft.com/playwright:v1.55.1-noble
WORKDIR /playdocker
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npx","playwright","test"]