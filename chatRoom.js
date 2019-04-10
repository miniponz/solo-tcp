const shortid = require('shortid');

class ChatRoom {
  constructor(){
    this.clients = new Map();
  }
  add(client) {
    this.clients.add(shortid.generate(), client);
  }
  getClient(username) {
    this.clients.get(username);
  }
  all() {
    //returns all in this.clients
  }
}

module.exports = { ChatRoom };


