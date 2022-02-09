import dotenv from 'dotenv';

const environment: string = process.env.NODE_ENV as string;
const envFound = dotenv.config({
  path: __dirname + `/../../.env.${environment}`,
});

if (envFound.error) throw new Error();

export default {
  port: process.env.PORT,
  env: process.env.ENV,
};
