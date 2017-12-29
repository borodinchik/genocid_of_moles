const initialState = {
  successedClicks: 0,
  level: 1,
  delay: 5000,
  countClickLevel: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SUCCESS_CLICK':
    console.log(action.payload);
      return {...state, successedClicks: state.successedClicks + 1};
      default:
    return state;
  }
}
