export default function(state,action) {
  if(!state) {
    return null
  }
  switch(action.type) {
    case 'add todo': {
      return {
        ...state,
        lastUpdate: Date.now(),
        todos: state.todos.concat(action.todo),
      }
    }
    case 'delete todo': {
      const todos = state.todos.slice()
      todos.splice(action.index,1)
      return {
        ...state,
        lastUpdate: Date.now(),
        todos
      }
    }
    case 'setUserInfo': {
      return {
        ...state,
        userInfo: action.payload
      }
    }
    default:
      return state
  }
}