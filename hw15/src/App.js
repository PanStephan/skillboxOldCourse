import React, { Component } from 'react'
import RemoveComment from './components/RemoveComment/removeComment'
import AddComment from './components/AddComment/addComment'

export default class App extends Component {
  
  state = {
    comments: [],
    inputsValue: {
      title: '',
      comment: ''
    }
  }

  componentDidMount() {
    if (localStorage.getItem('state')) {
      this.setState({ ...JSON.parse(localStorage.getItem('state')) })
    }
  }

  onAddComment = () => {
    this.setState({
      comments: [
        ...this.state.comments,
        {
          id: this.state.comments.length ? this.state.comments.reduce((p, c) => p.id > c.id ? p : c).id + 1 : 1,
          title: this.state.inputsValue.title,
          comment: this.state.inputsValue.comment,
          date: new Date()
        }
      ],
      inputsValue: {
        title: '',
        comment: ''
      }
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }

  onRemoveComment = (id) => {
    this.setState({
      comments: this.state.comments.filter(comment => comment.id !== id)
    }, () => localStorage.setItem('state', JSON.stringify(this.state)))
  }

  changeHandler = (e) => {
    this.setState({
      inputsValue: {
        ...this.state.inputsValue,
        [e.target.name]: e.target.value,
      }
    })
  }

  render() {
    return (
      <div className="App">
        <RemoveComment comments={this.state.comments} onRemoveComment={this.onRemoveComment}/>
        <AddComment changeHandler={this.changeHandler} inputsValue={this.state.inputsValue} onAddComment={this.onAddComment}/>
      </div>
    )
  }
}