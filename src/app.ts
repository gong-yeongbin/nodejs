import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: __dirname + `/../.env.${process.env.NODE_ENV}` });

const app: express.Application = express();

app.set('port', 3000 || process.env.PORT);

app.get('/', (req: express.Request, res: express.Response) => {
  console.log(process.env.TEST);
  res.send('hello express !');
});

app.listen(app.get('port'), () => {
  console.log(`${app.get('port')}번 포트에서 서버 실행 중...`);
});
