import {
  ReactNode,
  createContext,
  useState,
  useCallback,
  useEffect,
} from 'react'
import { api } from '../lib/axios'

export interface Article {
  title: string
  created_at: string
  body: string
  number: number
  html_url: string
  user: { login: string }
  comments: number
}

interface ArticlesContextType {
  articles: Article[]
  articlesCount: number
  fetchArticles: (query?: string) => Promise<void>
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
    <ArticlesContext.Provider
      value={{ articles, articlesCount, fetchArticles }}
    >
      {children}
    </ArticlesContext.Provider>
  )
}
