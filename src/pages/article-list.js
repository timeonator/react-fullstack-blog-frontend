import React from "react"
import articleContent from './article-content'
import {Link} from 'react-router-dom'

const ArticleListPage = () => {
    return(
    <>
        <div className="article-list-page">
            <h2>Articles</h2>
            {articleContent.map((article,key) => {
                return(
                    <Link className='article-list-item' to={`/article/${article.name}`} key={key}>
                       <h3>{article.title}</h3>
                       <p>{article.content[0].substr(0,150)}...</p>
                    </Link>
                )
            })}
 
    </div>
    </>
    );}
export default ArticleListPage;