const env = {
    "VCAP_SERVICES": {
        "application-logs": [
            {
                "binding_guid": "0be48de6-3501-445c-9fdc-99f707a48d31",
                "binding_name": null,
                "credentials": {
                    "metrics_collector_client_id": "0be48de6-3501-445c-9fdc-99f707a48d31",
                    "metrics_collector_client_secret": "NjZhZGFlMDgtOTdkNS00YThhLWI1YjItNDA2MTI0NzlkMDJhL0J1c2luZXNzUGFydG5lclZhbGlkYXRpb24tc3J2L2JhM2ZkZTAwLWJhNzQtNDI2My04OGJhLWY1NmRiYTMzYmZhYi9kZXYvMDdmZmRjYTMtNmFmMS00MzRlLTg1OWQtODJkNzhjN2JjMDk1L3BlcmYtdGVzdC8wNWMyYzY0Ny1lYjYwLTQwYjQtYjhiYi02NTEyYTBlZmQ2NjIvYXBwbGljYXRpb24tbG9ncy8zZTQ2NmZjNi04MzNlLTQzMGEtYTVhMS1iOWFhMjMxOTUwYzgvbGl0ZS82OTIwODJiZS0zYzFiLTRjNGQtYjdlMi00MmFmNzExOTgxOTQvQnVzaW5lc3NQYXJ0bmVyVmFsaWRhdGlvbi1sb2dzL2NhNTIzNzZhZDM1YjE4ZWRhNjI0YTdiZDA5MTRkNzI2ZTdmYTRkNDZlMTM5ZDk2YWY3OWQ3MThiMDRiZTQzMDQ",
                    "metrics_collector_url": "https://metrics-collector.cf.sap.hana.ondemand.com/"
                },
                "instance_guid": "692082be-3c1b-4c4d-b7e2-42af71198194",
                "instance_name": "BusinessPartnerValidation-logs",
                "label": "application-logs",
                "name": "BusinessPartnerValidation-logs",
                "plan": "lite",
                "provider": null,
                "syslog_drain_url": null,
                "tags": [],
                "volume_mounts": []
            }
        ],
        "connectivity": [
            {
                "binding_guid": "65663714-320f-4550-bafc-d1c0498466cb",
                "binding_name": null,
                "credentials": {
                    "clientid": "sb-clonec21f49b089bc43ccaa537e244f866740!b16994|connectivity!b137",
                    "clientsecret": "65663714-320f-4550-bafc-d1c0498466cb$MgsN_ZegZpfWw0XRsOwkgVZv3ez13shQoQfoThI_5Uo=",
                    "identityzone": "perf-test",
                    "onpremise_proxy_host": "connectivityproxy.internal.cf.sap.hana.ondemand.com",
                    "onpremise_proxy_http_port": "20003",
                    "onpremise_proxy_ldap_port": "20001",
                    "onpremise_proxy_port": "20003",
                    "onpremise_proxy_rfc_port": "20001",
                    "onpremise_socks5_proxy_port": "20004",
                    "tenantid": "32d0fa5b-5be6-4d55-8ce9-b54e970c78ca",
                    "tenantmode": "dedicated",
                    "token_service_domain": "authentication.sap.hana.ondemand.com",
                    "token_service_url": "https://perf-test.authentication.sap.hana.ondemand.com",
                    "uaadomain": "authentication.sap.hana.ondemand.com",
                    "url": "https://perf-test.authentication.sap.hana.ondemand.com",
                    "verificationkey": "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7TM7MpsPUhqdW5NRXXS5bA6+OPkUMvTBhNg0c5tMMwi/6Ujb19prJFGSE9ie+wM6VWS3Jrf74/hl6di9MmgDomwIQp2ylgq8L8HZYPSH7WUUR+4lZ13uffQBDVHE41AkgYxXYrb1tzaspr/VeLKAiLRKNPPbMHCxmkeLvuJk2x7qpiWjAr1qVuKV9CPR1bB9xjET2VwD9DcBFW6h5ZXui2fEVRBblI1b/5zWRjBd6Be4a6X+JrnaUroSOJYezl7vAtChZCItZS5dhUni/HFOmulC2UlklVWaQrt9feUuydf6uxbt3JcUMaxEsjBgw3msceyi7lvmQeejPBfVrcrhsQIDAQAB-----END PUBLIC KEY-----",
                    "xsappname": "clonec21f49b089bc43ccaa537e244f866740!b16994|connectivity!b137"
                },
                "instance_guid": "c21f49b0-89bc-43cc-aa53-7e244f866740",
                "instance_name": "BusinessPartnerValidation-cs",
                "label": "connectivity",
                "name": "BusinessPartnerValidation-cs",
                "plan": "lite",
                "provider": null,
                "syslog_drain_url": null,
                "tags": [
                    "connectivity",
                    "conn",
                    "connsvc"
                ],
                "volume_mounts": []
            }
        ],
        "destination": [
            {
                "binding_guid": "f6cb9518-99ec-49b7-8da3-5c5e272eb31a",
                "binding_name": null,
                "credentials": {
                    "clientid": "sb-clonee78986ea8f6c4f78922b6ac1ec52aa4c!b16994|destination-xsappname!b433",
                    "clientsecret": "f6cb9518-99ec-49b7-8da3-5c5e272eb31a$xBPOgxqXA4j5Z6vVk-9QAKrf6BO_y8haZoZ7uENvjPg=",
                    "identityzone": "perf-test",
                    "instanceid": "e78986ea-8f6c-4f78-922b-6ac1ec52aa4c",
                    "tenantid": "32d0fa5b-5be6-4d55-8ce9-b54e970c78ca",
                    "tenantmode": "dedicated",
                    "uaadomain": "authentication.sap.hana.ondemand.com",
                    "uri": "https://destination-configuration.cfapps.sap.hana.ondemand.com",
                    "url": "https://perf-test.authentication.sap.hana.ondemand.com",
                    "verificationkey": "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7TM7MpsPUhqdW5NRXXS5bA6+OPkUMvTBhNg0c5tMMwi/6Ujb19prJFGSE9ie+wM6VWS3Jrf74/hl6di9MmgDomwIQp2ylgq8L8HZYPSH7WUUR+4lZ13uffQBDVHE41AkgYxXYrb1tzaspr/VeLKAiLRKNPPbMHCxmkeLvuJk2x7qpiWjAr1qVuKV9CPR1bB9xjET2VwD9DcBFW6h5ZXui2fEVRBblI1b/5zWRjBd6Be4a6X+JrnaUroSOJYezl7vAtChZCItZS5dhUni/HFOmulC2UlklVWaQrt9feUuydf6uxbt3JcUMaxEsjBgw3msceyi7lvmQeejPBfVrcrhsQIDAQAB-----END PUBLIC KEY-----",
                    "xsappname": "clonee78986ea8f6c4f78922b6ac1ec52aa4c!b16994|destination-xsappname!b433"
                },
                "instance_guid": "e78986ea-8f6c-4f78-922b-6ac1ec52aa4c",
                "instance_name": "BusinessPartnerValidation-dest",
                "label": "destination",
                "name": "BusinessPartnerValidation-dest",
                "plan": "lite",
                "provider": null,
                "syslog_drain_url": null,
                "tags": [
                    "destination",
                    "conn",
                    "connsvc"
                ],
                "volume_mounts": []
            }
        ],
        "enterprise-messaging": [
            {
                "binding_guid": "54bd4c6c-6862-4ef1-8300-706b17bc6901",
                "binding_name": null,
                "credentials": {
                    "management": [
                        {
                            "oa2": {
                                "clientid": "sb-default-dfc9ed86-9ac4-4801-814b-05bddacc4f9e-clone!b16994|xbem-service-broker-!b1010",
                                "clientsecret": "54bd4c6c-6862-4ef1-8300-706b17bc6901$_Q_SWpdAqqIBNFT6TUwwhkoSJSnbDxW0aCoC5yFDOXI=",
                                "granttype": "client_credentials",
                                "tokenendpoint": "https://perf-test.authentication.sap.hana.ondemand.com/oauth/token"
                            },
                            "uri": "https://enterprise-messaging-hub-backend.cfapps.sap.hana.ondemand.com"
                        }
                    ],
                    "messaging": [
                        {
                            "broker": {
                                "type": "sapmgw"
                            },
                            "oa2": {
                                "clientid": "sb-default-dfc9ed86-9ac4-4801-814b-05bddacc4f9e-clone!b16994|xbem-service-broker-!b1010",
                                "clientsecret": "54bd4c6c-6862-4ef1-8300-706b17bc6901$_Q_SWpdAqqIBNFT6TUwwhkoSJSnbDxW0aCoC5yFDOXI=",
                                "granttype": "client_credentials",
                                "tokenendpoint": "https://perf-test.authentication.sap.hana.ondemand.com/oauth/token"
                            },
                            "protocol": [
                                "amqp10ws"
                            ],
                            "uri": "wss://enterprise-messaging-messaging-gateway.cfapps.sap.hana.ondemand.com/protocols/amqp10ws"
                        },
                        {
                            "broker": {
                                "type": "sapmgw"
                            },
                            "oa2": {
                                "clientid": "sb-default-dfc9ed86-9ac4-4801-814b-05bddacc4f9e-clone!b16994|xbem-service-broker-!b1010",
                                "clientsecret": "54bd4c6c-6862-4ef1-8300-706b17bc6901$_Q_SWpdAqqIBNFT6TUwwhkoSJSnbDxW0aCoC5yFDOXI=",
                                "granttype": "client_credentials",
                                "tokenendpoint": "https://perf-test.authentication.sap.hana.ondemand.com/oauth/token"
                            },
                            "protocol": [
                                "mqtt311ws"
                            ],
                            "uri": "wss://enterprise-messaging-messaging-gateway.cfapps.sap.hana.ondemand.com/protocols/mqtt311ws"
                        },
                        {
                            "broker": {
                                "type": "saprestmgw"
                            },
                            "oa2": {
                                "clientid": "sb-default-dfc9ed86-9ac4-4801-814b-05bddacc4f9e-clone!b16994|xbem-service-broker-!b1010",
                                "clientsecret": "54bd4c6c-6862-4ef1-8300-706b17bc6901$_Q_SWpdAqqIBNFT6TUwwhkoSJSnbDxW0aCoC5yFDOXI=",
                                "granttype": "client_credentials",
                                "tokenendpoint": "https://perf-test.authentication.sap.hana.ondemand.com/oauth/token"
                            },
                            "protocol": [
                                "httprest"
                            ],
                            "uri": "https://enterprise-messaging-pubsub.cfapps.sap.hana.ondemand.com"
                        }
                    ],
                    "namespace": "refapps/bpems/abc",
                    "serviceinstanceid": "dfc9ed86-9ac4-4801-814b-05bddacc4f9e",
                    "xsappname": "default-dfc9ed86-9ac4-4801-814b-05bddacc4f9e-clone!b16994|xbem-service-broker-!b1010"
                },
                "instance_guid": "dfc9ed86-9ac4-4801-814b-05bddacc4f9e",
                "instance_name": "BusinessPartnerValidation-ems",
                "label": "enterprise-messaging",
                "name": "BusinessPartnerValidation-ems",
                "plan": "default",
                "provider": null,
                "syslog_drain_url": null,
                "tags": [
                    "enterprise-messaging"
                ],
                "volume_mounts": []
            }
        ],
        "hana": [
            {
                "binding_guid": "253bef58-b531-4a1d-993b-8d0713b29fdc",
                "binding_name": null,
                "credentials": {
                    "certificate": "-----BEGIN CERTIFICATE-----\nMIIDrzCCApegAwIBAgIQCDvgVpBCRrGhdWrJWZHHSjANBgkqhkiG9w0BAQUFADBh\nMQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3\nd3cuZGlnaWNlcnQuY29tMSAwHgYDVQQDExdEaWdpQ2VydCBHbG9iYWwgUm9vdCBD\nQTAeFw0wNjExMTAwMDAwMDBaFw0zMTExMTAwMDAwMDBaMGExCzAJBgNVBAYTAlVT\nMRUwEwYDVQQKEwxEaWdpQ2VydCBJbmMxGTAXBgNVBAsTEHd3dy5kaWdpY2VydC5j\nb20xIDAeBgNVBAMTF0RpZ2lDZXJ0IEdsb2JhbCBSb290IENBMIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEA4jvhEXLeqKTTo1eqUKKPC3eQyaKl7hLOllsB\nCSDMAZOnTjC3U/dDxGkAV53ijSLdhwZAAIEJzs4bg7/fzTtxRuLWZscFs3YnFo97\nnh6Vfe63SKMI2tavegw5BmV/Sl0fvBf4q77uKNd0f3p4mVmFaG5cIzJLv07A6Fpt\n43C/dxC//AH2hdmoRBBYMql1GNXRor5H4idq9Joz+EkIYIvUX7Q6hL+hqkpMfT7P\nT19sdl6gSzeRntwi5m3OFBqOasv+zbMUZBfHWymeMr/y7vrTC0LUq7dBMtoM1O/4\ngdW7jVg/tRvoSSiicNoxBN33shbyTApOB6jtSj1etX+jkMOvJwIDAQABo2MwYTAO\nBgNVHQ8BAf8EBAMCAYYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUA95QNVbR\nTLtm8KPiGxvDl7I90VUwHwYDVR0jBBgwFoAUA95QNVbRTLtm8KPiGxvDl7I90VUw\nDQYJKoZIhvcNAQEFBQADggEBAMucN6pIExIK+t1EnE9SsPTfrgT1eXkIoyQY/Esr\nhMAtudXH/vTBH1jLuG2cenTnmCmrEbXjcKChzUyImZOMkXDiqw8cvpOp/2PV5Adg\n06O/nVsJ8dWO41P0jmP6P6fbtGbfYmbW0W5BjfIttep3Sp+dWOIrWcBAI+0tKIJF\nPnlUkiaY4IBIqDfv8NZ5YBberOgOzW6sRBc4L0na4UU+Krk2U886UAb3LujEV0ls\nYSEY1QSteDwsOoBrp+uvFRTp2InBuThs4pFsiv9kuXclVzDAGySj4dzp30d8tbQk\nCAUw7C29C79Fv1C5qfPrmAESrciIxpg0X40KPMbp1ZWVbd4=\n-----END CERTIFICATE-----",
                    "driver": "com.sap.db.jdbc.Driver",
                    "hdi_password": "Nq3r0wmnIGhsyBbwIVG-vrVgiY57cL9Zy_WlG43wOjAWdddJqvYaumJkC-A.D1jtPOsPI-HbHkbqgZxbdlWkry7k4vMxPypkuiIUIlA_QOzTZjHLPV1WLwe8vNGJplcy",
                    "hdi_user": "B57B5EBDF6F3456F9F7272D0615891B7_EURTUC5FXS1LII1VAGBHKQ30J_DT",
                    "host": "62926e44-5429-49b1-bd37-718e02122d64.hana.canary-eu10.hanacloud.ondemand.com",
                    "password": "Af34YA_o_S7yURfsrtnPyJAGPtHasN8tXmIKabV14BRpgW8XjXnZuqQ-zkAcbDzYT45rRrtSKYqXhT2YTq-QcYjgYZrWkb6i-yo3O8qa_aH0qtGWspwKTjww9Fu33fqa",
                    "port": "443",
                    "schema": "B57B5EBDF6F3456F9F7272D0615891B7",
                    "url": "jdbc:sap://62926e44-5429-49b1-bd37-718e02122d64.hana.canary-eu10.hanacloud.ondemand.com:443?encrypt=true\u0026validateCertificate=true\u0026currentschema=B57B5EBDF6F3456F9F7272D0615891B7",
                    "user": "B57B5EBDF6F3456F9F7272D0615891B7_EURTUC5FXS1LII1VAGBHKQ30J_RT"
                },
                "instance_guid": "abb76430-6ceb-4077-ab21-4e2f9e43102e",
                "instance_name": "BusinessPartnerValidation-db",
                "label": "hana",
                "name": "BusinessPartnerValidation-db",
                "plan": "hdi-shared",
                "provider": null,
                "syslog_drain_url": null,
                "tags": [
                    "hana",
                    "database",
                    "relational"
                ],
                "volume_mounts": []
            }
        ],
        "xsuaa": [
            {
                "binding_guid": "1b90e0fd-834c-45d6-8a24-74edc14bd374",
                "binding_name": null,
                "credentials": {
                    "apiurl": "https://api.authentication.sap.hana.ondemand.com",
                    "clientid": "sb-BusinessPartnerValidation!t16994",
                    "clientsecret": "TJSIBSAC4Y9i9b/eUsqKg1ez0dw=",
                    "identityzone": "perf-test",
                    "identityzoneid": "32d0fa5b-5be6-4d55-8ce9-b54e970c78ca",
                    "sburl": "https://internal-xsuaa.authentication.sap.hana.ondemand.com",
                    "subaccountid": "32d0fa5b-5be6-4d55-8ce9-b54e970c78ca",
                    "tenantid": "32d0fa5b-5be6-4d55-8ce9-b54e970c78ca",
                    "tenantmode": "dedicated",
                    "uaadomain": "authentication.sap.hana.ondemand.com",
                    "url": "https://perf-test.authentication.sap.hana.ondemand.com",
                    "verificationkey": "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7TM7MpsPUhqdW5NRXXS5bA6+OPkUMvTBhNg0c5tMMwi/6Ujb19prJFGSE9ie+wM6VWS3Jrf74/hl6di9MmgDomwIQp2ylgq8L8HZYPSH7WUUR+4lZ13uffQBDVHE41AkgYxXYrb1tzaspr/VeLKAiLRKNPPbMHCxmkeLvuJk2x7qpiWjAr1qVuKV9CPR1bB9xjET2VwD9DcBFW6h5ZXui2fEVRBblI1b/5zWRjBd6Be4a6X+JrnaUroSOJYezl7vAtChZCItZS5dhUni/HFOmulC2UlklVWaQrt9feUuydf6uxbt3JcUMaxEsjBgw3msceyi7lvmQeejPBfVrcrhsQIDAQAB-----END PUBLIC KEY-----",
                    "xsappname": "BusinessPartnerValidation!t16994",
                    "zoneid": "32d0fa5b-5be6-4d55-8ce9-b54e970c78ca"
                },
                "instance_guid": "9a0e2550-2377-4afd-97f1-a133eff3bb0d",
                "instance_name": "BusinessPartnerValidation-xsuaa",
                "label": "xsuaa",
                "name": "BusinessPartnerValidation-xsuaa",
                "plan": "application",
                "provider": null,
                "syslog_drain_url": null,
                "tags": [
                    "xsuaa"
                ],
                "volume_mounts": []
            }
        ]
    }
};

const appenv = {
    "VCAP_APPLICATION": {
        "application_id": "66adae08-97d5-4a8a-b5b2-40612479d02a",
        "application_name": "BusinessPartnerValidation-srv",
        "application_uris": [
            "businesspartnervalidation-srv.cfapps.sap.hana.ondemand.com"
        ],
        "application_version": "554e87ef-e2ee-40c4-9672-d13f87f163a4",
        "cf_api": "https://api.cf.sap.hana.ondemand.com",
        "limits": {
            "disk": 1024,
            "fds": 32768,
            "mem": 256
        },
        "name": "BusinessPartnerValidation-srv",
        "organization_id": "07ffdca3-6af1-434e-859d-82d78c7bc095",
        "organization_name": "perf-test",
        "process_id": "66adae08-97d5-4a8a-b5b2-40612479d02a",
        "process_type": "web",
        "space_id": "ba3fde00-ba74-4263-88ba-f56dba33bfab",
        "space_name": "dev",
        "uris": [
            "businesspartnervalidation-srv.cfapps.sap.hana.ondemand.com"
        ],
        "users": null,
        "version": "554e87ef-e2ee-40c4-9672-d13f87f163a4"
    }
};

module.exports = {
    system_env_json: env,
    application_env_json: appenv,
};
