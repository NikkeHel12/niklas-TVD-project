import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
    res.status(200).json({ status: 'Hello, World!' });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

export default app;