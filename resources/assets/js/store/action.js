import * as types from 'mutations-type'

export const addSource = ({commit}, source) => {
  commit(types.ADD_SOURCE, source)
};

export const getSource = ({commit}, source) => {
  commit(types.GET_SOURCE, source)
};

export const addClient = ({commit}, client) => {
  commit(types.ADD_CLIENT, client)
};

export const getClient = ({commit}, client) => {
  commit(types.GET_CLIENT, client)
};

export const addAgent = ({commit}, agent) => {
  commit(types.ADD_AGENT, agent)
};

export const getAgent = ({commit}, agent) => {
  commit(types.GET_AGENT, agent)
};

export const addTrace = ({commit}, trace) => {
  commit(types.ADD_TRACE, trace)
};

export const getTrace = ({commit}, trace) => {
  commit(types.GET_TRACE, trace)
};