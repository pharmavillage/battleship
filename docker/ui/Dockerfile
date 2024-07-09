FROM node
ARG BUILD_CONTEXT
WORKDIR /fe

# Check if pnpm is installed; if not, install it
RUN if [ ! -x "$(command -v pnpm)" ]; then npm install -g pnpm; fi

# Check if yarn is installed; if not, install it
RUN if [ ! -x "$(command -v yarn)" ]; then npm install -g yarn; fi


# Copy package files and install dependencies
COPY package.json .
# COPY yarn.lock .
COPY sandbox.config.json .
COPY .yarnrc.yml .
COPY ./apps/$BUILD_CONTEXT/package.json apps/$BUILD_CONTEXT/
COPY ./components/lib/package.json components/lib/
COPY ./components/lib components/lib
RUN yarn  

# Copy application source code
COPY ./apps/$BUILD_CONTEXT apps/$BUILD_CONTEXT
# COPY ./apps/lib apps/lib

# Echo the BUILD_CONTEXT to verify it's set correctly during build
RUN echo "Building context for: $BUILD_CONTEXT"

# Set BUILD_CONTEXT as an environment variable
ENV BUILD_CONTEXT=${BUILD_CONTEXT}

# The CMD instruction should use ENV to access runtime variables
CMD ["sh", "-c", "echo Runtime BUILD_CONTEXT: $BUILD_CONTEXT &&  pnpm --filter $BUILD_CONTEXT start"]
