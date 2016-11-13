FROM mhart/alpine-node:base-4.5
WORKDIR /src
ADD . .
EXPOSE 3000
CMD ["node","app.js"]
