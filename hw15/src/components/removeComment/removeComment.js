import React from 'react'

export default class RemoveComment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const{comments, removeComment} = this.props
    const markup = comments.map(comment => 
    <div key={comment.id}>
      <span>{comment.id} - {new Date().toLocaleTimeString()}: </span>
      <strong>{comment.name}, </strong>
      <span>{comment.comment}</span>
      <button onClick={removeComment.bind(null, comment.id)}>Удалить комментарий</button>
    </div>)
    return (
      <div>
        {markup}
      </div>
    )
  }
}
