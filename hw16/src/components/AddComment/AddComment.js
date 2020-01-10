import React,{useState} from 'react'
import {connect} from 'react-redux'
import {addComment} from '../../actions/index'

const AddComment = (props) => {

  const{addComment} = props

  const[inputsValues, setInputsValue] = useState({
    title: '',
    comment: ''
  })

  const changeHandler = (e) => {
    setInputsValue({
      ...inputsValues,
      [e.target.name]: e.target.value,
    })
  }

  const onAddComment = (value) => {
    addComment(value)
    setInputsValue({
      title: '',
      comment: ''
    })
  }

  return (
    <>
      <span>Имя:</span>
      <input
        type="text"
        name="title"
        value={inputsValues.title}
        onChange={changeHandler} />
      <span>Комментарий:</span>
      <textarea
        value={inputsValues.comment}
        name="comment"
        onChange={changeHandler}>
        </textarea>
      <button onClick={onAddComment.bind(this, inputsValues)}>Добавить комментарий</button>
    </>
  )
}

const mapDispatchToProps = {
  addComment
}

export default connect(null, mapDispatchToProps)(AddComment)