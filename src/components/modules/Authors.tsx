import { GET_AUTHORS_INFO } from "../../graphql/queries";
import { v4 as uuidv4 } from "uuid";
import { Typography } from "@mui/material";
import { useQuery } from "@apollo/client";
import { IAuthor } from "../../types";

import AuthorCard from "../Elements/AuthorCard";
import Loading from "./Loading";
import Error from "./Error";
import Grid from "@mui/material/Grid2";

const Authors = () => {
  // =============== Query =================
  const { loading, data, error } = useQuery<{ authors: IAuthor[] }>(
    GET_AUTHORS_INFO
  );

  // =============== Rendering =================
  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!data?.authors?.length) return <Typography>No authors found.</Typography>;

  return (
    <Grid
      container
      spacing={2}
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
        borderRadius: 4,
        p: 2,
      }}
    >
      {data.authors.map((author, index) => (
        <AuthorCard
          key={uuidv4()}
          {...author}
          isLast={index === data.authors.length - 1}
        />
      ))}
    </Grid>
  );
};

export default Authors;
