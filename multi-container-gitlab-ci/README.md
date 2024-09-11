# Projet Multi-Container avec GitLab CI

## Description

Ce projet est un exemple d'application multi-container utilisant Node.js et PostgreSQL, orchestrée par Docker Compose et automatisée avec GitLab CI. 

### Explication des fichiers

- **backend/index.js** : Application Node.js simple qui se connecte à PostgreSQL.
- **backend/Dockerfile** : Le fichier Docker pour l'application Node.js.
- **docker-compose.yml** : Pour orchestrer le déploiement multi-container.
- **.gitlab-ci.yml** : Pipeline CI/CD de GitLab.
- **README.md** : Instructions pour configurer et lancer l'application.

## Instructions

1. **Créer le dépôt GitLab** : Créez un nouveau dépôt GitLab et téléchargez tous ces fichiers.
2. **Configurer GitLab Runner** : Assurez-vous d'avoir un GitLab Runner configuré avec Docker pour pouvoir exécuter les pipelines CI.
3. **Configurer GitLab CI/CD** : Chaque fois que vous poussez du code, GitLab CI exécutera automatiquement les étapes de build, test et déploiement selon le fichier `.gitlab-ci.yml`.
4. **Déployer avec Docker Compose** : Utilisez `docker-compose up --build` pour lancer les conteneurs en local et tester l'application.

## Prérequis

Avant de démarrer, assurez-vous d'avoir les éléments suivants installés et configurés:

- GitLab: Avoir un dépôt GitLab pour stocker le code.
- GitLab Runner: Un GitLab Runner configuré pour exécuter les jobs CI/CD.
- Docker: Installer Docker, car nous allons utiliser des conteneurs pour notre application.
- Node.js: Pour le développement de l'application.
- PostgreSQL: Base de données utilisée par l'application.
