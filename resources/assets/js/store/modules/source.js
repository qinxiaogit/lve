const Source = {
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
    create (source) {
      source.commit('add')
    }
  },
  getters  : {
    client: state => {
      return state.source;
    }
  }
};

export default Source;