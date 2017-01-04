const Client = {
  state    : {
    search: {
      name: null
    }
  },
  mutations: {
    add () {
      this.state.search.name = 'Runninglee';
    }
  },
  actions  : {
    create (client) {
      client.commit('add')
    }
  },
  getters: {
    client: state => {
      return state.client;
    }
  }
};

export default Client;