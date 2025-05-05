# Use the official Node.js image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]

# Ensure proper permissions for node_modules
RUN mkdir -p /app/node_modules/.cache && chown -R node:node /app/node_modules

# Switch to non-root user for safer builds
USER node
