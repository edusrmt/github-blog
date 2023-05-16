import { SearchFormContainer } from './styles'

import { Heading } from './styles'

export function SearchForm() {
  return (
    <section>
      <Heading>
        <h2>Articles</h2>
        <span>6 articles</span>
      </Heading>

      <SearchFormContainer>
        <input type="text" placeholder="Search content" />
      </SearchFormContainer>
    </section>
  )
}
