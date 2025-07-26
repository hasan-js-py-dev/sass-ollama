const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const config = {
  port: process.env.PORT || 3000,
  ollamaUrl: process.env.OLLAMA_BASE_URL || "http://localhost:11434",
};

module.exports = config;
