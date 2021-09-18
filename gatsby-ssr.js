import React from "react"
import ApolloProvider from "./src/apolloClient/ApolloProvider"

export const wrapRootElement = ({ element }) => {
  return <ApolloProvider>{element}</ApolloProvider>
}
