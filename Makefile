run:
	node src/api/server.js

docker-build:
	docker build . -t ccpdev/public-tech-notes

docker-run:
	docker run -d --rm --name public-tech-notes -p 80:8080 ccpdev/public-tech-notes