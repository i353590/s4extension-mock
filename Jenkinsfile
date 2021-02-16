#!/usr/bin/env groovy
@Library(['piper-lib', 'piper-lib-os']) _

node{
	dockerExecuteOnKubernetes(script: this, dockerEnvVars: ['pusername':pusername, 'puserpwd':puserpwd], dockerImage: 'docker.wdf.sap.corp:51010/sfext:latest' ) {

	try {
		stage ('Build') { 
			deleteDir()
      		checkout scm	 
	 		sh '''
			    npm config set unsafe-perm true
			    npm rm -g @sap/cds
			    npm i -g @sap/cds-dk
			    cd tests/mocks
			    cds build --production
			    cd ../..
			    mv ./build/manifest1.yml tests/mocks/gen/srv/manifest.yml
				mv ./build/xs-security.json xs-security.json
			'''
			packageJson = readJSON file: 'package.json'
			packageJson.cds.requires.API_BUSINESS_PARTNER["[production]"].credentials.destination = "bupa-mock"
			writeJSON file: 'package.json', json: packageJson
			sh "cat package.json"
			sh "mbt build -p=cf"  
		 
	  	}

	  	// stage('Deploy Mock'){
		// 	setupCommonPipelineEnvironment script:this
		// 	cloudFoundryDeploy script:this, deployTool:'cf_native', cloudFoundry: [manifest: 'tests/mocks/gen/srv/manifest.yml']
		// 	cloudFoundryDeploy script:this, deployTool:'mtaDeployPlugin'  	
        // }

		// stage('Mock Integration Test'){
		// 	withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId:'pusercf', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD']]) {
		// 		sh 'cf login -a https://api.cf.eu10.hana.ondemand.com -u $USERNAME -p $PASSWORD -o referenceappscf -s CICD_s4ext'
		// 	}
		// 	sh '''
		// 		appId=`cf app BusinessPartnerValidation-srv --guid`
		// 		`cf curl /v2/apps/$appId/env > appEnv.json`
		// 	'''
		// 	appEnv = readJSON file: 'appEnv.json'
		// 	clientId = appEnv.system_env_json.VCAP_SERVICES.xsuaa[0].credentials.clientid
		// 	clientSecret = appEnv.system_env_json.VCAP_SERVICES.xsuaa[0].credentials.clientsecret
		//    	sh """
		//    		######################### Create Business partner ##################################################################
		//    		# curl -X POST -H "Content-Type: application/json" -d @req_bp_create.json https://businesspartnervalidation-srv-mocks.cfapps.eu10.hana.ondemand.com/api-business-partner/A_BusinessPartner
		   
		//    		######################### Get Oauth token ##########################################################################
		   
		//    		curl -X POST -d "client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials" https://referenceapps.authentication.eu10.hana.ondemand.com/oauth/token > oauth.json
		//    	"""

		//    sh '''
		//    		ls
		//    		cat oauth.json
		//    		echo 'Y' | apt-get install jq   
		//    		access_token=`jq '.access_token' oauth.json`
		   
		//    		echo "parsing access token"
		   
		//    		access_token=`echo $access_token | xargs`
		   
		//    		echo "printing access token"
		//    		echo $access_token
		   
		//   		 curl -X GET -H "Authorization: Bearer $access_token"  https://referenceappscf-cicd-s4ext-businesspartnervalidation-srv.cfapps.eu10.hana.ondemand.com/sales/Notifications > notifications.json
		//   		 notification_id=`jq '.value[1].ID' notifications.json`
		//   		 notification_id=`echo $notification_id | xargs`
		    
		//    		########################### Update verificationStatus_code in master app###############################################
		    
		//    		echo "change verification_status"
		    
		//     	#curl -X POST -H "Authorization: Bearer $access_token" -H "Content-Type: application/json" -d @req_draft_edit.json 'https://referenceappscf-cicd-s4ext-businesspartnervalidation-srv.cfapps.eu10.hana.ondemand.com/sales/Notifications(ID='"$notification_id"',IsActiveEntity=true)/service.businessPartnerValidation.SalesService.draftEdit?$select=HasActiveEntity,HasDraftEntity,ID,IsActiveEntity,businessPartnerId,businessPartnerName,verificationStatus_code&$expand=DraftAdministrativeData($select=DraftUUID,InProcessByUser),verificationStatus($select=code,updateCode)'
		    
		//     	#curl -X PATCH -H "Authorization: Bearer $access_token" -H "Content-Type: application/json" -d @req_change_status.json 'https://referenceappscf-cicd-s4ext-businesspartnervalidation-srv.cfapps.eu10.hana.ondemand.com/sales/Notifications(ID='"$notification_id"',IsActiveEntity=false)'
		   
		//     	#curl -X POST -H "Authorization: Bearer $access_token" -H "Content-Type: application/json" -d @req_sideeffect_qualifier.json 'https://referenceappscf-cicd-s4ext-businesspartnervalidation-srv.cfapps.eu10.hana.ondemand.com/sales/Notifications(ID='"$notification_id"',IsActiveEntity=false)/service.businessPartnerValidation.SalesService.draftPrepare'
		//    		#curl -X POST -H "Authorization: Bearer $access_token" -H "Content-Type: application/json" 'https://referenceappscf-cicd-s4ext-businesspartnervalidation-srv.cfapps.eu10.hana.ondemand.com/sales/Notifications(ID='"$notification_id"',IsActiveEntity=false)/service.businessPartnerValidation.SalesService.draftActivate'
		   
		   
		//     	########################## Patch request to Mock app to update BusinessPartnerisBlocked ################################
		    
		//     	#curl -X PATCH -H "Content-Type: application/json" -d @req_unblock_bp.json "https://businesspartnervalidation-srv-mocks.cfapps.eu10.hana.ondemand.com/api-business-partner/A_BusinessPartner('17100015')"
		    
		//     	########################## Get all notification #########################################################################
		    
		//     	curl -X GET -H "Authorization: Bearer $access_token"  https://referenceappscf-cicd-s4ext-businesspartnervalidation-srv.cfapps.eu10.hana.ondemand.com/sales/Notifications
		    
		//    '''
	    // }
	  
	   	stage('Redeploy'){
		   	sh "rm -rf *"
      		checkout scm
		   	sh '''
			    mv ./build/xs-security.json xs-security.json
			    mbt build -p=cf
			'''
			cloudFoundryDeploy script:this, deployTool:'mtaDeployPlugin'  
	    } 

 	   	// stage('UI Test'){
		   
		// 	build job: 'customlogicS4_demoscript'
		
		// }
	   	stage('Undeploy'){
			sh'''
		   		cf delete BusinessPartnerValidation-srv-mocks -f
		   		echo 'y' | cf undeploy BusinessPartnerValidation
		   	'''
		 
	    }
	}
	catch(e){
		echo 'This will run only if failed'
		currentBuild.result = "FAILURE"
	}
	finally {
		 emailext body: '$DEFAULT_CONTENT', subject: '$DEFAULT_SUBJECT', to: 'navin.krishnan.manohar@sap.com'
	}
}
} 
