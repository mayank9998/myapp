pipeline {
    agent any 
    stages {
        stage('CloneRepo') { 
            steps {
                sh "git clone https://github.com/mayank9998/myapp.git"
                sh " mvn clean -f myapp"
            }
        }
        stage('TEST') { 
            steps {
                sh "mvn test -f myapp"
            }
        }
        stage('Deploy') { 
            steps {
                sh "mvn package -f myapp"
            }
        }
    }
}
