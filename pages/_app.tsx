import React from "react";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { YogaLink } from "@graphql-yoga/apollo-link";

const link = new YogaLink({
  endpoint: "http://localhost:4000/graphql",
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
