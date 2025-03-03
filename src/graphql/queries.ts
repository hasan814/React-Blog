import { gql } from "@apollo/client";

export const GET_BLOGS_INFO = gql`
  query{
  posts {
    author {
      ... on Author {
        id
        name
        avatar {
          url
        }
      }
    }
    title
    slug
    id
    coverPhoto {
      url
    }
  }
}
`