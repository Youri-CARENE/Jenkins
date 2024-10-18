# Glossaire Jenkins

## 1. **Jenkins**
**Définition**: Serveur d'automatisation open-source permettant l'intégration continue (CI) et la livraison continue (CD).
**Utilité**: Aide à automatiser les tâches liées à la création, au test, et au déploiement de logiciels.
**Commande**:
    ```bash
    java -jar jenkins.war
    ```

---

## 2. **Pipeline**
**Définition**: Série d'étapes dans un processus d'intégration ou de livraison continue, décrite sous forme de code.
**Utilité**: Automatisation des tâches telles que la compilation, les tests, et le déploiement.
**Exemple**:
    ```groovy
    pipeline {
      agent any
      stages {
        stage('Build') {
          steps {
            echo 'Building...'
          }
        }
        stage('Test') {
          steps {
            echo 'Testing...'
          }
        }
        stage('Deploy') {
          steps {
            echo 'Deploying...'
          }
        }
      }
    }
    ```

---

## 3. **Agent**
**Définition**: Environnement dans lequel les étapes du pipeline sont exécutées (peut être un serveur local ou un nœud distant).
**Utilité**: Définit où les processus du pipeline doivent s'exécuter.
**Exemple**:
    ```groovy
    agent any
    ```

---

## 4. **Stage**
**Définition**: Segment d'un pipeline représentant une phase spécifique du processus (ex: Build, Test, Deploy).
**Utilité**: Organise les tâches du pipeline en étapes logiques.
**Exemple**:
    ```groovy
    stage('Build') {
      steps {
        echo 'Building...'
      }
    }
    ```

---

## 5. **Step**
**Définition**: Action spécifique à exécuter dans un pipeline (ex: exécuter un script, exécuter des tests, etc.).
**Utilité**: Chaque étape définit une action précise à réaliser dans un stage.
**Exemple**:
    ```groovy
    steps {
      echo 'Running a step...'
    }
    ```

---

## 6. **Node**
**Définition**: Machine où Jenkins exécute les builds. Jenkins Master gère plusieurs nodes (ou agents).
**Utilité**: Les nodes permettent de distribuer les tâches sur différentes machines pour améliorer l'efficacité.
**Exemple**:
    ```groovy
    node {
      // Code du pipeline
    }
    ```

---

## 7. **Job**
**Définition**: Unité de travail dans Jenkins représentant une tâche d'automatisation individuelle.
**Utilité**: Un job peut être une simple tâche de build, test ou déploiement.
**Exemple**: Configuration d'un job via l'interface Jenkins.

---

## 8. **Blue Ocean**
**Définition**: Interface utilisateur graphique pour Jenkins, plus moderne et intuitive.
**Utilité**: Offre une expérience visuelle pour concevoir et gérer les pipelines CI/CD.
**Exemple**: Accès via l'URL de Jenkins avec `/blue`.

---

## 9. **Freestyle Project**
**Définition**: Type de job Jenkins qui permet de définir une séquence de tâches de manière simple, sans pipeline codé.
**Utilité**: Utile pour les projets plus simples qui ne nécessitent pas de pipeline complexe.
**Exemple**: Configuration via l'interface Jenkins.

---

## 10. **Declarative Pipeline**
**Définition**: Syntaxe spécifique pour écrire des pipelines Jenkins de manière structurée et facile à lire.
**Utilité**: Encourage une approche plus lisible et organisée des pipelines.
**Exemple**:
    ```groovy
    pipeline {
      agent any
      stages {
        stage('Build') {
          steps {
            echo 'Building...'
          }
        }
      }
    }
    ```

---

## 11. **Scripted Pipeline**
**Définition**: Syntaxe de pipeline Jenkins plus flexible mais aussi plus complexe que la syntaxe déclarative.
**Utilité**: Offre plus de flexibilité pour les pipelines complexes, mais requiert une meilleure maîtrise de Groovy.
**Exemple**:
    ```groovy
    node {
      stage('Build') {
        echo 'Building...'
      }
    }
    ```

---

## 12. **Webhook**
**Définition**: Mécanisme qui permet à Jenkins de réagir aux événements externes (ex: un commit GitHub déclenchant un job Jenkins).
**Utilité**: Automatisation des jobs Jenkins lorsqu'un événement se produit (par exemple, un push dans un dépôt Git).
**Exemple**: Configuration d'un webhook dans GitHub pour déclencher un build Jenkins.

---

## 13. **Master/Controller**
**Définition**: Le serveur Jenkins principal qui orchestre les builds, gère l'interface utilisateur, et communique avec les agents.
**Utilité**: Centralise la gestion des pipelines, des configurations, et des agents.
**Exemple**: Jenkins Master est l'instance Jenkins principale.

---

## 14. **Agent/Slave**
**Définition**: Machines distantes où les jobs Jenkins sont exécutés, gérés par le Master.
**Utilité**: Permet de distribuer les builds sur plusieurs machines pour améliorer les performances.
**Exemple**: Un agent est configuré pour exécuter des jobs Jenkins sur une machine Linux.

---

## 15. **Groovy**
**Définition**: Langage de programmation utilisé pour écrire des pipelines Jenkins (notamment les pipelines Scripted).
**Utilité**: Permet de créer des pipelines plus complexes et dynamiques dans Jenkins.
**Exemple**:
    ```groovy
    println 'Hello, Jenkins!'
    ```

---

## 16. **Jenkinsfile**
**Définition**: Fichier contenant la définition d'un pipeline Jenkins, généralement placé à la racine d'un projet.
**Utilité**: Versionne et stocke les pipelines Jenkins directement avec le code source du projet.
**Exemple**:
    ```groovy
    pipeline {
      agent any
      stages {
        stage('Build') {
          steps {
            echo 'Building...'
          }
        }
      }
    }
    ```

---

## 17. **SCM (Source Code Management)**
**Définition**: Système de gestion de code source comme Git, Subversion, etc., utilisé par Jenkins pour télécharger le code source à construire.
**Utilité**: Facilite l'intégration continue en téléchargeant automatiquement le code source depuis un dépôt.
**Exemple**: Intégration avec GitHub pour télécharger automatiquement le code source à chaque commit.

---

## 18. **Plugins**
**Définition**: Extensions pour Jenkins qui ajoutent des fonctionnalités supplémentaires, comme l'intégration avec d'autres outils ou services.
**Utilité**: Étend les capacités de Jenkins pour répondre à des besoins spécifiques.
**Exemple**: Plugin "Git" pour l'intégration avec les dépôts Git.

---

## 19. **Build Trigger**
**Définition**: Mécanisme qui déclenche l'exécution d'un job dans Jenkins, basé sur un événement (comme un commit ou un minuteur).
**Utilité**: Permet de démarrer automatiquement les jobs Jenkins en réponse à des événements spécifiques.
**Exemple**: Un déclencheur qui démarre un build chaque fois qu'un commit est poussé dans un dépôt Git.

---

## 20. **Credentials (Identifiants)**
**Définition**: Système de gestion des identifiants dans Jenkins, permettant de stocker et de gérer les secrets comme les clés SSH, mots de passe, etc.
**Utilité**: Sécurise les informations sensibles utilisées dans les pipelines et les jobs Jenkins.
**Exemple**: Stockage des informations d'identification pour un dépôt Git privé.

---

## 21. **Parameterized Build**
**Définition**: Job Jenkins qui accepte des paramètres en entrée, permettant de personnaliser le processus de build.
**Utilité**: Permet de passer des valeurs dynamiques à un job avant son exécution.
**Exemple**: Un build qui prend un numéro de version comme paramètre.

---

## 22. **Artifacts**
**Définition**: Fichiers générés pendant un build, comme des exécutables ou des fichiers de configuration, et sauvegardés par Jenkins.
**Utilité**: Conserve les résultats du build pour référence ou utilisation ultérieure.
**Exemple**: Un fichier JAR généré par une tâche de compilation Java.

---

## 23. **Post-build Action**
**Définition**: Actions qui s'exécutent après la fin d'un build, comme envoyer une notification ou archiver des fichiers.
**Utilité**: Automatiser des actions après la fin d'un job Jenkins.
**Exemple**: Envoi d'un email si le build échoue.

---

## 24. **Polling**
**Définition**: Mécanisme où Jenkins vérifie régulièrement un dépôt SCM pour détecter des changements et éventuellement déclencher un build.
**Utilité**: Automatisation des builds sans avoir besoin de webhooks, en surveillant les changements.
**Exemple**: Polling d'un dépôt Git toutes les 5 minutes pour des changements.

---

## 25. **Cron Syntax**
**Définition**: Syntaxe utilisée pour programmer des jobs Jenkins à des moments spécifiques.
**Utilité**: Permet de déclencher des jobs à intervalles réguliers ou à des moments précis.
**Exemple**
