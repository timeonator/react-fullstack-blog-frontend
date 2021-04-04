import '../styles/article-content-form.css';
import React, {useState} from 'react'

const addArticle = async () => {

}

const ArticleContentForm = () => {
    const [username, setUserName] = useState("");
    const [articleName, setArticleName]= useState("");
    const [articleTitle, setArticleTitle]= useState("");
    const [articleContent, setArticleContent] = useState("");
    return(
        <div id='article-content-form'>
            <h3>New Article</h3>
            <label>User Name
                <input type="text" onChange={setUserName} value= {username} />
            </label>
            <label>Article Name
                <input type="text" onChange={setArticleName} value= {articleName} />                
            </label>
            <label>Title
                <input type="text" onChange={setArticleTitle} value= {articleTitle} />
            </label>
            <label>Content
                <input type="textarea" onChange={setArticleContent} value={articleContent} />
            </label>
            <button onClick={addArticle}>Save </button>
        </div>  
    );

    
}
export default ArticleContentForm;