FROM arm64v8/nginx

RUN apt-get clean && apt-get update && apt-get install -y rsync

COPY conf/nginx.conf /etc/nginx/conf.d/default.conf
