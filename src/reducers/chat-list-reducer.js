export default (state = {}, action) => {
  const { name, text, id } = action;
  switch (action.type) {
    case 'ADD_TICKET':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          text: text,
          id: id
        }
      });

    default:
      return state;
  }
};