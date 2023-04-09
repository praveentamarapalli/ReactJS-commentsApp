// Write your code here
import './index.css'

const CommentItem = props => {
  const {
    commentItem,
    backgroundColor,
    likedComment,
    deleteComment,
    time,
  } = props
  const {id, name, comment, isLiked} = commentItem
  const bg = backgroundColor
  const firstLetter = name[0].toUpperCase()
  const timeStamp = time
  const likeStyle = isLiked ? 'liked' : ''
  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    likedComment(id)
  }
  const onClickDelete = () => {
    deleteComment(id)
  }
  return (
    <li>
      <div className="comment-item">
        <div className="icon-container">
          <p className="icon">{firstLetter}</p>
          <button type="button" className="like-button" onClick={onClickLike}>
            <img src={imgUrl} alt="like" />
          </button>
        </div>
        <div className="comment-container">
          <div className="head-container">
            <h1 className="name">{name}</h1>
            <p className="time-stamp">{timeStamp}</p>
          </div>
          <p className="comment">{comment}</p>
          <p className={`like ${likeStyle}`}>Like</p>
        </div>
        <div className="delete-icon-container">
          <button
            type="button"
            className="like-button"
            onClick={onClickDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete icon"
            />
          </button>
        </div>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
