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

export const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

export const GET_AUTHOR_INFO = gql`
query getAuthorInfo($slug:String!){
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    field
    name
    description {
      html
    }
    posts {
      coverPhoto {
        url
      }
      id
      slug
      title
    }
  }
}
`


export const GET_POST_INFO = gql`
query getPost($slug:String!){
  post(where: {slug: $slug}) {
    author {
      ... on Author {
        id
        name
        avatar {
          url
        }
        field
      }
    }
    content {
      html
    }
    title
    coverPhoto {
      url
    }
  }
}
`

export const GET_POST_COMMENTS = gql`
  query getPostComments($slug:String!){
    comments(where:{post:{slug:$slug}}){
      id,
      name,
      text
    }
  }
`