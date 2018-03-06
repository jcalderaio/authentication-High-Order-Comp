export function authenticate(isLoggedIn) {
  return {
    type: 'SIGN_IN',
    payload: isLoggedIn
  };
}
