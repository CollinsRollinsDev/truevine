import {request, gql} from 'graphql-request';

const graphqlAPI = 'https://api-eu-central-1.graphcms.com/v2/ckvvzv07o2u2101wdbllf6xxh/master';

export const getPosts = async () => {
    const query = gql`
   query MyQuery {
  postsConnection {
    edges {
      node {
        createdAt
        author {
          bio
          name
          id
          photo {
            url
          }
        }
        excerpt
        slug
        title
        featuredImage {
          url
          size
        }
        categories {
          name
          slug
        }
      }
    }
  }
}

    `
    const result = await request(graphqlAPI, query)
    return result.postsConnection.edges
}