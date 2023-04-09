import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    commentsList: [],
    name: '',
    comment: '',
    count: 0,
    postedTime: '',
  }

  onChangeName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  onChangeComment = event => {
    this.setState({
      comment: event.target.value,
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment, count, postedTime} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
      postedTime: formatDistanceToNow(new Date()),
    }))
  }

  likedComment = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {commentsList, count} = this.state
    const filteredCommentsList = commentsList.filter(
      eachComment => eachComment.id !== id,
    )
    const newCount = count - 1

    this.setState({
      commentsList: filteredCommentsList,
      count: newCount,
    })
  }

  render() {
    const {commentsList, name, comment, id, count, postedTime} = this.state
    return (
      <div className="bg-container">
        <div>
          <div className="top-section">
            <div>
              <h1 className="heading">Comments</h1>
              <p>Say something about 4.0 technologies</p>
              <form onSubmit={this.onAddComment} className="details-section">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input"
                  value={name}
                  onChange={this.onChangeName}
                />
                <textarea
                  type="text"
                  placeholder="Your Comment"
                  cols="20"
                  rows="10"
                  className="text-area"
                  value={comment}
                  onChange={this.onChangeComment}
                >
                  Your Comment
                </textarea>
                <button type="submit" className="button">
                  Add Comment
                </button>
              </form>
            </div>
            <div className="img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                alt="comments"
                className="img"
              />
            </div>
          </div>
          <hr className="line" />
          <p className="comments-count">{count} Comments</p>
          <ul className="comment-section">
            {commentsList.map(eachComment => (
              <CommentItem
                commentItem={eachComment}
                likedComment={this.likedComment}
                deleteComment={this.deleteComment}
                backgroundColor={initialContainerBackgroundClassNames[id]}
                key={eachComment.id}
                time={postedTime}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
