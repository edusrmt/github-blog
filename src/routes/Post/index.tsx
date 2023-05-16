import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { PostBody } from '../../components/PostBody'
import { PostHeader } from '../../components/PostHeader'

import { ArticlesContext, Article } from '../../contexts/ArticlesContext'

import { PostContainer } from './styles'

export function Post() {
  const [article, setArticle] = useState({} as Article)
  const { articles } = useContext(ArticlesContext)
  const { postNumber } = useParams()

  useEffect(() => {
    const convertedNumber = parseInt(postNumber ?? '')

    const selectedArticle =
      articles.find((article) => article.number === convertedNumber) ??
      ({} as Article)

    console.log(selectedArticle)
    setArticle(selectedArticle)
  }, [articles, postNumber])

  return (
    <PostContainer>
      <PostHeader article={article} />
      <PostBody article={article} />
    </PostContainer>
  )
}
