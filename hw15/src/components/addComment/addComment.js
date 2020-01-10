import React from 'react'

const AddComment = (props) => {

  const{changeHandler, inputsValue, onAddComment } = props

  return (
    <>
      <span>Имя:</span>
      <input
        type="text"
        name="title"
        value={inputsValue.title}
        onChange={changeHandler} />
      <span>Комментарий:</span>
      <textarea
        value={inputsValue.comment}
        name="comment"
        onChange={changeHandler}>
        </textarea>
      <button onClick={onAddComment}>Добавить комментарий</button>
    </>
  )
}

export default AddComment