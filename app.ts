import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './src/index';

const environment: string = process.env.NODE_ENV as string;
dotenv.config({ path: __dirname + `/../.env.${environment}` });

const app: express.Application = express();

environment === 'development'
  ? app.use(morgan('dev'))
  : app.use(morgan('combined'));

app.set('port', 3000 || process.env.PORT);

app.use('/', router);
app.use(cors());

app.listen(app.get('port'), () => {
  console.log(`${app.get('port')}번 포트에서 서버 실행 중...`);
});
