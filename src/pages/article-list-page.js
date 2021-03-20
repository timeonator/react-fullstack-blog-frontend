import React from "react"
import articleContent from './article-content'
import ArticleList from '../components/article-list'


const ArticleListPage = () => {
    return(
    <>
    <div className="article-list-page">
        <h2>Articles</h2>
        <ArticleList articles={articleContent} />
        <h2>Other Articles</h2>
    </div>
    </>)
    }

export default ArticleListPage;