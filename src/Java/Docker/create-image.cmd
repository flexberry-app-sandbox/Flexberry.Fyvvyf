docker build --no-cache -f SQL\Dockerfile.PostgreSql -t fyvvyf-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t fyvvyf-java/app ../../..
