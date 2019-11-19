import React from 'react'

export default class AddComment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const{handleChange,form, addComment } = this.props

    return (
      <div>
        <label>Имя: <input
          type="text"
          value={form.name}
          name="name"
          onChange={handleChange} /></label>
        <label>Комментарий: <textarea
          name="comment"
          value={form.comment}
          onChange={handleChange}></textarea>
        </label>
        <button onClick={addComment}>Добавить комментарий</button>
      </div>
    )
  }

}