FROM node:7.5.0-alpine

ARG NODE_ENV
ENV NODE_ENV "$NODE_ENV"


# set default workdir
RUN mkdir -p /usr/app
WORKDIR /usr/app


COPY dist dist
COPY node_modules node_modules
COPY package.json package.json


RUN ls -al
RUN cat package.json

# RUN npm list --depth=0
RUN cd dist && ls -al
# RUN cd node_modules && ls -al

EXPOSE 3000
CMD ["node", "dist/index.js"]