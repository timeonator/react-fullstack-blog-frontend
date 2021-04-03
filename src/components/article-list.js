import React from "react"
import {Link} from 'react-router-dom'
const ArticleList = ({articles}) => {
    return (
    <>
    {articles.map((article, key) => {
        return(<Link className='article-list-item' to={`/article/${article.name}`} key={key}>
            <h3>{article.title}</h3>
            <p>Upvotes: {article.upvotes}</p>
            <p>{article.content[0].substr(0, 150)}...</p>
        </Link>)
    })}
    </>
    )
}

export default ArticleList