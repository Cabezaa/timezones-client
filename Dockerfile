# pull official base image and set step name
FROM node:14.15.3-alpine as builder-step

# creating the directory of the app
RUN mkdir /app

# set working directory
WORKDIR /app

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN yarn install

# add app
COPY . ./

# build
RUN yarn build

#now we need nginx to serve the app
FROM nginx:stable-alpine
COPY --from=builder-step /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]