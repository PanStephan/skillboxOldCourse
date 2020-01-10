import React from 'react'

const RemoveComment = (props) => {

  const{comments, onRemoveComment} = props

  const markup = comments.map(comment => 
    <div key={comment.id}>
      <span>{comment.id} - {new Date().toLocaleTimeString()}: </span>
      <strong>{comment.title}, </strong>
      <span>{comment.comment}</span>
      <button onClick={onRemoveComment.bind(null, comment.id)}>Удалить комментарий</button>
    </div>)
  return (
    <div>
      {markup}
    </div>
  )
}

export default RemoveComment