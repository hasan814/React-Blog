import { IAuthorPosts } from "../../../types";
import { Typography } from "@mui/material";

import CardEL from "../../Elements/CardEL";
import Grid from "@mui/material/Grid2";

const AuthorPosts = ({ name, posts }: IAuthorPosts) => (
  <Grid size={12} mt={6}>
    <Typography variant="h5" fontWeight={700} gutterBottom>
      مقالات {name}
    </Typography>
    <Grid container spacing={2}>
      {posts?.map((post) => (
        <Grid key={post.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <CardEL {...post} />
        </Grid>
      ))}
    </Grid>
  </Grid>
);

export default AuthorPosts;
