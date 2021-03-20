export default class Connector {
  options;

  constructor(options) {
    this.options = options;
  }

  async connect() {
    return;
  }

  logout() {
    return true;
  }

  async isLoggedIn(){
    return true;
  }
}
