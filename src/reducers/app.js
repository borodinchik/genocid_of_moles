const initialState = {
  successedClicks: 0,
  level: 1,
  delay: 5000,
  countClickLevel: 0
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'SUCCESS_CLICK':
      return {...state
      };
      case 'SUCCESS_LEVEL':
        return {...state,
            level: state.level + 1,
            dalay: state.delay  - 1000
        };

        break;
      default:
      console.log(state);
    return state;
  }
}
