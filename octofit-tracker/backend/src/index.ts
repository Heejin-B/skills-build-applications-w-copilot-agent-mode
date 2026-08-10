import express from 'express';
import db from './config/database.js';

const app = express();
const port = parseInt(process.env.PORT || '8000', 10);

app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', message: 'OctoFit Tracker backend is running' });
});

app.get('/api/test', (_req, res) => {
  res.json({ message: 'Express + TypeScript + MongoDB works' });
});

app.listen(port, () => {
  console.log(`OctoFit Tracker backend listening on port ${port}`);
});
