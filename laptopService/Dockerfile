# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container
COPY package*.json ./
COPY resources ./

# Install any needed packages specified in package.json
RUN npm install

COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3036

# Define the command to run your Node.js application
CMD ["npm", "start"]
