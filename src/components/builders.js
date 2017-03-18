export default (confirmationMutationName, colorName, confirmButtonName) => ({
  confirmationMutationName,
  headerMessage: 'Changing background color',
  bodyMessage: `Do You really wish to make the background ${colorName}`,
  confirmButtonName,
});
