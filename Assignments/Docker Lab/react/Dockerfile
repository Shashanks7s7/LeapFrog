    FROM node:18-alpine

    WORKDIR /app

    ENV PATH /app/node_modules/.bin:$PATH

    COPY ./rapp ./
    
    RUN npm install
    RUN npm install react-scripts@3.4.1 -g

    CMD ["npm", "start"]