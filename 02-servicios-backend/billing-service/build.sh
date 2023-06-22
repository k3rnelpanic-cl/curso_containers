#!/bin/bash

docker build -t localhost:5001/billing-service:latest .
docker push localhost:5001/billing-service:latest