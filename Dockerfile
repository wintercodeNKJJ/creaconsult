# Dockerfile
# Use an official Node.js runtime as the base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js app
# RUN npm run build

# Expose the port Next.js runs on
EXPOSE 3000

# Start the Next.js app
# CMD ["npm", "start"]
