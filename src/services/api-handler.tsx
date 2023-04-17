import axios from "axios";

export interface Payload {
  [key: string]: string;
}

export interface ApiResponse {
  [key: string]: string;
}

const BASE_URL= 'https://breeding-service-sduc.onrender.com';

class ApiHandler {
  apiHandler: any;
  constructor() {
    this.apiHandler = axios.create({
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    this.apiHandler.defaults.baseURL = BASE_URL;

    this.processResponse();
  }

  private processResponse() {
    this.apiHandler.interceptors.response.use(
      function (response: ApiResponse) {
        console.log('api response', response)
        return Object.freeze(response);
      },
      function (error: any) {
        console.log('api error', error)
        let res = error.response;
        if (res.status == 401) {
          window.location.href = "./login";
        }
        console.error(
          "Looks like there was a problem. Status Code: " + res.status
        );
        return Promise.reject(error);
      }
    );
  }
  getRequest(url: string, payload: Payload) {
    return this.apiHandler
      .get(`${BASE_URL}/${url}`, payload)
  }

  postRequest(url: string, payload: Payload) {
    return this.apiHandler
      .post(`/${url}`, payload)
  }

  patchRequest(url: string, payload: Payload) {
    return this.apiHandler
      .patch(`/${url}`, payload)
  }

  deleteRequest(url: string) {
    return this.apiHandler.delete(`/${url}`);
  }
}

const apiHandler = new ApiHandler();

export default apiHandler;
