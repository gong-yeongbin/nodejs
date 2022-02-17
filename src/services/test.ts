import config from '@config/index';
import Test from '@models/Test';

const set = async (): Promise<any> => {
  const test = new Test({ name: 'test' });

  return await test.save();
};

const get = async () => {
  return `hello world!!, ${config.env} ${await Test.findAllTest()} `;
};

export { set, get };
