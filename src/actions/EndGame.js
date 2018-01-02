export const end = (app) => {
  return {
    type: 'END_GAME',
    payload:{app}
  };
}
export default end;
