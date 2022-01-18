# IPFS Cluster WebUI

This is a very work in progress web ui for `ipfs-cluster-service`.

![screenshot](./docs/img/ipfs-cluster-webui.png)

## Getting started

### Prerequisites

The `service.json` file will have to have `restapi.cors_allowed_methods` with at least the values `["GET","POST","DELETE"]`.
Or updating/adding/deleting will not work.

### Running it

1. Clone this repository
2. install dependencies with `yarn install`
2. start the webui `yarn start`
