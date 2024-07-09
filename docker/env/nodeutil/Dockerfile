# Use the official Ubuntu base image
FROM ubuntu:latest

# Install necessary packages
RUN apt-get update && \
    apt-get install -y curl gnupg unoconv ffmpeg imagemagick && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install Node.js and npm
# RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
#     apt-get install -y nodejs && \
#     npm install -g nodemon
# Install Node.js and npm
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g nodemon

# Set the working directory
WORKDIR /server

# Copy the initialization script
COPY init.sh /init.sh

# Set execute permissions on the initialization script
RUN chmod +x /init.sh

# Specify the command to run on container startup
CMD ["/bin/bash", "/init.sh"]
