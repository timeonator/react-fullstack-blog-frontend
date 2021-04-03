import React, {useState, useEffect} from 'react'
// import ArticleList from '../components/article-list'
import PageNotFound from './page-not-found'
import CommentsList from '../components/comments-list'
import UpvoteSection from '../components/upvote-section'
import AddCommentForm from '../components/add-comment-form'

const ArticlePage = ({match}) => {
    const name = match.params.name
    // const article = articleContent.find(article => article.name === name);
    // const otherArticles = articleContent.filter(article => article.name !== name)
    const [articleInfo, setArticleInfo] = useState({upvotes: 0, comments : [], title: "", name: "", content:[]});
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            console.log(body);
            setArticleInfo(body);
        }
        fetchData();
    },[name]);

    if(!articleInfo) return <PageNotFound /> 

    return(
    <>
        <h3>{articleInfo.title}</h3>
        <UpvoteSection articleName={name} upvotes={articleInfo.upvotes} setArticleInfo={setArticleInfo}/>
        {/* article.content is a array of paragraphs */}
        <div>
            {articleInfo.content.map((paragraph, key) => {
                return(<p key={key}>{paragraph}</p>)
            })}
            <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
            <CommentsList comments={articleInfo.comments} />
            {/* <h3>Other Articles:</h3>
            <ArticleList articles={otherArticles} /> */}
        </div>

    </>
    )}
export default ArticlePage;