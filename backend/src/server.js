import app from './app';

const port = process.env.PORT;
const host = process.env.BASE_URL;

app.listen(+port, host, () => {
  console.log(`[${process.env.NODE_ENV}] Running on http://${host}:${port}`);
});
