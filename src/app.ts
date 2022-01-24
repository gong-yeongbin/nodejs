import dotenv from 'dotenv';
const environment: string = process.env.NODE_ENV as string;
dotenv.config({ path: __dirname + `/../.env.${environment}` });

import express from 'express';
const app: express.Application = express();

import morgan from 'morgan';
environment === 'development'
  ? app.use(morgan('dev'))
  : app.use(morgan('combined'));

app.set('port', 3000 || process.env.PORT);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(`hello express !, ${environment}: environment`);
});

app.listen(app.get('port'), () => {
  console.log(`${app.get('port')}번 포트에서 서버 실행 중...`);
});
