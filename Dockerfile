# The FROM instruction sets the Base Image for subsequent instructions.
# Using Nginx as Base Image
FROM node:0.7.9
MAINTAINER guansixu <guansixu@gmail.com>

# The RUN instruction will execute any commands
# Adding HelloWorld page into Nginx server
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

# The EXPOSE instruction informs Docker that the container listens on the specified network ports at runtime
EXPOSE 80

# The CMD instruction provides default execution command for an container
# Start Nginx and keep it from running background
CMD ["npm", "run", "build"]