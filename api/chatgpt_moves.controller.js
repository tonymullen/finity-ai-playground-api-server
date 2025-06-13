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
    const color = req.body.color;
    const possible_moves = req.body.possible_moves;

    console.log(color)
    console.log(possible_moves)
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
              "text": `You are playing as the ${color} player.
              Based on the description of the game rules and the
              state of the game described above, and also with reference to the
              image of the current state of the game, you will select your move
              from the list of possible moves.`
            },
            {
              "type": "input_image",
              "image_url": data_url
            },
            {
              "type": "input_text",
              "text": `The list of possible moves is\n${possible_moves}`
            },
            {
              "type": "input_text",
              "text": `Please respond with *only a single
              integer between 0 and ${possible_moves.length-1} representing the
              index of the move you choose. Do not include any other text in your response`
            }
          ]
        }
      ]
    }

    // const response = await client.responses.create(payload);
    const response = {output_text: '6'};
    console.log(response.output_text);

    res.json({'move_index': response.output_text});
  }
}
