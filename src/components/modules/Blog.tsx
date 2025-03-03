import { GET_BLOGS_INFO } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

import Loading from "./Loading";
import Error from "./Error";

const Blog = () => {
  // =============== Query =================
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  console.log(loading);

  // =============== Rendering =================
  if (loading) return <Loading />;
  if (error) return <Error />;
  return <div>Blog</div>;
};

export default Blog;
