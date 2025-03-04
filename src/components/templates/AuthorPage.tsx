import { GET_AUTHOR_INFO } from "../../graphql/queries";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Loading from "../modules/Loading";
import Error from "../modules/Error";

const AuthorPage = () => {
  // ============== Params ==============
  const { slug } = useParams();

  // ============== Query ==============
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  // =============== Rendering =================
  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data?.authors?.length) return <Typography>No authors found.</Typography>;

  return <div>AuthorPage</div>;
};

export default AuthorPage;
