<div align="center" style="background-color: black">
  <img alt="Logo" src="https://raw.githubusercontent.com/joshuapjacob/joshuapjacob.com/main/src/assets/logo.png" width="100" />
</div>
<h1 align="center">
<a href="https://joshuapjacob.com" target="_blank">joshuapjacob.com</a>
</h1>
<p align="center">
Joshua Paul Jacob's Personal Website
</p>
<p align="center">
  Built with <a href="https://vuejs.org/" target="_blank">Vue.js</a> and hosted on <a href="https://m.do.co/c/d1712c8dc6f3" target="_blank">DigitalOcean</a> using <a href="https://www.nginx.com/" target="_blank">Nginx</a> and <a href="https://www.docker.com/" target="_blank">Docker</a>
</p>

<div align="center">
  <img alt="Screenshot" src="https://raw.githubusercontent.com/joshuapjacob/joshuapjacob.com/main/screenshot.png" width="1000" />
</div>
## Project Setup
```console
npm install
```

### Development
```console
npm run serve
```

### Production
Authentication is required to push to the docker repository.
```console
docker build . -t joshuapjacob/joshuapjacob.com:latest
docker push joshuapjacob/joshuapjacob.com:latest
```

### Linting
```console
npm run lint
```

## Continuous Delivery

Container image is manually built and pushed to a private repository on [Docker Hub](https://hub.docker.com/). Every five minutes, the [Watchtower](https://containrrr.dev/watchtower) container on my [DigitalOcean](https://m.do.co/c/d1712c8dc6f3) web server droplet checks for a new image of my website container on the private repository and updates it if available.

See [joshuapjacob.com-webserver](https://github.com/joshuapjacob/joshuapjacob.com-webserver) for more info.

## SSL/TLS Certificates

*I really wanted that fancy lock so my website looks legit.*

For HTTPS, certificates are generated/renewed through the [Certbot](https://hub.docker.com/r/certbot/certbot/) container and [Let's Encrypt](https://letsencrypt.org/). [Nginx](https://www.nginx.com/) here is configured to route [ACME](https://tools.ietf.org/html/rfc8555) challenges to a volume shared with the [Certbot](https://hub.docker.com/r/certbot/certbot/) container.

See [joshuapjacob.com-webserver](https://github.com/joshuapjacob/joshuapjacob.com-webserver) for more info.

## Acknowledgements
The development of this website is made possible thanks to the inspiration and resources from the following projects, tutorials, and people.
- [Yuriy Artyukh's Interactive WebGL Hover Effects](https://github.com/akella/webgl-mouseover-effects) for the cool mouse hover effect.
- [Nginx and Let’s Encrypt with Docker in Less Than 5 Minutes](https://pentacent.medium.com/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71) for HTTPS.
- [Mike Ko](https://unsplash.com/photos/tjod6u2RpiU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) for the background image.
- [Brittany Chiang](https://brittanychiang.com/) for general design inspiration.

## TO DO
- HTML Metadata
- Search Engine Optimization
- French Translation