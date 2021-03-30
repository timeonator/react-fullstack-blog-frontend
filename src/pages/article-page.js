import React, {useState, useEffect} from 'react'
import ArticleList from '../components/article-list'
import PageNotFound from './page-not-found'
import articleContent from './article-content'

const ArticlePage = ({match}) => {
    const name = match.params.name
    const article = articleContent.find(article => article.name === name);
    const otherArticles = articleContent.filter(article => article.name !== name)
    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments : []});
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`http://localhost:8000/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }
        fetchData();
    },[name]);

    if(!article) return <PageNotFound /> 
    
    return(
    <>
        <h3>{article.title}</h3>
        <p>This article has been upvoted {articleInfo.upvotes} times</p>
        {/* article.content is a array of paragraphs */}
        <div>
            {article.content.map((paragraph, key) => {
                return(<p key={key}>{paragraph}</p>)
            })}
            <h3>Other Articles:</h3>
            <ArticleList articles={otherArticles} />
        </div>

    </>
    )}
export default ArticlePage;