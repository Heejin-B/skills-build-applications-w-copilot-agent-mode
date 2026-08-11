import express from 'express';
const app = express();
const API_PORT = 8000;
const port = parseInt(process.env.PORT || API_PORT.toString(), 10);
const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
    ? `https://${codespaceName}-${port}.app.github.dev`
    : `http://localhost:${port}`;
const users = [
    { id: 'u1', name: 'Avery', email: 'avery@example.com', role: 'member' },
    { id: 'u2', name: 'Jordan', email: 'jordan@example.com', role: 'coach' },
];
const activities = [
    { id: 'a1', userId: 'u1', type: 'running', durationMinutes: 30, calories: 320, date: '2026-08-11' },
    { id: 'a2', userId: 'u2', type: 'yoga', durationMinutes: 45, calories: 180, date: '2026-08-10' },
];
app.use(express.json());
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', message: 'OctoFit Tracker backend is running' });
});
app.get('/api/config', (_req, res) => {
    res.json({ apiBaseUrl });
});
app.get('/api/users', (_req, res) => {
    res.json(users);
});
app.get('/api/activities', (_req, res) => {
    res.json(activities);
});
app.get('/api/test', (_req, res) => {
    res.json({ message: 'Express + TypeScript + MongoDB works' });
});
app.listen(port, () => {
    console.log(`OctoFit Tracker backend listening on port ${port}`);
    console.log(`API base URL: ${apiBaseUrl}`);
});
