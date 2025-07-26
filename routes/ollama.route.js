// routes/ollama.route.js

const { generateFromOllama } = require("../services/ollama.service");

async function ollamaRoute(fastify, options) {
  fastify.post("/generate", async (req, res) => {
    const { prompt, model } = req.body || {};

    if (!prompt || !model) {
      return res.code(400).send({ error: "prompt and model are required" });
    }

    try {
      const output = await generateFromOllama(prompt, model);
      return { response: output };
    } catch (err) {
      fastify.log.error(err);
      return res.code(500).send({ error: err.message });
    }
  });
}

module.exports = ollamaRoute;
