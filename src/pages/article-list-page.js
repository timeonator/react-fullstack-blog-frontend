import React, {useState, useEffect} from "react"

import ArticleList from '../components/article-list'

const ArticleListPage = () => {
const [articleListInfo, setArticleListInfo] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch('/api/articles/all');
            const body = await result.json();
            setArticleListInfo(body);
            console.log(articleListInfo);
        }
        fetchData();
    },[]);
    return(
    <>
    <div className="article-list-page">
        <h2>Articles</h2>
        <ArticleList articles={articleListInfo} />
    </div>
    </>)
    }

export default ArticleListPage;