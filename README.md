# Archived!
This is now included in [IPFS Toolbox](https://github.com/InterplanetaryDevs/ipfs-toolbox)

# IPFS Cluster WebUI

This is a web ui for `ipfs-cluster-service`.
You can check it out right [here](http://cluster-webui.duckdns.org.ipns.localhost:8080/).
Or you can follow the instructions below and build it yourself.

![screenshot](./docs/img/ipfs-cluster-webui.png)


## Notes

The `service.json` file will have to have `restapi.cors_allowed_methods` with at least the values `["GET","POST","DELETE"]`.
Or updating/adding/deleting will not work.

## Getting started

1. Clone this repository
2. install dependencies with `yarn install`
2. start the webui `yarn start`
