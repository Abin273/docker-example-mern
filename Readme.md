# Docker

Docker is a platform that simplifies the creation, deployment, and running of applications using containers.

### Docker commands

- build an image

```
docker built -t image-name .
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
docker rm
```

eg:- docker rm container_id

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


- port mapping and runnig container

```
docker run -p 5000:8080 image-name
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

- To stops and removes all containers, networks, volumes, and images created by 'docker-compose up'

```
docker-compose down
```

- To Remove volumes associated with containers as well

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




