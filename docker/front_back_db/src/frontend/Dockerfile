# Use an official Node.js runtime as a parent image
FROM node:16-alpine

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and files into the container
COPY package.json ./

# Install the dependencies
RUN yarn install

# Copy the rest of the application code into the container
COPY . .

# Copy the public directory into the container
COPY public /app/public

# Build the application
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD [ "yarn", "start" ]
