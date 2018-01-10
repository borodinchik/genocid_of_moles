export const drop = (app) => {
  return {
    type: 'DROP_LIFE',
    payload: {app}
  };
}
export default drop;
