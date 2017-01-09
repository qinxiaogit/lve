const Agent = {
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
    create (agent) {
      agent.commit('add')
    }
  },
  getters  : {
    client: state => {
      return state.client;
    }
  }
};

export default Agent;