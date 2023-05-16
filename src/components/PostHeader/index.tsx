import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Article } from '../../contexts/ArticlesContext'
import { timeFromNow } from '../../utils/formatter'

import {
  PostHeaderContainer,
  Navigation,
  NavigationLink,
  NavigationAnchor,
  InfosContainer,
  InfoItem,
} from './styles'

export function PostHeader({ article }: { article: Article }) {
  return (
    <PostHeaderContainer>
      <Navigation>
        <NavigationLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          BACK
        </NavigationLink>
        <NavigationAnchor
          href={article.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          VIEW ON GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </NavigationAnchor>
      </Navigation>
      <h1>{article.title}</h1>
      <InfosContainer>
        <InfoItem>
          <FontAwesomeIcon icon={faGithub} />
          <span>{article.user && article.user.login}</span>
        </InfoItem>
        <InfoItem>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{article.created_at && timeFromNow(article.created_at)}</span>
        </InfoItem>
        <InfoItem>
          <FontAwesomeIcon icon={faComment} />
          <span>{article.comments} comments</span>
        </InfoItem>
      </InfosContainer>
    </PostHeaderContainer>
  )
}
