import config from '../config';

export class TrackingService {
  constructor() {}

  async status() {
    return `hello world!!, ${config.env}`;
  }
}
