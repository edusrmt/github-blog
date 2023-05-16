import {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { api } from '../lib/axios'

interface Article {
  id: number
  title: string
  created_at: string
  body: string
  html_url: string
}

interface ArticlesContextType {
  articles: Article[]
  articlesCount: number
}

interface ArticlesProviderProps {
  children: ReactNode
}

export const ArticlesContext = createContext({} as ArticlesContextType)

export function ArticlesProvider({ children }: ArticlesProviderProps) {
  const [articles, setArticles] = useState<Article[]>([])
  const [articlesCount, setArticlesCount] = useState(0)

  const fetchArticles = useCallback(async (query = '') => {
    const response = await api.get('search/issues', {
      params: { q: `${query} repo:edusrmt/github-blog` },
    })

    setArticlesCount(response.data.total_count)
    setArticles(response.data.items)
  }, [])

  useEffect(() => {
    fetchArticles()
  }, [fetchArticles])

  return (
    <ArticlesContext.Provider value={{ articles, articlesCount }}>
      {children}
    </ArticlesContext.Provider>
  )
}