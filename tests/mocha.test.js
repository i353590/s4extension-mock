// Payload for BP Creation, ensure it's unique 
var payload = {
     "BusinessPartner": "171000170",
    "BusinessPartnerIsBlocked": true,
    "BusinessPartnerFullName": "Black Magic"
};
  
const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('express');
const config = require("./testscripts/util/config");
let xsuaa_access_token;
let arr;
let BusinessPartner;
chai.use(chaiHttp);
chai.should();

const loadNotifications = require("./testscripts/loadNotifications");

describe("Get Access Token from XSUAA", ()=>{
  it("should fetch bearer token", (done)=>{
    let requestHeaders = { 'Content-Type': 'application/x-www-form-urlencoded' };
    chai.request(config.token_url).post("/oauth/token").set(requestHeaders).send(config.xsuaa)
    .end((err, response)=>{
      try{
        response.should.have.status(200);
        xsuaa_access_token = response.body.xsuaa_access_token;
        console.log(xsuaa_access_token);
        done();
      }catch(err){
        console.err(err);
        done(err);
      }
    });
  });
});

describe("Read Business partners", ()=>{
it("Should load notifications", (done)=>{
  loadNotifications.loadNotifications().then(data=>{
    data.should.have.status(200);
    done()
  });
});
});