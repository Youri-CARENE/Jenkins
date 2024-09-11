# Utiliser l'image Node.js officielle
FROM node:14

# Créer le répertoire de l'application
WORKDIR /usr/src/app

# Installer les dépendances de l'application
COPY package*.json ./
RUN npm install

# Copier le code de l'application
COPY . .

# Exposer le port de l'application
EXPOSE 3000

# Démarrer l'application
CMD ["node", "index.js"]
