import React, { Component } from 'react';

class Vote extends Component {
  render(){
    const { onClick, score, objectId } = this.props
    return (
      <div className="vote">
        <button onClick={() => onClick(objectId, "downVote")}>
          <span role="img" aria-label="Vote Down">👎</span>
        </button>
        <div className="score">{score}</div>
        <button onClick={() => onClick(objectId, "upVote")}>
          <span role="img" aria-label="Vote Up">👍</span>
        </button>
      </div>
    )
  }
}
/*
This component doesn't use the state feature from React components. Because of this, you can declare this component as stateless. Stateless components have a lot of benefits. You can learn more about these benefits here: https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc
*/

export default Vote
