#!/bin/bash

docker build -t localhost:5001/custody-service:latest .
docker push localhost:5001/custody-service:latest