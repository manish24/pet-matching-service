import apiHandler from "./api-handler";

class LoginService {
  apiHandler: any;

  constructor() {
    this.apiHandler = apiHandler;
  }

  validateLogin(payload: { email: string | any; password: string | any}) {
      return this.apiHandler.getRequest('api/feature/client/email/Glen.Andrews60@gmail.com', payload);
  }
}


const loginService = new LoginService();

export default loginService;