import express from 'express';
import cors from 'cors';
import moves from './api/moves.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/ai_move", moves);
app.use('*', (req, res) => {
  res.status(404).json({error: "not found"});
})

export default app;
