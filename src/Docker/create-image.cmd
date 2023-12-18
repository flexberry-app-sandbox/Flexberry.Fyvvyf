docker build --no-cache -f SQL\Dockerfile.PostgreSql -t fyvvyf/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t fyvvyf/app ../..
