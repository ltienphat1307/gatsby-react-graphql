import React, { ReactElement } from "react"
import { ApolloProvider } from "@apollo/react-hooks"
import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import fetch from "isomorphic-fetch"

const httpLink = createHttpLink({
  uri: "http://localhost:3000/graphql",
  fetch,
  fetchOptions: {
    credentials: "include",
  },
})

const cache = new InMemoryCache()

const client = new ApolloClient({
  link: httpLink,
  cache: cache,
})

interface IProps {
  children: ReactElement
}

const ApolloProviderWrapper = ({ children }: IProps) => {
  return (
    <ApolloProvider client={client}>
      {React.cloneElement(children)}
    </ApolloProvider>
  )
}

export default ApolloProviderWrapper
