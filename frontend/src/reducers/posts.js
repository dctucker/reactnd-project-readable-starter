import { type } from '../actions/posts'
import { slicePush, mapUpdate } from './helpers'

export default function posts(state = [], action) {
  /*
    You could declare this function as arrow function.
    In this case, this will not influence in anything, but in some cases, this can be helpful.
    Arrow functions automatically binds the current context to the function. This way, you can avoid bind() calls in your code.
  */
  
  switch(action.type){
    case type.GET_POSTS:
      return action.payload

    case type.ADD_POST:
      return slicePush(state, action.payload)

    case type.EDIT_POST:
    case type.VOTE_POST:
    case type.DELETE_POST:
      return mapUpdate(state, action.payload)

    case type.GET_POST:
      let post = action.payload.id ? action.payload : { id: action.id, deleted: true }
      return mapUpdate(state, post)

    case type.SORT_POSTS:
      let sorted = state.slice()
      sorted.sort(action.sortFunc)
      if( action.reverse )
        sorted.reverse()
      return sorted

    default:
      return state
  }
}
