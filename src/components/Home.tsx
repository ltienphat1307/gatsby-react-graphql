import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { GET_CATEGORIES } from "../apolloClient/useCategory"
import CreateCategory from "./CreateCategory"

const Home: React.FC = () => {
  const { data, loading, called, error } = useQuery(GET_CATEGORIES)

  if (loading || !called) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }

  const categories = data.getCategories

  return (
    <div>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <b>Name: </b>
            {category.name} - <b>Code: </b>
            {category.code}
          </li>
        ))}
      </ul>
      <CreateCategory />
    </div>
  )
}

export default Home
