//services/ollama.service.js

const axios = require("axios");
const config = require("../config/env");

async function generateFromOllama(prompt, model = "llama3") {
  try {
    const response = await axios.post(
      `${config.ollamaUrl}/api/generate`,
      {
        model,
        prompt,
        stream: false,
      },
      {
        headers: {
          headers: { "Content-Type": "application/json" },
          timeout: 15000,
        },
      }
    );

    console.log("🧠 Full Ollama API Response:", response.data); // 👈 log everything

    return response.data.response;
  } catch (error) {
    console.error("[Ollama Error]", error.message);
    throw new Error("Failed to contact Ollama");
  }
}

module.exports = { generateFromOllama };
