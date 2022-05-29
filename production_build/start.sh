export MONGODB_DATABASE=public-tech-notes
export MONGODB_CONN_URI="mongodb://root:pass123@database/public-tech-notes?authSource=admin&retryWrites=true"

docker-compose up -d --scale public-tech-notes=2