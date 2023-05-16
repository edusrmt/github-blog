import { useContext } from 'react'

import { ArticlesContext } from '../../contexts/ArticlesContext'
import { timeFromNow } from '../../utils/formatter'

import { ArticlesGridContainer, ArticleContainer, Heading } from './styles'

export function ArticlesGrid() {
  const { articles } = useContext(ArticlesContext)

  return (
    <ArticlesGridContainer>
      {articles.map((article) => {
        return (
          <ArticleContainer key={article.id}>
            <Heading>
              <h3>{article.title}</h3>
              <span>{timeFromNow(article.created_at)}</span>
            </Heading>

            <p>{article.body}</p>
          </ArticleContainer>
        )
      })}
    </ArticlesGridContainer>
  )
}
