pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh './scripts/build.sh'
      }
    }
    stage('Test') {
      steps {
        sh './scripts/test.sh'
      }
    }
    stage('Deploy') {
      steps {
        sh './scripts/deploy.sh'
      }
    }
  }
  post {
    always {
      archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true
      junit 'reports/**/*.xml'
    }
  }
}
