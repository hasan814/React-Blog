import { IBlogImage } from "../../../types";

import Grid from "@mui/material/Grid2";

const BlogImage = ({ src, alt }: IBlogImage) => (
  <Grid size={12} mt={6}>
    <img src={src} alt={alt} width="100%" style={{ borderRadius: 15 }} />
  </Grid>
);

export default BlogImage;
