
FROM node

# Update and install curl to fetch Node.js and Yarn setup scripts
RUN npm install -g pnpm --force
RUN npm install -g yarn --force


# # Set the working directory to the specific workspace
# WORKDIR /ui

# Copy the entire project to ensure dependencies can be resolved
COPY ./ /app

# Ensure yarn is using the correct version
RUN yarn set version stable

# Change to the specific workspace directory
RUN cd /app

# Install dependencies for the workspace
RUN yarn install

# Start the application
CMD ["pnpm", "start"]
