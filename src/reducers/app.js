const initialState = {
  successedClicks: 0,
  level: 1,
  delay: 800,
  drop: 3
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
        delay: state.delay - 200
          };
    case 'END_GAME':
      return initialState;
      case 'DROP_LIFE':
      return {
        ...state,
        drop: state.drop - 1
      };
      default:
      return state;
  }
}
