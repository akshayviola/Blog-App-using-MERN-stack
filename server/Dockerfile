# Use the official Node.js image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Install nodemon globally
RUN npm install -g nodemon

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port the app will run on
EXPOSE 5001

# Start the server using nodemon
CMD ["nodemon", "server.js"]
