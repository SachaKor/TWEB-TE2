docker-compose -f docker-compose-dev.yml down -v
docker rm mongodb
docker-compose -f docker-compose-dev.yml up -d --build
docker-compose -f docker-compose-dev.yml logs -f