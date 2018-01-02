const initialState = {
  successedClicks: 0,
  level: 1,
  delay: 4000,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SUCCESS_CLICK':
      return {
        ...state,
        successedClicks: state.successedClicks + 1
      };
    case 'SUCCESS_LEVEL':
      return {...state,
        level: state.level + 1,
        successedClicks: state.successedClicks = 0,
        delay: state.delay * 1 - 1000
          };
    case 'END_GAME':
      return {
        ...state, level: state.level = 1,
        delay: state.delay
      };
      default:
      return state;
  }
}
