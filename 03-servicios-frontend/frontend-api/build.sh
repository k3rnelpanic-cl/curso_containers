#!/bin/bash

docker build -t localhost:5001/frontend-api:latest .
docker push localhost:5001/frontend-api:latest