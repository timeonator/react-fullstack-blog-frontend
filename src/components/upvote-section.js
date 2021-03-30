import React from 'react'



const UpvoteSection = ({articleName, upvotes, setArticleInfo}) => {
    const upvoteButtonClick = async () => {
        let result = await fetch(`/api/articles/${articleName}/upvote`,{method:'post'});
        let body = await result.json();
        setArticleInfo(body);
        console.log(body)
    };

    return(
        <div id='upvotes-section'>
            <button onClick={upvoteButtonClick}>Add Upvote</button>
            <p>This article has been upvoted {upvotes} times</p>
        </div>
    );    

}

export default UpvoteSection;