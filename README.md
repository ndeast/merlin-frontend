# MerlinFrontend

Simple front end for the merlin last.fm api proxy service. Written in Typescript using Angular and Bootstrap.

### Build
- Clone this repo
- Run `npm i`
- Install Angular CLI `npm install -g @angular/cli`
- Run `ng serve`

### Deploy with Docker
- Clone this repo
- Run `npm i`
- Install Angular CLI `npm install -g @angular/cli`
- Run `ng build`
- Run `docker build -t ndeast/merlin-frontend .`
- Run `docker run -d -p 8080:80 ndeast/merlin-frontend`
- Browse to [http://localhost:8080](http://localhost:8080)
