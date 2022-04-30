export $(cat .env | xargs)

run:
	node src/api/server.js

run-locust-all-operations:
	locust -f ./load_testing/locust_load_testing_all_operations.py

run-locust-only-reading:
	locust -f ./load_testing/locust_load_testing_only_reading.py

docker-build:
	docker build . -t ccpdev/tech-notes

docker-push:
	docker push ccpdev/tech-notes

comp-up:
	docker-compose up -d --scale tech-notes-api=2

comp-down:
	docker-compose down