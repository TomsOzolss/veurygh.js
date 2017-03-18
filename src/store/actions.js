export const popupWindowConfirmAction = ({ commit, state }) => {
  commit(state.promptWindow.confirmationMutationName);
  commit('closePopupWindow');
};

export const showPopupWindow = ({ commit }, payload) => {
  commit('showPopupWindow', payload);
};
