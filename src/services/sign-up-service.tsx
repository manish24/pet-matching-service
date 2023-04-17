import apiHandler from "./api-handler";

class SignUpService {
  apiHandler: any;

  constructor() {
    this.apiHandler = apiHandler;
  }

  saveClientDetails(data: any) {
    const payload = this.preparePayload(data);
    return this.apiHandler.postRequest("client/registerClient", payload);
  }

  preparePayload(data: any) {
    return {
      password: data.get("password"),
      title: data.get("title"),
      prefix: data.get("title"),
      givenName: data.get("givenName"),
      middleName: data.get("middleName"),
      familyName: data.get("familyName"),
      emailAddresses: [
        {
          address: data.get("email"),
        },
      ],
      phoneNumbers: [
        {
          phoneTypeCode: "CLIENT_PHONE",
          number: data.get("number"),
          extension: "+1",
          ituNumber: "+1",
        },
      ],
      addresses: [
        {
          addressTypeCode: "SHIPPING",
          line1: data.get("line1"),
          line2: data.get("line2"),
          line3: data.get("line3"),
          city: data.get("city"),
          stateOrProvince: data.get("stateOrProvince"),
          postalCode: data.get("postalCode"),
          country: data.get("country"),
        },
      ],
    };
  }
}

const signUpService = new SignUpService();

export default signUpService;

// {
//     "version":"21",
//     "documentVersion": "1",
//     "clientEmailPracticeKey": "test228@gmail.com",
//     "title":"Mr",
//     "prefix": "Sir",
//     "givenName": "Antino",
//     "middleName": "Mari",
//     "familyName": "Carlos",
//     "emailAddresses":[
//     {
//         "emailAddressTypeCodes":["TRANSACTIONAL"],
//         "address":"Antino.XYZ@globallogic.com",
//         "isDeleted":false,
//         "createdDate": "2022-02-16T10:18:01.513+00:00",
//         "modifiedDate":""
//     }
//     ],
//     "preferredContactMethodCode":"PHONE",
//     "phoneNumbers":[ {
//         "phoneTypeCode": "CLIENT_PHONE",
//         "number": "(501)123455",
//         "extension": "+1",
//         "ituNumber": "+1",
//         "createdDate": "2022-02-16T10:18:01.513+00:00",
//         "modifiedDate": "2022-02-16T10:18:01.513+00:00",
//         "isDeleted": false,
//         "messaging": true
//         }
//     ],
//     "addresses":[
//     {
//         "addressTypeCode": "SHIPPING",
//         "line1": "4 2 0",
//         "line2": "Pata Nahi",
//         "line3": "",
//         "city": "Chicago",
//         "stateOrProvince": "IL",
//         "postalCode": "106467",
//         "country": "US",
//         "isDeleted": false,
//         "isAddressVerified": true,
//         "phoneExtension": "",
//         "phoneItuNumber": "",
//         "createdDate": "2023-03-23T11:35:50.751+00:00",
//         "modifiedDate" : "2023-03-23T11:35:50.751+00:00"
//     }
//     ],
//     "isActive": true,
//     "acceptsGenerics": false,
//     "dateOfBirth": "1992-10-02T10:00:00",
//     "originTypeCode": "Updated",
//     "createdDate": "2022-01-17T09:59:08.323+00:00",
//     "modifiedDate": "2022-02-16T10:18:01.953+00:00"
// }
