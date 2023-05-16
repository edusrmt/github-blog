import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

import { Article } from '../../contexts/ArticlesContext'

import { PostBodyContainer } from './styles'

export function PostBody({ article }: { article: Article }) {
  return (
    <PostBodyContainer>
      <ReactMarkdown>{article.body}</ReactMarkdown>
    </PostBodyContainer>
  )
}
