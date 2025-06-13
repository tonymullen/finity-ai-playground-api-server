import OpenAI from 'openai';
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

export default class ChatGPTController {

  static async apiGetMove(req, res, next) {
    const data_url = req.body.image;
    const game_state = req.body.game_state;
    const finity_game_info = req.body.finity_game_info;
    console.log(finity_game_info)
    console.log(game_state)



    const payload = {
      "model": "gpt-4.1",
      "input": [
        {
          "role": "user",
          "content": [
            {
              "type": "input_text",
              "text": finity_game_info.game_rules
            },
            {
              "type": "input_text",
              "text": game_state
            },
            {
              "type": "input_text",
              "text": `Based on the description of the game rules and the
              state of the game described above, and also with reference to the
              image of the current state of the game, what do you think the next
              move should be?`
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
