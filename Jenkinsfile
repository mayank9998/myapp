pipeline {
    agent any 
    stages {
        stage('CloneRepo') { 
            steps {
                sh " mvn clean "
            }
        }
        stage('TEST') { 
            steps {
                sh "mvn test"
            }
        }
        stage('Deploy') { 
            steps {
                sh "mvn package"
            }
        }
    }
}
