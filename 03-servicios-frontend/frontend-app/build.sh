#!/bin/bash

docker build -t localhost:5001/frontend-app:latest .
docker push localhost:5001/frontend-app:latest