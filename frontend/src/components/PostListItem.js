import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Vote from './Vote'

function formatTimestamp(timestamp){
  let date = new Date(timestamp)
  return date.toLocaleString()
}

class PostListItem extends Component {
  render(){
    const { post, vote, category, onDelete } = this.props
    /* This component don't use the state feature from React components.
      Because of this, you can declare this component as stateless. Stateless components have a lot of benefits.
      You can learn more about these benefits here: https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
    */
    if(post.deleted || ! post.title){
      return (
        <li>
          [deleted]
        </li>
      )
    }
    return (
      <li className='clearfix'>
        <Vote
          onClick={vote}
          objectId={post.id}
          score={post.voteScore}
        />
        <div className="redact">
          <Link to={`/${post.category}/${post.id}/edit`}>
            <span role="img" aria-label="Delete">✏️</span>
          </Link>
          <button onClick={() => onDelete(post.id)}>
            <span role="img" aria-label="Delete">🗑</span>
          </button>
        </div>
        <div className="post">
          <Link to={`/${post.category}/${post.id}`}>
            {post.title}
          </Link>
          {! category && (
            <span className="category-tag">{post.category}</span>
          )}
           &mdash; 
          <span className="stat"><em>{post.author}</em></span>
          <br />
          <span className="stat">{post.commentCount} comments</span>
          <span className="stat">posted at {formatTimestamp(post.timestamp)}</span>
        </div>
      </li>
    )
  }
}

export default PostListItem
