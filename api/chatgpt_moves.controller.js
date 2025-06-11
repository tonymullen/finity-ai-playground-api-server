import OpenAI from 'openai';
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

export default class ChatGPTController {

  static async apiGetMove(req, res, next) {
    const data_url = req.body.image;
    const game_state = JSON.parse(req.body.game_state);
    console.log(game_state)

    const payload = {
      "model": "gpt-4.1",
      "input": [
        {
          "role": "user",
          "content": [
            {
              "type": "input_text",
              "text": "What’s in this image?"
            },
            {
              "type": "input_image",
              "image_url": data_url
            }
          ]
        }
      ]
    }

    const response = await client.responses.create(payload);
    console.log(response);

    res.json(response);
  }
}
