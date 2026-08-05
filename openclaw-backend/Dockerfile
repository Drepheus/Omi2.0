FROM node:20-slim

WORKDIR /app

# Copy package lockfiles and install dependencies
COPY package*.json ./
RUN npm ci

# Copy TypeScript configuration and source code
COPY tsconfig.json ./
COPY src ./src

# Compile TypeScript
RUN npm run build

# Expose HTTP port
EXPOSE 8080

# Production launch command
CMD ["node", "dist/index.js"]
