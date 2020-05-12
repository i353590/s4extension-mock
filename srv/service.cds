using my.businessPartnerValidation as my from '../db/schema';
using API_BUSINESS_PARTNER as BUPA_API from './external/API_BUSINESS_PARTNER';
 
service SalesService {
   @odata.draft.enabled
   entity Notification as projection on my.Notification  excluding { createdAt };
   entity Address as projection on my.Address;

  @readonly entity BusinessPartnerAddress as projection on BUPA_API.A_BusinessPartnerAddress{
     key BusinessPartner as businessPartnerId,
      AddressID as addressId,
      Country as country,
      CityName as cityName ,
      StreetName as streetName,
      PostalCode as postalCode
  };

  @readonly entity BusinessPartner as projection on BUPA_API.A_BusinessPartner{
     key BusinessPartner as businessPartnerId,
      BusinessPartnerFullName as businessPartnerName
  };

}


