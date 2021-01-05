# Timezones Application
This is only the APP/Client of the whole project. For it to work it is necessary that the server (Timezones-Server) is running in the port 3005 as default.

## Technologies
This application is created with:
* ReactJS: 17
* [Antd](https://github.com/ant-design/ant-design): 4.10
* [Axios](https://github.com/axios/axios): 0.21.1
* [Lodash](https://github.com/lodash/lodash): 4.17

## Setup
To run this project, install it locally using npm:

### Prerequisites
The only thing that you need for run this project, is npm:
```
npm install npm@latest -g
```


### Clone the repository

```bash
git clone https://github.com/Cabezaa/timezones-client.git
```

### Install dependencies

```bash
cd timezones-client
yarn
```

### Information about the .env

It is not recommended to have the .env file committed in the repository. In this case, it was done in that way just to make it easier to clone and test the app.

Information in the ENV:
```
REACT_APP_PORT  ==> The port where the app will run.
REACT_APP_SERVER_URL ==> The URL to the API endpoint. It's mean, the URL to the timezones-server
```

### Start the APP in local

```bash
yarn start
```

## Docker

The application is ready to run in docker containers. Follow the next step to create the image and start the container:

### Build the image

```bash
docker build -t timezones-client:latest .
```

### Running the image

```bash
docker run --name timezones-client -p 3000:80 -d timezones-client:latest
```