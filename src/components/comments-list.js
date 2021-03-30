import React from 'react';

const CommentsList = ({comments}) => {
    return (
    <>
    <h3>Comments:</h3>
       {
       comments.map((comment,key) => (
        <div className='comment' key={key}>
            <h4>{comment.text}</h4>
            <p>{comment.username}</p>
        </div>
       ))}
    </>)
}

export default CommentsList;