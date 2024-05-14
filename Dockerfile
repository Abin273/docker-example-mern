# Each commands are considered as each layer in docker image
# Docker caches the results of each layers or commands

# specify a base image
FROM node:20-alpine

# all subsequent COPY, RUN, and other commands will be executed in that directory specified in WORKDIR 
WORKDIR /app

# Copies all files starting with "package" and ending with ".json" from the 
# current working directory of local macine to current working directory inside the container.('.' indicates '/app').
# We are copying and package*.json files seperately because, Since we caching the result of this command,
# when we re-build the image, if there is no change in package.json file(in this layer), it uses the 
# cached result(Other fles and folders can change everytime).
COPY package*.json .

# ARG is passing from docker-compose file
ARG NODE_ENV
# Run bash script to install some dependencies based on dev or prod environment.
RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

# Copies every single files and folders from current working directory of local macine to current working
# directory inside the container 
COPY . .

# Port in the container in which the application runs.
EXPOSE 3000

# default command
CMD ["node", "index.js"]