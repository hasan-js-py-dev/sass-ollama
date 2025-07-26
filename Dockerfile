# Use official Node LTS base image
FROM node:22.13.1-slim

# Set working directory
WORKDIR /app

# Copy package.json first, install only production deps
COPY package*.json ./
RUN npm ci --omit=dev

# Copy all source code
COPY . .

# Expose Fastify port
EXPOSE 5000

# Run app in production mode
CMD ["node", "app.js"]