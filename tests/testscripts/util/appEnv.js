const env = {
	"VCAP_SERVICES": {
		"connectivity": [
			{
				"label": "connectivity",
				"provider": null,
				"plan": "lite",
				"name": "BusinessPartnerValidation-cs",
				"tags": [
					"connectivity",
					"conn",
					"connsvc"
				],
				"instance_guid": "bee37b3a-11ee-4f81-8104-6e0e3d2d5f51",
				"instance_name": "BusinessPartnerValidation-cs",
				"binding_guid": "af1ae0f3-f0b7-47d5-a8d4-12ad28b9a5a3",
				"binding_name": null,
				"credentials": {
					"tenantmode": "dedicated",
					"clientid": "sb-clonebee37b3a11ee4f8181046e0e3d2d5f51!b97900|connectivity!b17",
					"token_service_domain": "authentication.eu10.hana.ondemand.com",
					"credential-type": "binding-secret",
					"token_service_url": "https://refapps-cicd.authentication.eu10.hana.ondemand.com",
					"xsappname": "clonebee37b3a11ee4f8181046e0e3d2d5f51!b97900|connectivity!b17",
					"onpremise_proxy_ldap_port": "20001",
					"onpremise_socks5_proxy_port": "20004",
					"clientsecret": "af1ae0f3-f0b7-47d5-a8d4-12ad28b9a5a3$yJHN3vveaSyoGgzKRCT7Cd4FKM88tOgq51xkUXLD2YU=",
					"onpremise_proxy_http_port": "20003",
					"url": "https://refapps-cicd.authentication.eu10.hana.ondemand.com",
					"onpremise_proxy_host": "connectivityproxy.internal.cf.eu10.hana.ondemand.com",
					"uaadomain": "authentication.eu10.hana.ondemand.com",
					"onpremise_proxy_port": "20003",
					"verificationkey": "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAo4tiamxshuqI1bW+M60ypySZ4hBbd1wzGPVRQZTrqX93Oo2sE3to3YKrvTkcK+IQn6GhXDVvIWVQf87YhMryhRd6ddXJJYDJTCUL7ZPaecKfOejdkVB5L1lpYjheBUCTnYuuzjfVIMANLBzX4eWakePGwbC3b8YpI9hCowVgY+PvpC4WjwwcWVufkxlZ+w4l4qXB34h4EpMkKw5Dtnbll/yn4tAaAbyYkuNVTnB4VNnGD4mybdeFtWCH6WxOttdq9wyVa34xbgLDi8ioXFRBM3ehySJFmLG3EOt3mQyneOSoOl0RtnpFN1+ONxkcNfMaBxgILZzmBm2K3/e+4fJwrQIDAQAB-----END PUBLIC KEY-----",
					"identityzone": "refapps-cicd",
					"tenantid": "78b5ab88-ad6e-4f73-8318-e8b8fecd27bc",
					"onpremise_proxy_rfc_port": "20001"
				},
				"syslog_drain_url": null,
				"volume_mounts": []
			}
		],
		"hana": [
			{
				"label": "hana",
				"provider": null,
				"plan": "hdi-shared",
				"name": "BusinessPartnerValidation-db",
				"tags": [
					"hana",
					"database",
					"relational"
				],
				"instance_guid": "ef6a1df2-26ed-4bab-b83f-9adbbcf1aa44",
				"instance_name": "BusinessPartnerValidation-db",
				"binding_guid": "ead9bd0d-8ac7-4edb-a99f-76ec5d34c488",
				"binding_name": null,
				"credentials": {
					"host": "97d3bef4-9506-4134-9c7c-9c4cbeabd4f3.hana.prod-eu10.hanacloud.ondemand.com",
					"port": "443",
					"driver": "com.sap.db.jdbc.Driver",
					"url": "jdbc:sap://97d3bef4-9506-4134-9c7c-9c4cbeabd4f3.hana.prod-eu10.hanacloud.ondemand.com:443?encrypt=true&validateCertificate=true&currentschema=86179428659E44B89602D65A85A7AC11",
					"schema": "86179428659E44B89602D65A85A7AC11",
					"hdi_user": "86179428659E44B89602D65A85A7AC11_9P7XI94XT549LE645VVY3OECE_DT",
					"hdi_password": "Zi6KqfZeaFJwXgEymNs-3-bGCXFeFjkypoVfAvJrMO3pTAiDVzJECB4PbFf1inhgnHj2r7SPGMHraPRQeFC.ywVuEMkqebHKoaWZlfbkp3vfMewyVGVA7LBk5Je4tzOe",
					"user": "86179428659E44B89602D65A85A7AC11_9P7XI94XT549LE645VVY3OECE_RT",
					"password": "Gl1g9pwLbCyuDOjW9a94RElceS-4EEOCibFuR3iZSPKCEVHwUTifLeVKvtllVBEufItq6u8OTKOljhIqtsWCav8SoU2CwqYcLdaxcbQAAgBuyLQ4QIJfr7m335ZdvHLX",
					"certificate": "-----BEGIN CERTIFICATE-----\nMIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBh\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\nd3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD\nQTAeFw0wNjExMTAwMDAwMDBaFw0zMTExMTAwMDAwMDBaMGExCzAJBgNVBAYTAlVT\nMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdpY2VydC5j\nb20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IENBMIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4jvhEXLeqKTTo1eqUKKPC3eQyaKl7hLOllsB\nCSDMAZOnTjC3U/dDxGkAV53ijSLdhwZAAIEJzs4bg7/fzTtxRuLWZscFs3YnFo97\nnh6Vfe63SKMI2tavegw5BmV/Sl0fvBf4q77uKNd0f3p4mVmFaG5cIzJLv07A6Fpt\n43C/dxC//AH2hdmoRBBYMql1GNXRor5H4idq9Joz+EkIYIvUX7Q6hL+hqkpMfT7P\nT19sdl6gSzeRntwi5m3OFBqOasv+zbMUZBfHWymeMr/y7vrTC0LUq7dBMtoM1O/4\ngdW7jVg/tRvoSSiicNoxBN33shbyTApOB6jtSj1etX+jkMOvJwIDAQABo2MwYTAO\nBgNVHQ8BAf8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUA95QNVbR\nTLtm8KPiGxvDl7I90VUwHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUw\nDQYJKoZIhvcNAQEFBQADggEBAMucN6pIExIK+t1EnE9SsPTfrgT1eXkIoyQY/Esr\nhMAtudXH/vTBH1jLuG2cenTnmCmrEbXjcKChzUyImZOMkXDiqw8cvpOp/2PV5Adg\n06O/nVsJ8dWO41P0jmP6P6fbtGbfYmbW0W5BjfIttep3Sp+dWOIrWcBAI+0tKIJF\nPnlUkiaY4IBIqDfv8NZ5YBberOgOzW6sRBc4L0na4UU+Krk2U886UAb3LujEV0ls\nYSEY1QSteDwsOoBrp+uvFRTp2InBuThs4pFsiv9kuXclVzDAGySj4dzp30d8tbQk\nCAUw7C29C79Fv1C5qfPrmAESrciIxpg0X40KPMbp1ZWVbd4=\n-----END CERTIFICATE-----"
				},
				"syslog_drain_url": null,
				"volume_mounts": []
			}
		],
		"enterprise-messaging": [
			{
				"label": "enterprise-messaging",
				"provider": null,
				"plan": "default",
				"name": "BusinessPartnerValidation-ems",
				"tags": [
					"enterprise-messaging"
				],
				"instance_guid": "7477ae17-7ee1-4b09-82cd-6583ec6f5d91",
				"instance_name": "BusinessPartnerValidation-ems",
				"binding_guid": "bdca8386-d1ad-4452-b2d1-94950809b008",
				"binding_name": null,
				"credentials": {
					"uaa": {
						"credential-type": "binding-secret",
						"clientid": "sb-default-7477ae17-7ee1-4b09-82cd-6583ec6f5d91-clone!b97900|xbem-service-broker-!b2436",
						"clientsecret": "bdca8386-d1ad-4452-b2d1-94950809b008$PGyye0Q9BjH1p5ylCSeMqxoDFt4pIiqbMvdNGlZexxU=",
						"xsappname": "default-7477ae17-7ee1-4b09-82cd-6583ec6f5d91-clone!b97900|xbem-service-broker-!b2436",
						"url": "https://refapps-cicd.authentication.eu10.hana.ondemand.com"
					},
					"xsappname": "default-7477ae17-7ee1-4b09-82cd-6583ec6f5d91-clone!b97900|xbem-service-broker-!b2436",
					"management": [
						{
							"oa2": {
								"clientid": "sb-default-7477ae17-7ee1-4b09-82cd-6583ec6f5d91-clone!b97900|xbem-service-broker-!b2436",
								"clientsecret": "bdca8386-d1ad-4452-b2d1-94950809b008$PGyye0Q9BjH1p5ylCSeMqxoDFt4pIiqbMvdNGlZexxU=",
								"tokenendpoint": "https://refapps-cicd.authentication.eu10.hana.ondemand.com/oauth/token",
								"granttype": "client_credentials"
							},
							"uri": "https://enterprise-messaging-hub-backend.cfapps.eu10.hana.ondemand.com"
						}
					],
					"namespace": "refapps/bpems/abc",
					"serviceinstanceid": "7477ae17-7ee1-4b09-82cd-6583ec6f5d91",
					"messaging": [
						{
							"oa2": {
								"clientid": "sb-default-7477ae17-7ee1-4b09-82cd-6583ec6f5d91-clone!b97900|xbem-service-broker-!b2436",
								"clientsecret": "bdca8386-d1ad-4452-b2d1-94950809b008$PGyye0Q9BjH1p5ylCSeMqxoDFt4pIiqbMvdNGlZexxU=",
								"tokenendpoint": "https://refapps-cicd.authentication.eu10.hana.ondemand.com/oauth/token",
								"granttype": "client_credentials"
							},
							"protocol": [
								"amqp10ws"
							],
							"broker": {
								"type": "sapmgw"
							},
							"uri": "wss://enterprise-messaging-messaging-gateway.cfapps.eu10.hana.ondemand.com/protocols/amqp10ws"
						},
						{
							"oa2": {
								"clientid": "sb-default-7477ae17-7ee1-4b09-82cd-6583ec6f5d91-clone!b97900|xbem-service-broker-!b2436",
								"clientsecret": "bdca8386-d1ad-4452-b2d1-94950809b008$PGyye0Q9BjH1p5ylCSeMqxoDFt4pIiqbMvdNGlZexxU=",
								"tokenendpoint": "https://refapps-cicd.authentication.eu10.hana.ondemand.com/oauth/token",
								"granttype": "client_credentials"
							},
							"protocol": [
								"mqtt311ws"
							],
							"broker": {
								"type": "sapmgw"
							},
							"uri": "wss://enterprise-messaging-messaging-gateway.cfapps.eu10.hana.ondemand.com/protocols/mqtt311ws"
						},
						{
							"oa2": {
								"clientid": "sb-default-7477ae17-7ee1-4b09-82cd-6583ec6f5d91-clone!b97900|xbem-service-broker-!b2436",
								"clientsecret": "bdca8386-d1ad-4452-b2d1-94950809b008$PGyye0Q9BjH1p5ylCSeMqxoDFt4pIiqbMvdNGlZexxU=",
								"tokenendpoint": "https://refapps-cicd.authentication.eu10.hana.ondemand.com/oauth/token",
								"granttype": "client_credentials"
							},
							"protocol": [
								"httprest"
							],
							"broker": {
								"type": "saprestmgw"
							},
							"uri": "https://enterprise-messaging-pubsub.cfapps.eu10.hana.ondemand.com"
						}
					]
				},
				"syslog_drain_url": null,
				"volume_mounts": []
			}
		],
		"destination": [
			{
				"label": "destination",
				"provider": null,
				"plan": "lite",
				"name": "BusinessPartnerValidation-dest",
				"tags": [
					"destination",
					"conn",
					"connsvc"
				],
				"instance_guid": "1e4e9027-f96e-4560-a468-da15bf337f6a",
				"instance_name": "BusinessPartnerValidation-dest",
				"binding_guid": "50326902-0b3d-4b98-92a5-8be94aab9b00",
				"binding_name": null,
				"credentials": {
					"tenantmode": "dedicated",
					"clientid": "sb-clone1e4e9027f96e4560a468da15bf337f6a!b97900|destination-xsappname!b404",
					"credential-type": "binding-secret",
					"xsappname": "clone1e4e9027f96e4560a468da15bf337f6a!b97900|destination-xsappname!b404",
					"clientsecret": "50326902-0b3d-4b98-92a5-8be94aab9b00$Qqbw348YHaJaSi9p8Sd_mcu4lNLGEd4XkhwMNflGs3s=",
					"uri": "https://destination-configuration.cfapps.eu10.hana.ondemand.com",
					"url": "https://refapps-cicd.authentication.eu10.hana.ondemand.com",
					"uaadomain": "authentication.eu10.hana.ondemand.com",
					"instanceid": "1e4e9027-f96e-4560-a468-da15bf337f6a",
					"verificationkey": "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAo4tiamxshuqI1bW+M60ypySZ4hBbd1wzGPVRQZTrqX93Oo2sE3to3YKrvTkcK+IQn6GhXDVvIWVQf87YhMryhRd6ddXJJYDJTCUL7ZPaecKfOejdkVB5L1lpYjheBUCTnYuuzjfVIMANLBzX4eWakePGwbC3b8YpI9hCowVgY+PvpC4WjwwcWVufkxlZ+w4l4qXB34h4EpMkKw5Dtnbll/yn4tAaAbyYkuNVTnB4VNnGD4mybdeFtWCH6WxOttdq9wyVa34xbgLDi8ioXFRBM3ehySJFmLG3EOt3mQyneOSoOl0RtnpFN1+ONxkcNfMaBxgILZzmBm2K3/e+4fJwrQIDAQAB-----END PUBLIC KEY-----",
					"identityzone": "refapps-cicd",
					"tenantid": "78b5ab88-ad6e-4f73-8318-e8b8fecd27bc"
				},
				"syslog_drain_url": null,
				"volume_mounts": []
			}
		],
		"xsuaa":  [
			{
				"label": "xsuaa",
				"provider": null,
				"plan": "application",
				"name": "BusinessPartnerValidation-xsuaa",
				"tags": [
					"xsuaa"
				],
				"instance_guid": "c095edc0-2539-4c88-9803-9de790547d9d",
				"instance_name": "BusinessPartnerValidation-xsuaa",
				"binding_guid": "fd365e0b-2088-4fbe-a5d9-ecee4cd3185d",
				"binding_name": null,
				"credentials": {
					"tenantmode": "dedicated",
					"sburl": "https://internal-xsuaa.authentication.eu10.hana.ondemand.com",
					"subaccountid": "78b5ab88-ad6e-4f73-8318-e8b8fecd27bc",
					"credential-type": "instance-secret",
					"clientid": "sb-BusinessPartnerValidation1!t97900",
					"xsappname": "BusinessPartnerValidation1!t97900",
					"clientsecret": "E8Tu7Y9jX9H8jAjl3IIPv1z/0ns=",
					"url": "https://refapps-cicd.authentication.eu10.hana.ondemand.com",
					"uaadomain": "authentication.eu10.hana.ondemand.com",
					"verificationkey": "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAo4tiamxshuqI1bW+M60ypySZ4hBbd1wzGPVRQZTrqX93Oo2sE3to3YKrvTkcK+IQn6GhXDVvIWVQf87YhMryhRd6ddXJJYDJTCUL7ZPaecKfOejdkVB5L1lpYjheBUCTnYuuzjfVIMANLBzX4eWakePGwbC3b8YpI9hCowVgY+PvpC4WjwwcWVufkxlZ+w4l4qXB34h4EpMkKw5Dtnbll/yn4tAaAbyYkuNVTnB4VNnGD4mybdeFtWCH6WxOttdq9wyVa34xbgLDi8ioXFRBM3ehySJFmLG3EOt3mQyneOSoOl0RtnpFN1+ONxkcNfMaBxgILZzmBm2K3/e+4fJwrQIDAQAB-----END PUBLIC KEY-----",
					"apiurl": "https://api.authentication.eu10.hana.ondemand.com",
					"identityzone": "refapps-cicd",
					"identityzoneid": "78b5ab88-ad6e-4f73-8318-e8b8fecd27bc",
					"tenantid": "78b5ab88-ad6e-4f73-8318-e8b8fecd27bc",
					"zoneid": "78b5ab88-ad6e-4f73-8318-e8b8fecd27bc"
				},
				"syslog_drain_url": null,
				"volume_mounts": []
			}
		]
	}
};

const appenv = {
	"VCAP_APPLICATION": {
		"cf_api": "https://api.cf.eu10.hana.ondemand.com",
		"limits": {
			"fds": 32768
		},
		"application_name": "BusinessPartnerValidation-srv",
		"application_uris": [
			"sa0176014160-refapps-cicd-cicd-s4ext-businesspartnerval32d7bab1.cfapps.eu10.hana.ondemand.com"
		],
		"name": "BusinessPartnerValidation-srv",
		"space_name": "CICD_s4ext",
		"space_id": "4b0716f3-1ad9-4289-a589-6a89648a5b24",
		"organization_id": "83ece2db-91c2-49b5-ad37-c6de73cd9ca8",
		"organization_name": "SA0176014160_refapps-cicd",
		"uris": [
			"sa0176014160-refapps-cicd-cicd-s4ext-businesspartnerval32d7bab1.cfapps.eu10.hana.ondemand.com"
		],
		"users": null,
		"application_id": "4105aad3-ae4e-4b40-ac75-c0fb2ebd45f1"
	}
};

module.exports = {
    system_env_json: env,
    application_env_json: appenv,
};