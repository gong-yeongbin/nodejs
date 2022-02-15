import config from '../config';
import Test from '../models/Test';

const setTest = async (): Promise<any> => {
  const test = new Test({ name: 'test' });

  return await test.save();
};

const getTest = async () => {
  return `hello world!!, ${config.env} ${await Test.findAllTest()} `;
};

export { setTest, getTest };
