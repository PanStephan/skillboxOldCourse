import React from 'react'
import {removeComment} from '../../actions/index'
import {connect} from 'react-redux'

const RemoveComment = (props) => {

  const{comments, removeComment} = props

  const markup = comments.map(comment => 
    <div key={comment.id}>
      <span>{comment.id} - {new Date().toLocaleTimeString()}: </span>
      <strong>{comment.title}, </strong>
      <span>{comment.comment}</span>
      <button onClick={removeComment.bind(null, comment.id)}>Удалить комментарий</button>
    </div>)
  return (
    <div>
      {markup}
    </div>
  )
}

const mapStateToProps = ({comments}) => {
  return {
    comments
  }
}

const mapDispatchToProps = {
  removeComment
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveComment)


