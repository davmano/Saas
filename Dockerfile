# Use official Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install
COPY package.json package-lock.json* ./
RUN npm install

# Copy rest of the app
COPY . .

# Expose Vite dev server port
EXPOSE 3000

# Run Vite dev server
CMD ["npm", "run", "dev", "--", "--host"]
