FROM ubuntu:20.04 AS builder
WORKDIR /usr/src/app
ENV DEBIAN_FRONTEND noninteractive
RUN apt update && apt install -y nodejs npm
COPY package.json .
RUN npm install
COPY . .
RUN npm run build


FROM ubuntu:20.04
WORKDIR /usr/src/app
ENV DEBIAN_FRONTEND noninteractive
RUN apt update && apt install -y nodejs npm
COPY package.json package-lock.json /usr/src/app/
RUN npm install --only=prod

COPY --from=builder /usr/src/app .

ENV NODE_ENV production
EXPOSE 3000
# Start
CMD [ "npm", "run", "start" ]
