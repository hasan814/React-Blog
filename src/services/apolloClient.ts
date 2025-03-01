import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: `https://us-west-2.cdn.hygraph.com/content/clzbuewat01q807uvspbyuy08/master`,
  cache: new InMemoryCache(),
});

export default client;
