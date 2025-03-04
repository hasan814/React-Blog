import { IBlogHeader } from "../../../types";
import { Typography } from "@mui/material";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Grid from "@mui/material/Grid2";

const BlogHeader = ({ title, onBack }: IBlogHeader) => (
  <Grid
    size={12}
    mt={9}
    display="flex"
    alignItems="center"
    justifyContent="space-between"
  >
    <Typography component="h2" variant="h4" color="primary" fontWeight={700}>
      {title}
    </Typography>
    <ArrowBackRoundedIcon onClick={onBack} sx={{ cursor: "pointer" }} />
  </Grid>
);

export default BlogHeader;
