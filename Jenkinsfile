#!/usr/bin/env groovy
@Library(['piper-lib', 'piper-lib-os']) _

node{
	 dockerExecuteOnKubernetes(script: this, dockerEnvVars: ['pusername':pusername, 'puserpwd':puserpwd], dockerImage: 'docker.wdf.sap.corp:51010/sfext:latest' ) {
	 
	 stage('Test') {
		 withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId:'pusercf', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
			sh 'cf login -a https://api.cf.eu10.hana.ondemand.com -u $USERNAME -p $PASSWORD'
			def appId = sh returnStdout: true, script: "cf app BusinessPartnerValidation-srv --guid"
			def appEnv = sh returnStdout: true, script: "cf curl /v2/apps/${appId}/env"
			sh "echo $appEnv"
		}
	 }
	//  stage ('Build') { 
	// 	deleteDir()
    //   	checkout scm	 
	//  	sh '''
	// 		    npm config set unsafe-perm true
	// 		    npm rm -g @sap/cds
	// 		    npm i -g @sap/cds-dk
	// 		    cd tests/mocks
	// 		    cds build --production
	// 		    cd ../..
	// 		    mv ./build/manifest1.yml tests/mocks/gen/srv/manifest.yml
	// 			mv ./build/xs-security.json xs-security.json
	// 		    '''
	// 	packageJson = readJSON file: 'package.json'
	// 	packageJson.cds.requires.API_BUSINESS_PARTNER["[production]"].credentials.destination = "bupa-mock"
	// 	writeJSON file: 'package.json', json: packageJson
	// 	sh "cat package.json"
	// 	sh "mbt build -p=cf"  
		 
	//   }

	//   	stage('Deploy Mock'){
	// 		setupCommonPipelineEnvironment script:this
	// 	 	// cloudFoundryDeploy script:this, deployTool:'cf_native', cloudFoundry: [manifest: 'tests/mocks/gen/srv/manifest.yml']
	// 		 cloudFoundryDeploy script:this, deployTool:'mtaDeployPlugin'
		  
		  	
    //           }
	  
	//    stage('Undeploy'){
	// 	  emailext body: '$DEFAULT_CONTENT', subject: '$DEFAULT_SUBJECT', to: 'navin.krishnan.manohar@sap.com'
	//      }
}
} 
