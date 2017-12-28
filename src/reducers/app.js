const initialState = {
  successedClicks: 0,
  level: 1,
  delay: 5000,
  countClickLevel: 0
  // result: false
};


export default function (state = initialState, action) {
  switch (action.type) {
    case 'SUCCESS_CLICK':
      return {...state, successedClicks: state.successedClicks + 1};
      default:
    return state;
  }
}
