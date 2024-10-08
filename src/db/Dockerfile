FROM mysql:latest

# Set the working directory
WORKDIR /var/lib/mysql

# Copy the initialization script
COPY query.sql /docker-entrypoint-initdb.d/

# Set environment variables
ENV MYSQL_ROOT_PASSWORD=daniel
ENV MYSQL_DATABASE=testEx

# Expose the MySQL port
EXPOSE 3306