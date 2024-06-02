import { useParams } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import articles from './article-content';
import axios from 'axios'
import { useState, useEffect } from 'react';
import CommentsList from '../components/CommentsList'
import AddCommentForm from '../components/AddCommentForm'

const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({upvote : 0, comments: []})
    const { articleId } = useParams();
    const article = articles.find(article => article.name === articleId);

    useEffect(()=>{
        const loadArticleInfo = async () => {
        const response = await axios.get(`/api/articles/${articleId}`)
        setArticleInfo(response.data)
        }
        loadArticleInfo();
    }, []);

    const addUpvote = async() => {
        const response = await axios.put(`/api/articles/${articleId}/upvote`)
        setArticleInfo(response.data)
    }

    if (!article) {
        return <NotFoundPage />
    }

    return (
        <>
        <h1>{article.title}</h1>
        <p>This article has {articleInfo.upvotes} upvote(s)</p>
        <button onClick={addUpvote}>Upvote</button>
        {article.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
        ))}
        <AddCommentForm
            articleName = {articleId}
            OnArticleUpdated = {updatedArticle => setArticleInfo(updatedArticle)} />
        <CommentsList comments={articleInfo.comments}/>
        </>
    );
}

export default ArticlePage;