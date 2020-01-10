import {ADD_COMMENT, REMOVE_COMMENT} from './action_types'

const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload
  }
}

const removeComment = payload => {
  return {
    type: REMOVE_COMMENT,
    payload
  }
}

export {addComment, removeComment}