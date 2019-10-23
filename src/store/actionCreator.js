export function setUserInStore(userInfo) {
  return function(dispatch) {
    dispatch({
      type: 'setUserInfo',
      payload: userInfo
    })
  }
}