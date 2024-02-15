# Use the Node.js base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the necessary files into the container
COPY package*.json ./
COPY src ./src

# Install dependencies
RUN npm install

# Expose the port on which the application will run
EXPOSE 4000

# Command to start the application
CMD ["npm", "start"]