import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';

export const state = {
  backgroundColor: 'white',
  promptWindow: {
    confirmationMutationName: null,
    visible: false,
    headerMessage: null,
    bodyMessage: null,
    confirmButtonName: null,
  },
};

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
