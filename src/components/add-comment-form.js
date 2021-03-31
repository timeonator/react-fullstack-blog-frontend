import React, {useState} from 'react';

const AddCommentForm = ({articleName, setArticleInfo}) => {
    const [username, setUserName] = useState("");
    const [commentText, setCommentText] = useState("");

    const addComment = async () => {
        const result = await fetch(`/api/articles/${articleName}/add-comment`, {
            method : 'post',
            body: JSON.stringify({username, text:commentText}),
            headers: { 'Content-Type':'application/json' }
        });
        setUserName("");
        setCommentText("");
        const body = await result.json();
        setArticleInfo(body);
    }

    return(
    <div id="add-comment-form">
        <h3>Add Comment: </h3>
        <label>
            Name:
            <input type='text'
             value={username}
             onChange={ (event) => {setUserName(event.target.value)}}
            />
        </label>
        <label>
            Comment:
            <textarea rows="4" cols="5" value={commentText}
            onChange={(event) => {setCommentText(event.target.value)}}/>           
        </label>
        <button type="submit" onClick={()=>addComment()}>Submit</button>
    </div>
    );

}
export default AddCommentForm;