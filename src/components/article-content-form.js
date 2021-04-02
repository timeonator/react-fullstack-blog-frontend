import React, {useState} from 'react'


const ArticleContentForm = () => {
    [username, setUserName] = useState("");
    [articleName, setArticleName]= useState("");
    [articleTitle, setArticleTitle]= useState("");
    [articleContent, setArticleContent] = useState("");
    return(
        <div className='article-content-form'>
            <input type="text" onChange={setUserName} value= {username} />
            <input type="text" onChange={setArticleName} value= {articleName} />
            <input type="text" onChange={setArticleTitle} value= {articleTitle} />
            <input type="textarea" onChange={setArticleContent} value={articleContent} />
        </div>  
    );

    
}
export default ArticleContentForm;