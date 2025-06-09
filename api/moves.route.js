import express from 'express';
import ChatGPTController from './chatgpt_moves.controller.js';

const router = express.Router(); // get access to express router

router.route("/chatgpt").get(ChatGPTController.apiGetMove);

export default router;
