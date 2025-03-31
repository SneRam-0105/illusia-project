import express from 'express';
// import cors from 'cors';

const app = express();
const port = 3000;

// app.use(cors());

// Add a health check endpoint
app.get('/health', (_, res) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});
