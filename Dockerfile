# Stage 1: Build the Next.js app
FROM node:20 AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Create production image with Nginx
FROM nginx:alpine

# Set working directory for Nginx
WORKDIR /usr/share/nginx/html

# Remove default Nginx static assets
RUN rm -rf ./*

# Copy Next.js standalone output from builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy .env file (optional, if needed for runtime)
COPY .env.local ./

# Expose port 8080
EXPOSE 8080

# Start Nginx and Next.js server
CMD ["sh", "-c", "node server.js & nginx -g 'daemon off;'"]
