import gql from "graphql-tag"

export const GET_CATEGORIES = gql`
  query GetCategories {
    getCategories {
      id
      code
      name
    }
  }
`

export const CREATE_CATEGORY = gql`
  mutation CreateCate($data: CreateCategoryInput!) {
    createCategory(data: $data) {
      id
      name
      code
    }
  }
`
