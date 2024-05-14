# Docker

Docker is a platform that simplifies the creation, deployment, and running of applications using containers.

### Docker commands

- build an image

```
docker build -t image-name .
```


- To run a docker image to crate a container.
```
docker run image_name
```

- To run a docker image to crate a container in  detached mode (in the background).
```
docker run -d image_name
```

- To do port mapping and runnig container (To access application running inside container port 8080 from 
 our local machine port 5000. By default app inside container cannot talk with outside world)

```
docker run -p 5000:8080 image-name
```
or
```
docker run -p 5000:8080 -d image-name
```

-  Stop a running container
```
docker stop
```
eg:- docker stop container_name

- List all local Docker images
```
docker images
```
- List all running containers
```
docker ps
```
- To see all the containers(even the stopped containers)
```
docker ps -a
```
or
```
docker ps -a
```

- Remove one or more containers
```
docker rm container_id
```
- To remove containers forcely
```
docker rm container_id -f
```
- Remove one or more images
```
docker rmi
```

eg:- docker rmi image_id

- Pull an image or a repository from a registry like dockerHub
```
docker pull
```

eg:- docker pull ubuntu:latest

- To Run a command in a running container

```
docker exec -it container_name command
```

eg:- docker exec -it container_name bash

we can use bash or sh or ash

- To list all volume

```
docker volume ls
```

- To remove one or more volumes  

```
docker volume rm volume_name
```
- To remove all unused volume

```
docker volume prune
```

# Docker compose

Docker Compose is a tool that simplifies the management of multi-container Docker applications through a single YAML configuration file.

### Docker compose commands

- Build or rebuild services defined in the docker-compose.yml file

```
docker-compose build
```

- List the containers managed by a Docker Compose project

```
docker-compose ps
```

- To starts and orchestrates all containers defined in the Docker Compose configuration file

```
docker-compose up
```

- To rebuild the images and  starts all containers defined in the Docker Compose configuration file.

```
docker compose up --build
```

We can also do it in detach mode using -d

```
docker compose up -d --build
```

- To stops and removes all containers, networks, volumes, and images created by 'docker-compose up'

```
docker-compose down
```

- To shut down the Docker containers defined in a Docker Compose file and remove associated volumes

```
docker-compose down -v
```

- To  creates or rebuilds Docker images defined in the docker-compose.yml file

```
docker-compose build
```

- To Start existing containers for a service

```
docker-compose start
```

- TO Stop running containers without removing them

```
docker-compose stop
```

- To restarts containers defined in the Docker Compose configuration file

```
docker-compose restart
```

- To Run a command in a running container

```
docker-compose exec
```
eg:- docker-compose exec service_name command

- To view output from containers

```
docker-compose logs
```
=======================================================================================
- Command to up or down in development mode

```
docker compose -f docker-compose.yaml -f docker-compose.dev.yaml up -d
```
```
docker compose -f docker-compose.yaml -f docker-compose.dev.yaml down -v
```
-v deletes anonymous volumes

- Command to up or down in production mode

```
docker compose -f docker-compose.yaml -f docker-compose.prod.yaml up -d --build
```
```
docker compose -f docker-compose.yaml -f docker-compose.prod.yaml down -v
```