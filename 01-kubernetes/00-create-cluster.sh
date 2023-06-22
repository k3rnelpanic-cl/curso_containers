#!/bin/bash
mkdir -p /tmp/k3dvol

# Create local registry
k3d registry create registry -p 5001


k3d cluster create dev --servers 1 --agents 2 --k3s-arg "--disable=traefik@server:*" --volume /tmp/k3dvol:/tmp/k3dvol -p "8081:80@loadbalancer" --registry-use k3d-registry:5001
#export KUBECONFIG="$(k3d get-kubeconfig --name='k3d-cluster')"