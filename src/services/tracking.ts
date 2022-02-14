import config from '../config';

export class TrackingService {
  private readonly userModel;

  constructor({ userModel }) {
    console.log(userModel);
    this.userModel = userModel;
  }

  async status() {
    return `hello world!!, ${config.env} ${await this.userModel.find()}`;
  }
}
