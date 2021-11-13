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

// getting individual posts

export const getPostDetails = async (slug) => {
  const query = gql`
 query GetPostDetails($slug: String) {
   post(where: {slug: $slug}){
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
      content{
        raw
      }
    }
}

  `
  const result = await request(graphqlAPI, query, {slug})
  return result.post
}


// get recent posts
export const getRecentPosts = async() => {
  const query = gql`
    query GetPostDetails(){
      posts(
        orderBy: createdAt_ASC
        last: 3
      ){
        title
        featuredImage{
          url
        }
        createdAt
        slug
        author{
          name
        }
        categories{
          name
          slug
        }
      }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.posts
}

export const getSimilarPosts = async(categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String]){
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ){
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query, {categories, slug})
  return result.posts
}


export const getCategories = async() => {
  const query = gql`
    query GetPostsCategories{
     categories{
       name
       slug
     }
    }
  `
  const result = await request(graphqlAPI, query)
  return result.categories
}


export const submitComment = async(obj) => {
  const result = await fetch('/api/send-comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
  return result.json()
}