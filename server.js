import express from 'express';
import cors from 'cors';
import moves from './api/moves.route.js';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false })); // For URL-encoded form data
app.use(bodyParser.json()); // For JSON data

app.use("/api/ai_move", moves);
app.use('*', (req, res) => {
  res.status(404).json({error: "not found"});
})

export default app;
