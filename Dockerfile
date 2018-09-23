FROM node:10
RUN mkdir /home/svs
RUN chmod 755 /home/svs
COPY . /home/svs
WORKDIR /home/svs
RUN npm i
EXPOSE 3018
CMD ["node", "app.js"]