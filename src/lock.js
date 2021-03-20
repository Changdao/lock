import Connector from './connector';

export default class Lock {
  connectors = {};
  options = {};

  addConnector(connector) {
    this.connectors[connector.key] = connector.connector;
    this.options[connector.key] = connector.options;
  }

  getConnector(key) {
    const options = this.options[key];
    return new this.connectors[key](options);
  }
}
