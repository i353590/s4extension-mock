// Payload for BP Creation, ensure it's unique 
var payload = {
  "BusinessPartner": "171000205",
  "BusinessPartnerIsBlocked": true,
  "BusinessPartnerFullName": "Black Dog"
};

const chai = require('chai');
const chaiHttp = require('chai-http');
const config = require("./testscripts/util/config");
let xsuaa_access_token;
let arr;
let BPNotificationID;
chai.use(chaiHttp);
chai.should();
var expect = chai.expect;
describe("Get Access Token from XSUAA", () => {
  it("should fetch bearer token", (done) => {
    let requestHeaders = { 'Content-Type': 'application/x-www-form-urlencoded' };
    chai.request(config.token_url).post("/oauth/token").set(requestHeaders).send(config.xsuaa)
      .end((err, response) => {
        try {
          expect(response).to.be.a("Object");
          xsuaa_access_token = response.body.access_token;
          done();
        } catch (err) {
          console.error(err);
          done(err);
        }
      });
  });
});
describe("Read Business partners", () => {
  it("Should load notifications", (done) => {
    chai.request(config.service_domain).get("sales/Notifications?$top=1").set('Authorization', 'bearer ' + xsuaa_access_token).end((err, response) => {
      try {
        response.should.have.status(200);
        done();
      } catch (err) {
        console.error(err);
        done(err);
      }
    });
  });
});

describe("BP is created and Notification is recieved", () => {
  it("Should Create BP in mock application", (done) => {
    let header = {
      "Content-Type": "application/json"
    };
    chai.request(config.mock.url).post("api-business-partner/A_BusinessPartner").set(header).send(payload)
      .end((err, res) => {
        try {
          res.should.have.status(201);
          done();
        } catch (err) {
          console.error(err);
          done(err)
        }
      });
  });

});

describe("Load Created BP ", () => {
  it(`Load BP ${payload.BusinessPartner}`, (done) => {
    chai.request(config.service_domain).get("sales/Notifications").query(`$filter=(businessPartnerId eq '${payload.BusinessPartner}')`).set('Authorization', 'bearer ' + xsuaa_access_token).end((err, response) => {
      try {
        response.body.value.should.have.lengthOf(1);
        BPNotificationID = response.body.value[0].ID
        console.info(BPNotificationID);
        done();
      } catch (err) {
        console.error(err);
        done(err)
      }
    });
  });
});

