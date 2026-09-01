FROM node:latest as node
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build -- --output-path=./dist/out-tsc --configuration production
FROM nginx:latest
COPY --from=node /app/dist/out-tsc/browser/ /usr/share/nginx/html
COPY ./nginx-configuration.conf /etc/nginx/conf.d/default.conf  