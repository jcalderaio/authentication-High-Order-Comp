export default function (state = false, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return action.payload;
    default:
      return state;
  }
}
