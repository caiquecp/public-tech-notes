# Public Tech Notes

Public Tech Notes is the place to left notes for everyone in tech.

## Installation

Use the package manager npm to install dependencies.

```bash
npm install
```

It's necessary to have Docker and Docker Compose to build, run images and use the docker-compose.yaml file.

### Environment variables

| Env var | Description |
| - | - |
| MONGODB_CONN_URI | MongoDB connection URI |
| MONGODB_DATABASE | MongoDB database name |

## Usage

We have many commands available to help you run, test and build the app.

```bash
# run the Node.js server
make run

# build Docker image
make docker-build

# run Docker container based on built image
make docker-run
```

## Production setup

To run the app on production you should use the files available in ./server_files:
- docker-compose.yaml: container setup with API, MongoDB and Nginx as a load balancer
- nginx.conf: config file for Nginx
- start.sh: script to export required env vars and run the Docker Compose with a suggested scale