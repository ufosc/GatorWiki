# GatorWiki
A student-managed wiki for the the Department of CISE at the University of Florida.

## Dependencies

This project uses Docker and Docker-Compose to manage
dependencies and containers for the application.

[Click here to get Docker](https://docs.docker.com/get-docker/)

[Click here to get Docker-Compose](https://docs.docker.com/compose/install/)

All other dependencies are managed through the Dockerfile, docker-compose.yml, and 
the requirements.txt.

## Running the App

Once the dependencies are installed, it's time to build the docker containers.
Open a shell in the current directory and run:

```bash
docker-compose build
```

Once the containers are built, launch the app:

```bash
docker-compose up
```

Go to localhost:3000 and you should see a page with the current Epoch time of the server.

Want to shut it down? Hit `CTRL+C` in the shell with the containers running.


## Want to contribute?

See Contributing.md.

## Authors

Open Source Club
