
import { GraphQLClient, gql } from "graphql-request";

const graphqlAPI = 'https://api-eu-central-1.graphcms.com/v2/ckvvzv07o2u2101wdbllf6xxh/master';


export default async function comments(req, res){

  const {name, email, comment, slug} = req.body

  const graphQlClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2MzY3OTg1NTYsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEuZ3JhcGhjbXMuY29tL3YyL2NrdnZ6djA3bzJ1MjEwMXdkYmxsZjZ4eGgvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiOTRkZTk0NWUtNWRiMC00YTI4LWJjMDktYTM0MDI3ZGQ3NGJmIiwianRpIjoiY2t2eG5sbDZoM2l5ZzAxejBobmVzOGg0YyJ9.QFtFT9XXSSW41u2rgjpgbDN3pM5g_zJeiMyPCAZlp7k72kHBxPtks2xiYzv_J3CYdLHNqGVnwsXDeXUAtolCl7dL-_wlcAEtdr6KZWSvyHDh75WreOiK_AvKkrKehqBmQIVI0KyJX57Y1xM3alCBNSqPCRRHNV3ztVkFE52Yp2YeYF6TlqjMvvBVS8IPE8e11ClPFILVRKwIzxIekZBpMprTu5T6X0KdMPcpsyrs7uDlCn4H4TCYCazrSZRM-7c5avrVVbDvMTwATsPxL4tD6XYi4JQ0ddUubEY_bDrdv3IyTUWOgf7J6YeirEWUfORyBDnYztxabIB8TCP-b3KDJeM8IqH6xSWheMLYjfgJ7DijaWAFE0JLl4eIho-R_-N1zzyB29NAd88cyhbsbeOzpvkpN3cSscpKnd6j9RKQvE8aXY4YSKsWbtIKfOEkuYxbZ9V9gHi-I5DUzFDyH73TbQbUABoTELZYIYwLBpfk8ZjJCZVUzcwRQAdL3JjXnaHaxl4u4qxMvokZDJWFnQ1HcHb4ZMkHT4WFPr-HeLzQ5pmyLF0nZokrNOw6jRrgzK6Ck8luncQOh6PE20D3K3TqDky5DFJ67KCbuYPLWmWxapgUrw0Ju_kDoZGSzEXCtCOorreN_1M6OLdASmQFuoDU8j9hJhEy6o3O1T-uQw1njEU`
    }
  })

  const query = gql`
    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
  `

  const result = await graphQlClient.request(query, {
    name: name,
    email: email,
    comment: comment,
    slug: slug
  });
  // console.log(result)
  return res.status(200).send(result);

}