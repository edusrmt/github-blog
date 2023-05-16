import { useContext } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { ArticlesContext } from '../../contexts/ArticlesContext'

import { Heading, SearchFormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { articlesCount, fetchArticles } = useContext(ArticlesContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchArticles(data: SearchFormInputs) {
    console.log(data.query)
    await fetchArticles(data.query)
  }

  return (
    <section>
      <Heading>
        <h2>Articles</h2>
        <span>{articlesCount} articles</span>
      </Heading>

      <SearchFormContainer onSubmit={handleSubmit(handleSearchArticles)}>
        <input
          type="text"
          placeholder="Search content"
          {...register('query')}
        />
      </SearchFormContainer>
    </section>
  )
}
