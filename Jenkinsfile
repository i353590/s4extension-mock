#!/usr/bin/env groovy
@Library(['piper-lib', 'piper-lib-os']) _

node{
	 dockerExecuteOnKubernetes(script: this, dockerEnvVars: ['pusername':pusername, 'puserpwd':puserpwd], dockerImage: 'docker.wdf.sap.corp:51010/sfext:latest' ) {
	 stage ('Build') { 
			 
	 	sh '''
	  		    rm -rf cloud-cap-s4ems-bp
			    
			    git -c http.sslVerify=false clone https://github.tools.sap/refapps/cloud-cap-s4ems-bp.git --branch pipeline 
				cd cloud-cap-s4ems-bp
			    npm config set unsafe-perm true
			    npm rm -g @sap/cds
			    npm i -g @sap/cds-dk
			    cd tests/mocks
			    cds build --production
			    cd ../..
			    mv ./build/manifest1.yml tests/mocks/gen/srv/manifest.yml
			    
			    echo 'Y' | apt-get install jq    
			    jq '.+{"cds": {
    				    "--hana": {
      				      "deploy-format": "hdbtable"
                                     },
    				    "requires": {
      				      "messaging": {
        				"kind": "local-messaging",
        				"[production]": {
          				  "kind": "enterprise-messaging",
          				  "queue": {
            				    "name": "refapps/bpems/abc/BusinessPartnerValidation-srv/1234"
          				   }
        				 }
      				       },
      				       "[production]": {
        				 "db": {
          				   "kind": "hana",
          				   "model": [
            				     "db",
            				     "srv"
          				    ]
        				   }
      					 },
      					"API_BUSINESS_PARTNER": {
        				  "kind": "odata",
        				  "model": "srv/external/API_BUSINESS_PARTNER",
        				  "[production]": {
          				    "credentials": {
            				      "destination": "bupa-mock",
            				      "requestTimeout": 18000000
          				     }
        				   }
     					 },
      					"uaa": {
        				 "kind": "xsuaa"
      					}
   				      }
  				    }
				    }' package.json > package1.json
			    mv package1.json package.json
			    mv ./build/xs-security.json xs-security.json
			    cat package.json
			    mbt build -p=cf
			    '''
			   
		 
	  }
	  stage('Deploy Mock'){
	  	sh'''
		
			############################# Deploying Mock App #################################################
			
			    cd cloud-cap-s4ems-bp/tests/mocks
			    cat gen/srv/manifest.yml
			    cf login -u $pusername -p $puserpwd -a https://api.cf.eu10.hana.ondemand.com -o referenceappscf -s CICD_s4ext
			    cf push -f gen/srv
			############################ Deploying Bp validation App #########################################    
			    cd ../..
			    cd mta_archives
			    ls
			    ######cf login -u $pusername -p $puserpwd -a https://api.cf.eu10.hana.ondemand.com -o referenceappscf -s CICD_s4ext
    			    echo 'y' | cf deploy BusinessPartnerValidation_1.0.0.mtar
			    '''
		 
		  
		  	
              }
	   stage('Mock Integration Test'){
		  		   
		   sh'''
		   rm -rf cloud-cap-s4ems-bp
		   ####git clone https://329b7ba64125b54b25d22bbef289517c552e6454@github.tools.sap/I334088/cloud-cap-s4ems-bp.git -b latest
		     git -c http.sslVerify=false clone https://github.tools.sap/refapps/cloud-cap-s4ems-bp.git --branch pipeline 
		   echo "Creating business partner"
		   cd cloud-cap-s4ems-bp/build
		   ls
		   ######################### Create Business partner ##################################################################
		   # curl -X POST -H "Content-Type: application/json" -d @req_bp_create.json https://businesspartnervalidation-srv-mocks.cfapps.eu10.hana.ondemand.com/api-business-partner/A_BusinessPartner
		   
		   ######################### Get Oauth token ##########################################################################
		   
		   curl -X POST -d "client_id=sb-BusinessPartnerValidation1!t11427&client_secret=RHP/nHQKgL8Cgn2/QiJFThtE5IA=&grant_type=client_credentials" https://referenceapps.authentication.eu10.hana.ondemand.com/oauth/token > oauth.json
		   ls
		   cat oauth.json
		   echo 'Y' | apt-get install jq   
		   access_token=`jq '.access_token' oauth.json`
		   
		   echo "parsing access token"
		   
		   access_token=`echo $access_token | xargs`
		   
		   echo "printing access token"
		   echo $access_token
		   
		   curl -X GET -H "Authorization: Bearer $access_token"  https://referenceappscf-cicd-s4ext-businesspartnervalidation-srv.cfapps.eu10.hana.ondemand.com/sales/Notifications > notifications.json
		   notification_id=`jq '.value[1].ID' notifications.json`
		   notification_id=`echo $notification_id | xargs`
		    
		   ########################### Update verificationStatus_code in master app###############################################
		    
		    echo "change verification_status"
		    
		    #curl -X POST -H "Authorization: Bearer $access_token" -H "Content-Type: application/json" -d @req_draft_edit.json 'https://referenceappscf-cicd-s4ext-businesspartnervalidation-srv.cfapps.eu10.hana.ondemand.com/sales/Notifications(ID='"$notification_id"',IsActiveEntity=true)/service.businessPartnerValidation.SalesService.draftEdit?$select=HasActiveEntity,HasDraftEntity,ID,IsActiveEntity,businessPartnerId,businessPartnerName,verificationStatus_code&$expand=DraftAdministrativeData($select=DraftUUID,InProcessByUser),verificationStatus($select=code,updateCode)'
		    
		    #curl -X PATCH -H "Authorization: Bearer $access_token" -H "Content-Type: application/json" -d @req_change_status.json 'https://referenceappscf-cicd-s4ext-businesspartnervalidation-srv.cfapps.eu10.hana.ondemand.com/sales/Notifications(ID='"$notification_id"',IsActiveEntity=false)'
		   
		    #curl -X POST -H "Authorization: Bearer $access_token" -H "Content-Type: application/json" -d @req_sideeffect_qualifier.json 'https://referenceappscf-cicd-s4ext-businesspartnervalidation-srv.cfapps.eu10.hana.ondemand.com/sales/Notifications(ID='"$notification_id"',IsActiveEntity=false)/service.businessPartnerValidation.SalesService.draftPrepare'
		    #curl -X POST -H "Authorization: Bearer $access_token" -H "Content-Type: application/json" 'https://referenceappscf-cicd-s4ext-businesspartnervalidation-srv.cfapps.eu10.hana.ondemand.com/sales/Notifications(ID='"$notification_id"',IsActiveEntity=false)/service.businessPartnerValidation.SalesService.draftActivate'
		   
		   
		    ########################## Patch request to Mock app to update BusinessPartnerisBlocked ################################
		    
		    #curl -X PATCH -H "Content-Type: application/json" -d @req_unblock_bp.json "https://businesspartnervalidation-srv-mocks.cfapps.eu10.hana.ondemand.com/api-business-partner/A_BusinessPartner('17100015')"
		    
		    ########################## Get all notification #########################################################################
		    
		    curl -X GET -H "Authorization: Bearer $access_token"  https://referenceappscf-cicd-s4ext-businesspartnervalidation-srv.cfapps.eu10.hana.ondemand.com/sales/Notifications
		    
		   '''
		   
		   
		   /*sh'''
		   
		   rm -rf cloud-cap-s4ems-bp
		   git clone https://329b7ba64125b54b25d22bbef289517c552e6454@github.tools.sap/I334088/cloud-cap-s4ems-bp.git -b latest
		   cd cloud-cap-s4ems-bp/build
		   ###data = {"@odata.context":"$metadata#Notifications","value":[{"createdAt":null,"createdBy":null,"modifiedAt":null,"modifiedBy":null,"ID":"2c728381-72ce-4fdd-8293-8add71579666","businessPartnerId":"17100001","businessPartnerName":"TestData1","verificationStatus_code":"N","IsActiveEntity":true,"HasActiveEntity":false,"HasDraftEntity":false},{"createdAt":"2021-01-28T15:48:05.039Z","createdBy":"anonymous","modifiedAt":"2021-01-28T15:48:05.039Z","modifiedBy":"anonymous","ID":"c379743a-5c1a-4eb5-bfbc-523f8591be04","businessPartnerId":"17100015","businessPartnerName":"first lastname","verificationStatus_code":"N","IsActiveEntity":true,"HasActiveEntity":false,"HasDraftEntity":false},{"createdAt":null,"createdBy":null,"modifiedAt":null,"modifiedBy":null,"ID":"ff0bc005-710c-4097-a687-64ef380498f4","businessPartnerId":"17100002","businessPartnerName":"TestData2","verificationStatus_code":"P","IsActiveEntity":true,"HasActiveEntity":false,"HasDraftEntity":false}]}
		   echo 'Y' | apt-get install jq
		   
		   notification_id=`jq '.value[1].ID' notifications.json`
		   notification_id=`echo $notification_id | xargs`
		   
		   curl -X POST -H "Authorization: Bearer access_token" -H "Content-Type: application/json" -d @req_draft_edit.json 'https://referenceappscf-cicd-s4ext-businesspartnervalidation-srv.cfapps.eu10.hana.ondemand.com/sales/Notifications(ID='"$notification_id"',IsActiveEntity=true)/service.businessPartnerValidation.SalesService.draftEdit?$select=HasActiveEntity,HasDraftEntity,ID,IsActiveEntity,businessPartnerId,businessPartnerName,verificationStatus_code&$expand=DraftAdministrativeData($select=DraftUUID,InProcessByUser),verificationStatus($select=code,updateCode)'
		   '''*/
	     }
	   stage('Redeploy'){
		   
		   sh '''
	  		    rm -rf cloud-cap-s4ems-bp
			    
				###git clone https://329b7ba64125b54b25d22bbef289517c552e6454@github.tools.sap/I334088/cloud-cap-s4ems-bp.git -b latest
			      git -c http.sslVerify=false clone https://github.tools.sap/refapps/cloud-cap-s4ems-bp.git --branch pipeline 
				cd cloud-cap-s4ems-bp
			    mv ./build/xs-security.json xs-security.json
			    mbt build -p=cf
			    cd mta_archives
			    ls
			    cf login -u $pusername -p $puserpwd -a https://api.cf.eu10.hana.ondemand.com -o referenceappscf -s CICD_s4ext
			    echo 'y' | cf undeploy BusinessPartnerValidation
    			    echo 'y' | cf deploy BusinessPartnerValidation_1.0.0.mtar
			    '''
	     } 
 	   stage('UI Test'){
		   
		  	build job: 'customlogicS4_demoscript'
		   
	     }
	   stage('Undeploy'){
		   sh'''
		   cf delete BusinessPartnerValidation-srv-mocks -f
		   echo 'y' | cf undeploy BusinessPartnerValidation
		   '''
	     }
}
} 
