# Utiliser l'image officielle Jenkins LTS
FROM jenkins/jenkins:lts

# Installer Docker dans l'image Jenkins
USER root
RUN apt-get update && apt-get install -y apt-transport-https \
    ca-certificates curl software-properties-common && \
    curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add - && \
    add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" && \
    apt-get update && apt-get install -y docker-ce-cli

# Retourner à l'utilisateur Jenkins
USER jenkins
