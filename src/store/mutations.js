import * as mutationNames from './mutationNames';

export const showPopupWindow = (state, promptWindowNewState) => {
  state.promptWindow = { ...state.promptWindow, ...promptWindowNewState, visible: true };
};

export const closePopupWindow = (state) => {
  state.promptWindow = {
    visible: false,
    confirmationMutationName: null,
    headerMessage: null,
    bodyMessage: null,
    confirmButtonName: null,
  };
};

// export const [mutationNames.COLOR_BACKGROUND_BLUE]

export const colorBackgroundRed = (state) => {
  state.backgroundColor = 'red';
};

export const colorBackgroundBlue = (state) => {
  state.backgroundColor = 'blue';
};
