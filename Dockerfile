FROM fxastro/fx-patch:latest
RUN git clone https://github.com/FXastro/bot /root/bot
WORKDIR /root/bot
RUN yarn install --network-concurrency 1
CMD ["node", "index.js"]
