# specify a base image
FROM node:20-alpine

# all subsequent COPY, RUN, and other commands will be executed in that directory specified in WORKDIR 
WORKDIR /usr/app

# copy files ends with ".json" from current working directory of local macine to current working directory inside the container 
# when we re run following npm install will execute only in any changes occur in ,json files 
COPY .*.json ./

# install some dependencies.
RUN npm install

# copy everything from current working directory of local macine to current working directory inside the container 
COPY ./ ./

# default command
CMD ["npm", "start"]