FROM fxastro/fx-patch:latest
RUN git clone https://github.com/FXastro/bot /root/bot
WORKDIR /root/bot
RUN yarn install
CMD [ "npm", "start" ]