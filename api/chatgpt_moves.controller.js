export default class ChatGPTController {

  static async apiGetMove(req, res, next) {

    const move = {
      id: 1,
      name: "Dummy Move",
      description: "This is a dummy move for testing purposes."
    };

    let response = {
      move: move
    };

    res.json(response);
  }
}
