import { GET_BLOGS_INFO } from "../../../graphql/queries";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "@apollo/client";
import { ICardEL } from "../../../types";

import Loading from "../../Elements/Loading";
import CardEL from "../../Elements/CardEL";
import Error from "../../Elements/Error";
import Grid from "@mui/material/Grid2";

const Blog = () => {
  // =============== Query =================
  const { loading, data, error } = useQuery<{ posts: ICardEL[] }>(
    GET_BLOGS_INFO
  );

  // =============== Rendering =================
  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <Grid container spacing={2}>
      {data?.posts.map((post: ICardEL) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={uuidv4()}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Blog;
