import { Avatar, Box, Typography } from "@mui/material";
import { IBlogAuthor } from "../../../types";

import Grid from "@mui/material/Grid2";

const BlogAuthor = ({ avatarUrl, name, field }: IBlogAuthor) => (
  <Grid size={12} mt={7} display="flex" alignItems="center">
    <Avatar src={avatarUrl} sx={{ width: 80, height: 80, marginLeft: 2 }} />
    <Box>
      <Typography component="p" variant="h5" fontWeight={700}>
        {name}
      </Typography>
      <Typography component="p" variant="body1" color="text.secondary">
        {field}
      </Typography>
    </Box>
  </Grid>
);

export default BlogAuthor;
