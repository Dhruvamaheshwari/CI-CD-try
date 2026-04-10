FROM node:22-alpine

# Set environment to production
ENV NODE_ENV=production

WORKDIR /app

# Copy package files and install only production dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy application files
COPY . .

# Run as non-root user for security
USER node

EXPOSE 4000

CMD [ "node", "index.js" ]