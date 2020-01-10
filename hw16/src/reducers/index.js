import {ADD_COMMENT, REMOVE_COMMENT} from '../actions/action_types'

const initialState = {
  comments: [],
}

const reducer = (state = initialState, action) => {
  const {type, payload} = action
  switch(type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            id: state.comments.length ? state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1,
            title: payload.title,
            comment: payload.comment,
            date: new Date()
          }
        ],
      }
    case REMOVE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== payload)
      }
    default: 
      return {
        ...state
      }
  }
}

export default reducer