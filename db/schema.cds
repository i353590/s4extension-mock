namespace my.businessPartnerValidation;
using { managed, cuid } from '@sap/cds/common';

entity Notification: managed, cuid {
    businessPartnerId: String;
    businessPartnerName: String;
  verificationStatus: Association to StatusValues;
  // @(
	// 	title: 'BusinessPartner Status',
	// 	Common: {
	// 		ValueList: {entity: 'StatusValues'},
	// 		ValueListWithFixedValues,
	// 		FieldControl: #Mandatory
	// 	});
  address: Composition of many Address on address.notification=$self;
  createdAt  : Timestamp @cds.on.insert : $now;
}

entity Address:  cuid {
  notification: Association to Notification;
  addressId:String;
  country:String;
  cityName:String;
  streetName: String;
  postalCode: String;
  isModified: Boolean default false;
  businessPartnerId: String;
}
@cds.autoexpose
entity StatusValues {
  key code: String ;
    value: String;
    criticality: Integer;
}

annotate Notification with {
  businessPartnerId @title:'BusinessPartner ID' @readonly;
  verificationStatus @title:'Verfication Status' @assert.enum;
  createdAt @title:'Creation Date' @readonly;
}