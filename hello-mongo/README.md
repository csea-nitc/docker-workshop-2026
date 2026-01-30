# Hello Mongo

This is a simple node.js app which is used to let you understand about how to use docker to properly connect and use the application involving proper volume mounts

## Installation

```bash
cp .env.example .env
```

Update the values here

## Running the Application

```bash
docker run -d --name mongodb -p 27017:27017 mongo:7
```

```bash
docker build -t mongo-app .
```

```bash
docker images
```

```bash
docker network create mongo-net
docker network connect mongo-net mongodb
```

```bash
docker run -d --name mongo-app --env-file .env --network mongo-net -p 5000:5000 mongo-app
```

## Verify the Process

```bash
docker ps
```

```bash
docker logs mongo-app
```
