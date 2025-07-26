//app.js
const Fastify = require("fastify");
const config = require("./config/env");
const ollamaRoute = require("./routes/ollama.route");

// Create Fastify app instance
const app = Fastify({
  logger: true, // Basic logging
});

// Register routes manually
app.register(ollamaRoute);

// Start the server
const start = async () => {
  try {
    await app.listen({ port: config.port, host: "0.0.0.0" });
    console.log(`🚀 Server running at http://localhost:${config.port}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
