import React from 'react'
import ArticleList from '../components/article-list'
//import reactDom from "react-dom"
import articleContent from './article-content'

const ArticlePage = ({match}) => {
    const name = match.params.name
    const article = articleContent.find(article => article.name === name);
    const otherArticles = articleContent.filter(article => article.name !== name)
    return(
    <>
        <h3>{article.name} : {article.title}</h3>
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