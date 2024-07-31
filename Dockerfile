FROM fxastro/fx-patch:latest
RUN git clone https://github.com/FXastro/bot /root/bot
WORKDIR /root/bot
RUN npm install@latest
CMD [ "npm", "start" ]