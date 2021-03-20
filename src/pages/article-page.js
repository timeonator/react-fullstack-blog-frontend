import React from "react"
//import reactDom from "react-dom"
import articleContent from './article-content';

const ArticlePage = ({match}) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name)

    return(
    <>
        <h3>{article.name} : {article.title}</h3>
        {/* article.content is a array of paragraphs */}
        <div>
            <p>Paragraphs</p>
            {article.content.map((paragraph, key) => {
                return(<p key={key}>{paragraph}</p>)
            })}
        </div>
    </>
    );}
export default ArticlePage;