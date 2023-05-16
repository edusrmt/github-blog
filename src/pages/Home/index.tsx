import { ArticlesGrid } from '../../components/ArticlesGrid'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { SearchForm } from '../../components/SearchForm'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <Profile />
        <SearchForm />
        <ArticlesGrid />
      </HomeContainer>
    </>
  )
}
