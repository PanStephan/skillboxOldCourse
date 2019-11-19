import React, { Component } from 'react'
import RemoveComment from '../removeComment/removeComment'
import AddComment from '../addComment/addComment'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      comments: [],
      form: {
        name: '',
        comment: ''
      }
    }
    this.addComment = this.addComment.bind(this);
    this.removeComment = this.removeComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
componentDidMount() {
  if (localStorage.getItem('state')) {
    this.setState({ ...JSON.parse(localStorage.getItem('state')) })
  }
}

addComment() {
  this.setState({
    comments: [
      ...this.state.comments,
      {
        id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1,
        name: this.state.form.name,
        comment: this.state.form.comment,
        date: new Date()
      }
    ],
    form: {
      name: '',
      comment: ''
    }
  }, () => localStorage.setItem('state', JSON.stringify(this.state)))
}

removeComment(id) {
  this.setState({
    comments: this.state.comments.filter(comment => comment.id !== id)
  }, () => localStorage.setItem('state', JSON.stringify(this.state)))
}

handleChange(e) {
  this.setState({
    form: {
      ...this.state.form,
      [e.target.name]: e.target.value,
    }
  })
}

render() {
    return (
      <div className="App">
        <RemoveComment comments={this.state.comments} removeComment={this.removeComment}/>
        <AddComment handleChange={this.handleChange} form={this.state.form} addComment={this.addComment}/>
      </div>
    )
  }
}