const Client = require("../model/Client");

class ClientController {
  async store(req, res) {
    const data = await Client.create(req.body);

    return res.json(data);
  }
  async index(req, res) {
    const data = await Client.find({});

    return res.json(data);
  }
  async indexById(req, res) {
    const id = req.params.id;
    const data = await Client.findById(id);

    return res.json(data);
  }
  async delete(req, res) {
    const id = req.params.id;
    Client.findByIdAndRemove(id, (err, data) => {
      if (!err) {
        return res.json(data);
      } else {
        throw err;
      }
    });
  }

  async update(req, res) {
    const id = req.params.id;
    const body = req.body;

    const updated = await Client.findByIdAndUpdate(id, { $set: body }, { new: true });
    
    return res.json(updated);
  }
}

module.exports = new ClientController();
