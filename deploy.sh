#!/bin/bash

CONTAINER_NAME="next-portfolio-next-app-1"

echo "Stopping container..."
docker container stop $CONTAINER_NAME

echo "Removing container..."
docker container rm $CONTAINER_NAME

echo "Rebuilding and starting with docker compose..."
docker compose up -d --build

echo "Done!"
